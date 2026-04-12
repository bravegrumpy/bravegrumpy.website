<script>
  //   import { Drawer, Button, GradientButton, CloseButton, ToolbarButton } from 'flowbite-svelte';
  import { Button, Drawer, CloseButton } from 'flowbite-svelte';
  //   import { sineIn } from 'svelte/easing';

  import Icon from '@iconify/svelte';

  import TopNavigation from './TopNavigation.svelte';
  import BottomNavigation from './BottomNavigation.svelte';

  let { links, hidden1 = true } = $props();
  //   let transitionParams = $state({
  //     y: -400,
  //     duration: 0.3,
  //     easing: sineIn
  //   });
</script>

<div class="text-center">
  <Button
    size="xxs"
    color="default"
    class="h-[50px] w-[50px] border-2 border-solid border-current bg-bravegrumpy-accent2a text-bravegrumpy-logoPurple dark:bg-bravegrumpy-brand6 dark:text-bravegrumpy-accent1a"
    onclick={() => (hidden1 = false)}
  >
    <Icon height={50} icon="hugeicons:menu-07" />
  </Button>
</div>

<Drawer
  placement="top"
  class="h-96 w-full bg-dark-fern-300 dark:bg-violet-950"
  transitionType="fade"
  bind:hidden={hidden1}
>
  <CloseButton on:click={() => (hidden1 = !hidden1)} />
  <TopNavigation {links} />
  <BottomNavigation reversed={true} />
</Drawer>
