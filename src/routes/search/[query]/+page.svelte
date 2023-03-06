<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div>
	{#each data.results as result}
		{result.item.id} <br>
		<a class="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="/{result.type}/{result.item.id}">{result.item.name}</a> <br>
	{/each}
</div>
