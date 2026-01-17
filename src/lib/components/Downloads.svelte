<script lang="ts">
	import type { DownloadData } from '$lib/models';

    interface Props {
        data: DownloadData;
    }
	let { data }: Props = $props();
    const buttons = $derived.by(() => {
        if (data.type === 'direct') {
            return data.sources.map((source) => ({ name: source.quality, url: source.url }));
        } else if (data.type === 'single') {
            return [{ name: 'Download', url: data.url }];
        }
        return [];
    });
</script>

<div class="flex flex-wrap justify-center gap-x-12 gap-y-6">
	{#each buttons as button}
		<a
			href={button.url}
			class="flex h-12 flex-wrap items-center justify-center rounded-md border border-transparent bg-blue-600 px-16 text-base font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:bg-blue-700"
		>
			{button.name}
		</a>
	{/each}
</div>