import { AKWAM_BASE_URL } from '$env/static/private';
import type { Movie, SearchItem, VideoSource } from '$lib/models';
import type { Fetch } from './source';
import type Source from './source';

/* class AkwamMovie implements Movie {
	id: string;
	name: string;

	constructor(id: string, name: string) {
		this.id = id;
		this.name = name;
	}
}

class AkwamSeries implements Series {
	id: string;
	name: string;

	constructor(id: string, name: string) {
		this.id = id;
		this.name = name;
	}
} */

export class AkwamSource implements Source {
	fetch: Fetch;

	constructor(fetch: Fetch) {
		this.fetch = fetch;
	}

	async search(query: string): Promise<SearchItem[]> {
		const html = await this.fetch(`${AKWAM_BASE_URL}/search?q=${query}`).then((r) => r.text());
		const results = html.matchAll(
			new RegExp('<a href=".*?(series|movie)/(\\d*).*?" ?class="text-white">(.*?)</a>', 'gm')
		);
		// console.log(html);
		
		
		return Array.from(results, (item) => {
			console.log(item);
			
			return {
				type: item[1] == 'movie' ? 'movie' : 'series',
				item: {
					id: item[2],
					name: item[3]
				}
			};
		});
	}

	async get_movie(id: string): Promise<Movie> {
		const html = await this.fetch(`${AKWAM_BASE_URL}/movie/${id}`).then((r) => r.text());
		const name = html.match(
			new RegExp('<h1 class="entry-title font-size-28 font-weight-bold text-white mb-0">(.*?)</h1>')
		)?.[1] ?? 'unknown';
		const qualityMatches = html.matchAll(new RegExp('<a href="#tab-(\\d)".*?>(\\d+?)p</a>', 'g'));
		const promises: Promise<VideoSource | undefined>[] = Array.from(qualityMatches, (match) => {
			const quality = parseInt(match[2])
			const tab = match[1]
			const link = html.match(`data-quality="${tab}">(?:.|\\s| )*?<a href="((?:.|\\s| )*?)"`)?.[1]
			const videoId = link?.split('/').at(-1)
			if (!videoId) return Promise.resolve(undefined)
			return this.#get_video_source(quality, videoId, id)
		})

		const sources = (await Promise.all(promises)).filter(item => item !== undefined) as VideoSource[]

		return {
			id: id,
			name: name,
			video: {
				name: name,
				sources: sources
			}
		}
		
	}

	async #get_video_source(quality: number, videoId: string, id: string): Promise<VideoSource | undefined> {
		const html = await this.fetch(`${AKWAM_BASE_URL}/download/${videoId}/${id}`).then((r) => r.text());
		const download_link = html.match(`<a href="(.+?)" download class="link btn btn-light">`)?.[1]
		if (!download_link) return
		return {
			quality: quality,
			download_link: download_link
		}
	}
}
