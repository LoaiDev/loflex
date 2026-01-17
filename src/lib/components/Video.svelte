<script lang="ts">
	import type { WatchData } from '$lib/models';
	import { onMount } from 'svelte';
	import 'plyr/dist/plyr.css';
	import { browser } from '$app/environment';

	interface Props {
		data: WatchData;
	}

	let { data }: Props = $props();
	let element: HTMLVideoElement;
	let player: Plyr;

	// function updateHlsQuality(newQuality: number, hls: Hls) {
	// 	if (newQuality === 0) {
	// 		hls.currentLevel = -1;
	// 	} else {
	// 		hls.levels.forEach((level, levelIndex) => {
	// 			if (level.height === newQuality) {
	// 				hls.currentLevel = levelIndex;
	// 			}
	// 		});
	// 	}
	// }
	// async function getOptions(): Promise<Plyr.Options> {
	// 	return new Promise(async (resolve) => {
	// 		const options: Plyr.Options = {};
	// 		if (data.type === 'hls') {
	// 			const Hls = (await import('hls.js')).default;
	// 			if (Hls.isSupported()) {
	// 				const hls = new Hls();
	// 				hls.loadSource(data.url);
	// 				hls.on(Hls.Events.MANIFEST_PARSED, () => {
	// 					const availableQualities = hls.levels.map((l) => l.height);
	// 					availableQualities.unshift(0);
	// 					options.quality = {
	// 						default: 0,
	// 						options: availableQualities,
	// 						forced: true,
	// 						onChange: (quality: number) => updateHlsQuality(quality, hls)
	// 					};
	// 					options.i18n = {
	// 						qualityLabel: {
	// 							0: 'Auto'
	// 						}
	// 					};

	// 					hls.on(Hls.Events.LEVEL_SWITCHED, (_event, data) => {
	// 						const span = document.querySelector(
	// 							".plyr__menu__container [data-plyr='quality'][value='0'] span"
	// 						);
	// 						if (span) {
	// 							if (hls.autoLevelEnabled) {
	// 								span.innerHTML = `AUTO (${hls.levels[data.level].height}p)`;
	// 							} else {
	// 								span.innerHTML = `AUTO`;
	// 							}
	// 						}
	// 					});
	// 					resolve(options);
	// 				});
	// 				hls.attachMedia(element);
	// 			} else {
	// 				element.innerHTML = 'HLS is not supported';
	// 			}
	// 		} else {
	// 			resolve(options);
	// 		}
	// 	});
	// }

	async function setSource() {
		if (data.type === 'direct') {
			player.source = {
				type: 'video',
				sources: data.sources.map((source) => ({
					src: source.url,
					type: 'video/mp4',
					size: source.height
				}))
			};
		} else if (data.type === 'single') {
			player.source = {
				type: 'video',
				sources: [
					{
						src: data.url
					}
				]
			};
		}
	}

	onMount(async () => {
		const Plyr = (await import('plyr')).default;
		player = new Plyr(element);
		await setSource();
	});
</script>

<div class="w-full max-w-5xl aspect-video *:h-full">
	<video bind:this={element}>
		{#if data.type == 'direct'}
			{#each data.sources as source}
				<source src={source.url} type="video/mp4" />
			{/each}
		{/if}
	</video>
</div>
