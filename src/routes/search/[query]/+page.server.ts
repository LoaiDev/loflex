import { get_source } from '$lib/server/source';
import type { PageServerLoad } from './$types';

export const load = (async ({ fetch, params, cookies }) => {
	const source = get_source(cookies, fetch);
    const results = await (source.search(params.query))
	return {
		results: results
	};
}) satisfies PageServerLoad;
