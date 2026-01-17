<script lang="ts">
	import Downloads from '$lib/components/Downloads.svelte';
	import Video from '$lib/components/Video.svelte';
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

<div class="flex flex-col items-center gap-y-10 py-8">
	<h2 class="text-4xl font-extrabold text-gray-800 dark:text-gray-200">Watch</h2>
	<Video data={data.movie.video?.watch} />
	<h2 class="text-4xl font-extrabold text-gray-800 dark:text-gray-200">Download</h2>
	<Downloads data={data.movie.video.download} />
</div>
