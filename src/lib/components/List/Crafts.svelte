<script lang="ts">
    import LOL from "$lib/components/List/ListOfLinks.svelte"
    import Heading from "$lib/components/List/ListHeadingInteractive.svelte"
    import Entry from "$lib/components/List/ListEntry.svelte"
    import Section from "$lib/components/Section.svelte"

    import { cardStyle, divLink } from "$lib/stores";

    import Details from "./Details.svelte";
</script>

<Heading>Arts and Crafts</Heading>
<Section>
<Details summary="Art" stl>
    <LOL section="Graphic Design" title="Calligraphy">
        <Entry href="https://www.calligraphy-skills.com/gothic-alphabet.html" text="Calligraphy Resource" cardStyle={$cardStyle} divLink={$divLink} />
    </LOL>
</Details>
<!-- <Details summary="Crafts" stl> -->
    <LOL chapter="Crafts" section="Paper" title="Oragami" heading="Oragami Envelopes">
        <Entry href="https://origami.me/envelope/" text="Mildly Complicated envelope" cardStyle={$cardStyle} divLink={$divLink}>
            <ul>
                <li>Starts with square</li>
                <li>Involves some nontrivial folds</li>
            </ul>
        </Entry>
        <Entry href="https://itrydiy.me/2016/03/origami-money-envelope/" text="envelope with bands" after="Starts with rectangular paper" cardStyle={$cardStyle} divLink={$divLink}/>
        <Entry href="http://www.origami-instructions.com/origami-envelope.html?no_redirect=true" text="Simple Envelope from rectangular A4 paper" after="I actually used this one" cardStyle={$cardStyle} divLink={$divLink}/>
        <Entry href="https://www.cristinacolli.com/how-to-make-an-origami-envelope/" text="Decorative Envelope" cardStyle={$cardStyle} divLink={$divLink} />
    </LOL>
<!-- </Details> -->
</Section>