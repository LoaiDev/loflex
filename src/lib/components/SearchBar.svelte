<div class="relative items-center flex">
    <span class="text-gray-400 absolute left-4 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
    </span>
    <form on:submit|preventDefault={onSearch} class="w-full">
        <input bind:value={value} type="text" class="text-xs ring-1 bg-transparent ring-gray-200 dark:ring-zinc-600 focus:ring-red-300 pl-10 pr-5 text-gray-600 dark:text-white  py-3 rounded-full w-full outline-none focus:ring-1" placeholder="Search ...">
    </form>
</div>

<script lang="ts">
	import { goto } from "$app/navigation";

    let value: string;

    function onSearch(e: SubmitEvent){
        goto("/search/" + value)
    }
</script>