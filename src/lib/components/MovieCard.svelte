<script lang="ts">
    export let name: string;
    export let poster: string;
</script>


<div class="flex flex-col rounded-xl overflow-hidden aspect-square border dark:border-zinc-600">
    <img src="{ poster }" class=" h-4/5 object-cover w-full  " alt="">
    <div class="w-full h-1/5 bg-white dark:bg-zinc-800 dark:text-white px-3 flex items-center justify-between border-t-2 border-t-red-600">
     <span class="capitalize  font-medium truncate">{ name }</span>
     <div class="flex space-x-2 items-center text-xs">
        <span>8.8</span>
    </div>
    </div>
</div>