<script lang="ts">
	import { getContext } from 'svelte';
	import DarkToggler from './DarkToggler.svelte';
	import { type Readable } from 'svelte/store';

	const sidebar = getContext<Readable<boolean>>('sidebar');
</script>

{#if $sidebar}
	<div role="presentation" class="fixed top-0 left-0 z-30 h-full w-full bg-gray-900/50 dark:bg-gray-900/80" on:click={() => ($sidebar = false)}></div>
{/if}
<aside
	class="fixed start-0 top-header z-40 scrollbar h-[calc(100dvh-var(--spacing-header))] w-sidebar transform overflow-y-auto border border-t-0 border-gray-300 bg-bg py-10 pl-10 transition-transform scrollbar-w-0 dark:border-zinc-700 md:translate-x-0{!$sidebar
		? ' -translate-x-full'
		: ''}"
>
	<!-- Menu -->
	<div class="flex flex-col gap-y-4 fill-gray-500 text-sm text-gray-500">
		<div class="font-medium text-gray-400/70 uppercase">Menu</div>
		<a class="flex items-center space-x-2 border-r-4 border-r-primary py-1 pr-20 font-semibold dark:text-white" href="/">
			<svg class="h-5 w-5 fill-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
				<path d="M5 22h14v0c1.1 0 2-.9 2-2v-9 0c0-.27-.11-.53-.29-.71l-8-8v0c-.4-.39-1.02-.39-1.41 0l-8 8h0c-.2.18-.3.44-.3.71v9 0c0 1.1.89 2 2 2Zm5-2v-5h4v5Zm-5-8.59l7-7 7 7V20h-3v-5 0c0-1.11-.9-2-2-2h-4v0c-1.11 0-2 .89-2 2v5H5Z"></path>
			</svg>
			<span>Home</span>
		</a>

		<div class="mt-8 font-medium text-gray-400/70 uppercase">Social</div>
		<a class=" group flex items-center space-x-2 py-1 hover:border-r-4 hover:border-r-primary hover:font-semibold dark:hover:text-white" href="#">
			<svg class="h-5 w-5 group-hover:fill-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
				<path d="M12 2v0C9.23 2 7 4.23 7 7c0 2.76 2.23 5 5 5 2.76 0 5-2.24 5-5v0c0-2.77-2.24-5-5-5Zm0 8v0c-1.66 0-3-1.35-3-3 0-1.66 1.34-3 3-3 1.65 0 3 1.34 3 3v0c0 1.65-1.35 3-3 3Zm9 11v-1 0c0-3.87-3.14-7-7-7h-4v0c-3.87 0-7 3.13-7 7v1h2v-1 0c0-2.77 2.23-5 5-5h4v0c2.76 0 5 2.23 5 5v1Z"></path>
			</svg>
			<span>Profile</span>
		</a>
		<a class=" group flex items-center space-x-2 py-1 hover:border-r-4 hover:border-r-primary hover:font-semibold dark:hover:text-white" href="#">
			<svg class="h-5 w-5 group-hover:fill-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
				<g>
					<path d="M16.6 11.04v-.001c.6-1.04.87-2.25.75-3.44 -.18-1.79-1.18-3.37-2.81-4.44l-1.11 1.66c1.11.742 1.8 1.79 1.91 2.974l-.001 0c.11 1.1-.29 2.2-1.08 2.98l-1.2 1.19 1.61.47c4.23 1.24 4.28 5.49 4.28 5.53h2c0-1.79-.96-5.285-4.4-6.952Z"></path>
					<path d="M9.5 12c2.2 0 4-1.8 4-4 0-2.21-1.8-4-4-4 -2.21 0-4 1.79-4 4 0 2.2 1.79 4 4 4Zm0-6c1.1 0 2 .89 2 2 0 1.1-.9 2-2 2 -1.11 0-2-.9-2-2 0-1.11.89-2 2-2Zm1.5 7H8c-3.31 0-6 2.69-6 6v1h2v-1c0-2.21 1.79-4 4-4h3c2.2 0 4 1.79 4 4v1h2v-1c0-3.31-2.7-6-6-6Z"></path>
				</g>
			</svg>
			<span>Friends</span>
		</a>
		<a class=" group flex items-center space-x-2 py-1 hover:border-r-4 hover:border-r-primary hover:font-semibold dark:hover:text-white" href="#">
			<svg class="h-5 w-5 group-hover:fill-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
				<g>
					<path d="M12 2v0C6.47 2 2 6.47 2 12c0 5.52 4.47 10 10 10 5.52 0 10-4.48 10-10v-.001c0-5.53-4.48-10-10-10Zm0 18v0c-4.42 0-8-3.59-8-8 0-4.42 3.58-8 8-8 4.41 0 8 3.58 8 8v0c0 4.41-3.59 8-8 8Z"></path>
					<path d="M12 8v0c-2.21 0-4 1.79-4 4 0 2.2 1.79 4 4 4 2.2 0 4-1.8 4-4v0c0-2.21-1.8-4-4-4Zm0 6v0c-1.11 0-2-.9-2-2 0-1.11.89-2 2-2 1.1 0 2 .89 2 2v0c0 1.1-.9 2-2 2Z"></path>
				</g>
			</svg>
			<span>Media</span>
		</a>

		<div class="mt-8 font-medium text-gray-400/70 uppercase">General</div>
		<a class=" group flex items-center space-x-2 py-1 hover:border-r-4 hover:border-r-primary hover:font-semibold dark:hover:text-white" href="#">
			<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover:stroke-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
				/>
				<path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
			</svg>
			<span>Settings</span>
		</a>
		<a class=" group flex items-center space-x-2 py-1 hover:border-r-4 hover:border-r-primary hover:font-semibold dark:hover:text-white" href="#">
			<svg class="h-5 w-5 group-hover:fill-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
				<g>
					<path d="M16 13v-2H7V8l-5 4 5 4v-3Z"></path>
					<path d="M20 3h-9c-1.11 0-2 .89-2 2v4h2V5h9v14h-9v-4H9v4c0 1.1.89 2 2 2h9c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2Z"></path>
				</g>
			</svg>
			<span>Logout</span>
		</a>
		<DarkToggler />
	</div>
	<!-- /Menu -->
</aside>
