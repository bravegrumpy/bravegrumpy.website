<script lang="ts">
  import Heading from '$lib/components/List/ListHeadingInteractive.svelte';
  import Details from '$lib/components/List/Details.svelte';
  import Section from '$lib/components/Section.svelte';
  import LOL from '$lib/components/List/ListOfLinks.svelte';
  import Entry from '$lib/components/List/ListEntry.svelte';
  import { cardStyle, divLink } from "$lib/stores"

  import ShowList from "$lib/components/List/media/shows.svx"
</script>

<Heading>Media</Heading>

<Section>
    <Details summary="How To Watch" stl>
        <LOL>
            <Entry 
                href="https://ext.io"
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
    <Details summary="Shows" Section="Planned Shows" stl>
        <p>
            <a href="/links/media/shows">View Formatted Show List</a>
        </p>
        <ShowList />
    </Details>
</Section>