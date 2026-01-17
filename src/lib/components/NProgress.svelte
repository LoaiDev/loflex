<script lang="ts">
    import NProgress from 'nprogress';
	import '$lib/styles/nprogress.scss';
	import { afterNavigate, beforeNavigate } from '$app/navigation';

	NProgress.configure({
		minimum: 0.16,
		parent: '#nprogress-container'
	});

	beforeNavigate(() => {
		NProgress.start();
	});
	afterNavigate(() => {
		NProgress.done();
	});
</script>

<div class="fixed top-header w-full">
	<div class="pointer-events-none fixed z-50 h-10 w-full" id="nprogress-container"></div>
</div>