<script>
    let { Month = $bindable() } = $props()
</script>


<div
  class=" -ml-5 flex w-full flex-row content-center justify-center rounded-[5px] rounded-l-none border-[5px] border-l-0 border-solid border-current bg-solarized-base-2 text-solarized-yellow dark:bg-edward-950 dark:text-solarized-base-1"
>
  <h2 class="font-heading text-4xl">{Month}</h2>
</div>