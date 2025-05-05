<script>
  import '$lib/styles/globals.css';
  import Icon from '@iconify/svelte';
  import NavButton from './NavButton.svelte';
  import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
  import DropdownMenuItem from './ui/dropdown-menu/dropdown-menu-item.svelte';
  let {
    // iconSize = 25,
    links,
    reversed = false,
    fontSize = '2rem',
    slug = '/',
    className = '',
    marginLeft = '1rem',
    navigationWidth = '1250px',
    justifyContent = 'flex-start',
    buttonWidth = '250px',
    marginBottom = '10px',
    marginTop = '10px'
  } = $props();
  //   const buttonSize = $derived(`size-[${iconSize * 2}px]`);
</script>

<div
  style:display="flex"
  style:flex-direction="row"
  style:flex-wrap="wrap"
  style:width={navigationWidth}
  style:justify-content={justifyContent}
>
  {#each links as link (link.id)}
    <NavButton
      href={link.href}
      text={link.text}
      {reversed}
      {slug}
      {className}
      --fontSize={fontSize}
      --marginLeft={marginLeft}
      --marginTop={marginTop}
      --marginBottom={marginBottom}
      --buttonWidth={buttonWidth}
    />
  {/each}
</div>
