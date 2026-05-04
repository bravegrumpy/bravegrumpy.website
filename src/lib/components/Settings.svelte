<script lang="ts">
    import Icon from "@iconify/svelte"

    const iconSize = 25;
    const buttonSize = `size-[${iconSize * 4}px]`
</script>

<a href="/settings" class="{buttonSize} rounded-[5px] border-[2px] border-solid border-current bg-bravegrumpy-accent2a text-bravegrumpy-logoPurple hover:scale-105 hover:hue-rotate-15 dark:bg-bravegrumpy-brand6 dark:text-bravegrumpy-accent1a p-[10px]">
    <Icon icon="hugeicons:settings-01" width={iconSize}/>
</a>