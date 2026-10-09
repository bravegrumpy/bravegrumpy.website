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
    <Details summary="How To Watch" stl open>
        <LOL>
            <Entry 
                href="https://ext.to"
                text="Ext.to: Torrenting Website "
                after="Provides Magnet Links"
                cardStyle={$cardStyle}
                divLink={$divLink}>
             <p>Be careful with this website. It is not a trusted site. If you aren't extremely careful random stuff will download. Do not use w/o VPN or and w/o No Script and uMatrix installed and activated.</p>    
            </Entry>
            <Entry 
                href="https://webtor.io"
                text="WebTor.io "
                after="Streams From Magnet Links"
                cardStyle={$cardStyle}
                divLink={$divLink}
            >
            <p>This is a trusted Open Source Project that does exactly what it claims to do. It also provides a ton of education on using torrents</p>    
        </Entry>
        <hr />
        <Entry
            href="https://ww1.ytstv.hair"
            text="Torrenting/streaming Site"
            after=" Has lots of 'sources'"
            cardStyle={$cardStyle}
            divLink={$divLink}
        >
            <p>This is a sketchy site.  Do not use it without at least a VPN AND 2 layers of adblock.</p>
        </Entry>
        </LOL>
    </Details>
    <!-- <div class="w-fit mx-auto !px-5 !py-2">
        <NavButton className="px-5 py-2" href="/links/media/shows" text="Shows" slug="/list/media/shows" />
        <NavButton className="px-5 py-2" href="/links/media/yt" text="YouTube" slug="/list/media/yt" />
    </div> -->
  <Details summary="YouTube" stl open>
    <Entry 
        href="https://docs.google.com/document/d/1NRMfJo7UrTUuQOacSx2EdxMtQ2PMvdU1GTpCEHqk5Tw/edit?pli=1&tab=t.0"
        text="Sourcedoc"
        after=" to a youtube video."
        cardStyle={$cardStyle}
        divLink={$divLink}
    >  
        <p> 
            The <a href="https://youtu.be/VTsBP21-XpI?si=KS1iwXfqD88ptdk-" target="_blank">YouTube video</a> is an investigation into ReCaptcha. The TLDR of the video is that Google is looking to know who you, specifically, are, in order order to let you through ReCaptcha.  If they cannot figure out which specific human you are, they will make you solve a gazillion puzzles. <a href="https://arxiv.org/pdf/2311.10911" target="_blank">This research paper</a> goes into more specific detail as to the entire snapshot that Google can percieve from ReCpatcha.
        </p>
        <Entry 
            href="https://arxiv.org/pdf/2311.10911"
            text="Dazed & Confused"
            after="The same paper mentioned above."
            cardStyle={$cardStyle}
            divLink={$divLink}
        />
    </Entry>
  </Details>
</Section>