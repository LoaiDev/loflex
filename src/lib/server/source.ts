import type { Movie, SearchItem } from '$lib/models';
import type { Cookies } from '@sveltejs/kit';
import { AkwamSource } from './akwam';
export type Fetch = typeof fetch;
export default interface Source {
	search(query: string): Promise<SearchItem[]>;
	get_movie(id: string): Promise<Movie>;
}

export function get_source(cookies: Cookies, fetch: Fetch): Source {
	return new AkwamSource(fetch);
}