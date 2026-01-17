<script lang="ts">
	import type { Readable } from "svelte/store";
	import SearchBar from "./SearchBar.svelte";
    import { getContext } from "svelte";
    const sidebar = getContext<Readable<boolean>>("sidebar");

</script>
<header class="bg-bg fixed top-0 z-40 flex h-header w-full items-center justify-between gap-x-3 border border-gray-300 px-5 py-10 text-lg font-bold sm:px-10 dark:border-zinc-700">
	<div class="flex items-center gap-x-3">
		<button type="button" class="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 focus:outline-none md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" onclick={() => ($sidebar = !$sidebar)}>
			<span class="sr-only">Open sidebar</span>
			<svg class="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
				<path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z" />
			</svg>
		</button>
		<a class="flex items-center gap-x-3 text-lg font-bold" href="/">
			<svg class="h-8 w-8 fill-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
				<path
					d="M10 15.5v-7c0-.41.47-.65.8-.4l4.67 3.5c.27.2.27.6 0 .8l-4.67 3.5c-.33.25-.8.01-.8-.4Zm11.96-4.45c.58 6.26-4.64 11.48-10.9 10.9 -4.43-.41-8.12-3.85-8.9-8.23 -.26-1.42-.19-2.78.12-4.04 .14-.58.76-.9 1.31-.7v0c.47.17.75.67.63 1.16 -.2.82-.27 1.7-.19 2.61 .37 4.04 3.89 7.25 7.95 7.26 4.79.01 8.61-4.21 7.94-9.12 -.51-3.7-3.66-6.62-7.39-6.86 -.83-.06-1.63.02-2.38.2 -.49.11-.99-.16-1.16-.64v0c-.2-.56.12-1.17.69-1.31 1.79-.43 3.75-.41 5.78.37 3.56 1.35 6.15 4.62 6.5 8.4ZM5.5 4C4.67 4 4 4.67 4 5.5 4 6.33 4.67 7 5.5 7 6.33 7 7 6.33 7 5.5 7 4.67 6.33 4 5.5 4Z"
				></path>
			</svg>
			<div class="tracking-wide dark:text-white">Loflex<span class="text-primary">.</span></div>
		</a>
	</div>
	<nav class="hidden items-center space-x-6 font-medium text-gray-400 md:flex">
		<a href="/" class="align-middle hover:text-gray-700 dark:hover:text-white">TV Series</a>
		<a href="/" class="font-semibold text-gray-700 dark:text-white">Movies</a>
		<a href="/" class="hover:text-gray-700 dark:hover:text-white">Animes</a>
	</nav>

	<div class="w-1/2 md:w-1/3 max-w-lg">
		<SearchBar />
	</div>
</header>