<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
	import SideBar from '$lib/components/SideBar.svelte';
	import { writable } from 'svelte/store';
	import { setContext } from 'svelte';
	import Header from '$lib/components/Header.svelte';
	import NProgress from '$lib/components/NProgress.svelte';

	const sidebar = writable(false);
	setContext('sidebar', sidebar);
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<NProgress />
<SideBar />
<Header />
<main class="mt-header flex min-h-[calc(100vh-var(--spacing-header))] px-5 py-10 sm:px-10 md:ms-sidebar">
	<div class="mx-auto">
		{@render children()}
	</div>
</main>
