<script lang="ts">
	import { page } from '$app/state';
	import SearchCard from '$lib/components/SearchCard.svelte';
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

<div>
	<h1 class="mb-4 text-2xl font-bold">Search Results for "{page.params.query}"</h1>
	<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4" data-sveltekit-preload-data="tap">
		{#each data.results as result (result.item.id)}
			<SearchCard url={`/${result.type}/${result.item.id}`} name={result.item.name} poster={result.item.poster} />
		{/each}
	</div>
</div>
