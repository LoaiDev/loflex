import { env } from '$env/dynamic/private';
import type { DirectSource, Movie, SearchItem } from '$lib/models';
import { error } from '@sveltejs/kit';
import type { Fetch } from './source';
import type Source from './source';
import * as cheerio from 'cheerio';

const AKWAM_BASE_URL = env.AKWAM_BASE_URL;

const movieCache: Map<string, Movie> = new Map();
const searchCache: Map<string, SearchItem[]> = new Map();
export class AkwamSource implements Source {
	fetch: Fetch;

	constructor(fetch: Fetch) {
		this.fetch = fetch;
	}

	async search(query: string): Promise<SearchItem[]> {
		console.log(AKWAM_BASE_URL);
		console.log(env.AKWAM_BASE_URL);
		console.log(`${AKWAM_BASE_URL}/search?q=${query}`);

		if (searchCache.has(query)) {
			return searchCache.get(query)!;
		}
		const html = await this.fetch(`${AKWAM_BASE_URL}/search?q=${query}`).then((r) => r.text());	
		console.log(html);
		const $ = cheerio.load(html);
		const results = $('.col-lg-auto.col-md-4.col-6.mb-12')
			.map((_, element) => {
				const titleElement = $(element).find('a.text-white');				
				const href = titleElement.attr('href') || '';
				const idMatch = href.match(/\/(series|movie)\/(\d+)/);
				if (!idMatch) return null;
				const type = idMatch[1] === 'movie' ? 'movie' : 'series';
				const id = idMatch[2];
				const name = titleElement.text().trim();
				const poster = $(element).find('img').attr('data-src') || '';
				console.log(type, id, name, poster);
				return {
					type: type,
					item: {
						id: id,
						name: name,
						poster: poster
					}
				} as SearchItem;
			})
			.get()
			.filter((item) => item !== null) as SearchItem[];

		searchCache.set(query, results);
		return results;
	}

	async get_movie(id: string): Promise<Movie> {
		if (movieCache.has(id)) {
			return movieCache.get(id)!;
		}
		const html = await this.fetch(`${AKWAM_BASE_URL}/movie/${id}`).then((r) => r.text());
		const watchId = html.match(`/watch/(\\d+)"`)?.[1];
		if (!watchId) {
			error(404, 'Movie not found');
		}
		const name =
			html.match(
				new RegExp(
					'<h1 class="entry-title font-size-28 font-weight-bold text-white mb-0">(.*?)</h1>'
				)
			)?.[1] ?? 'unknown';
		const watchHtml = await this.fetch(`${AKWAM_BASE_URL}/watch/${watchId}/${id}`).then((r) => r.text()).then((t) => t.replace(/\n/g, ''));
		
		const sourceMatches = watchHtml.matchAll(
			new RegExp(
				`<source +?src="(.+?)" +?type="video/mp4" +?size="(\\d+?)" +?/>`,
				'gm'
			)
		);
		const sources: DirectSource[] = Array.from(sourceMatches, (match) => {
			return {
				quality: `${match[2]}p`,
				url: match[1],
				height: parseInt(match[2])
			};
		});

		const movie: Movie = {
			id: id,
			name: name,
			video: {
				watch: {
					type: 'direct',
					sources: sources
				},
				download: {
					type: 'direct',
					sources: sources
				}
			}
		};
		movieCache.set(id, movie);
		return movie;
		// const promises: Promise<DirectSource>[] = Array.from(qualityMatches, (match) => {
		// 	const quality = parseInt(match[2]);
		// 	const tab = match[1];
		// 	const link = html.match(`data-quality="${tab}">(?:.|\\s| )*?<a href="((?:.|\\s| )*?)"`)?.[1];
		// 	const videoId = link?.split('/').at(-1);
		// 	if (!videoId) return Promise.resolve(undefined);
		// 	return this.#get_video_source(quality, videoId, id);
		// });

		// const sources = (await Promise.all(promises)).filter(
		// 	(item) => item !== undefined
		// ) as VideoSource[];

		// return {
		// 	id: id,
		// 	name: name,
		// 	video: {
		// 		name: name,
		// 		sources: sources
		// 	}
		// };
	}

	// async #get_video_source(
	// 	quality: number,
	// 	videoId: string,
	// 	id: string
	// ): Promise<VideoSource | undefined> {
	// 	const html = await this.fetch(`${AKWAM_BASE_URL}/download/${videoId}/${id}`).then((r) =>
	// 		r.text()
	// 	);
	// 	const download_link = html.match(`<a href="(.+?)" download class="link btn btn-light">`)?.[1];
	// 	if (!download_link) return;
	// 	return {
	// 		quality: quality,
	// 		download_link: download_link
	// 	};
	// }
}
