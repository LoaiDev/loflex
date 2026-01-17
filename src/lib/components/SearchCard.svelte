<script lang="ts">
    interface Props {
        name: string;
        url: string;
        poster?: string;

    }

    let { name, poster, url }: Props = $props();
</script>


<a class="flex flex-col rounded-xl overflow-hidden border dark:border-zinc-600 h-80" href={url}>
    <img src="{poster ?? 'https://placehold.co/400x600'}" class="h-4/5 object-cover w-full" alt="">
    <div class="w-full h-1/5 bg-white dark:bg-zinc-800 dark:text-white px-3 flex items-center justify-between border-t-2 border-t-primary">
     <span class="capitalize font-medium truncate">{ name }</span>
     <div class="flex space-x-2 items-center text-xs">
        <span>8.8</span>
    </div>
    </div>
</a>