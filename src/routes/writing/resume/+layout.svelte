<script lang="ts">
  import type { Snippet } from 'svelte';
  import Heading from '$lib/components/Heading.svelte';
  import Article from '$lib/components/Article.svelte';
  import Section from '$lib/components/Section.svelte';
  import SideNav from '$lib/components/SideNav.svelte';

  import { page } from "$app/state";

  const currPath = $derived(page.url.pathname);

  type ref = {
    id: string;
    active: boolean;
    href: URL | string;
    text: string;
  };

  const references: ref[] = [
    {
      id: 'CSI',
      active: (`${() => currPath}` === `/writing/resume/cls`),
      href: '/writing/resume/csl',
      text: 'CSL Materials Coordinator'
    }
  ];

  interface Props {
    children?: Snippet;
  }
  const { children }: Props = $props();
</script>

<SideNav {references} />
{@render children?.()}
