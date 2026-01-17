import type { Movie } from '$lib/models';
import { get_source } from '$lib/server/source';
import type { PageServerLoad } from './$types';

export const load = (async ({ fetch, params, cookies }) => {
	const source = get_source(cookies, fetch);
    const movie: Movie = await source.get_movie(params.id);
    return {
        movie: movie
    }
}) satisfies PageServerLoad;
