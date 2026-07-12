<script lang="ts">
  import Heading from '$lib/components/List/ListHeadingInteractive.svelte';
  import Details from '$lib/components/List/Details.svelte';
  import Section from '$lib/components/Section.svelte';
  import LOL from '$lib/components/List/ListOfLinks.svelte';
  import Entry from '$lib/components/List/ListEntry.svelte';
  import { cardStyle, divLink } from "$lib/stores"

  import NavButton from '$lib/components/NavButton.svelte';
</script>

<Heading>Media</Heading>

<Section>
    <Details summary="How To Watch" stl>
        <LOL>
            <Entry 
                href="https://ext.to"
                text="Ext.to: Torrenting Website "
                after="Provides Magnet Links"
                cardStyle={$cardStyle}
                divLink={$divLink}
            />
            <Entry 
                href="https://webtor.io"
                text="WebTor.io "
                after="Streams From Magnet Links"
                cardStyle={$cardStyle}
                divLink={$divLink}
            />
        </LOL>
    </Details>
    <div class="w-fit mx-auto px-5 py-2">
        <NavButton  href="/links/media/shows" text="Shows" slug="/list/media/shows" />
    </div>
</Section>