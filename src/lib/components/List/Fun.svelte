<script lang="ts">
    import type { Snippet } from "svelte"
    import Section from "$lib/components/Section.svelte"
    import LOL, { entry } from "$lib/components/List/ListOfLinks.svelte";
    import Heading from "$lib/components/Heading.svelte";

    import Details from "$lib/components/List/Details.svelte";

    let showTest = $state<boolean>(false);

    import DecoratedSwitch from "$lib/components/DecoratedSwitch.svelte";

</script>

<Heading>Fun Links</Heading>
<Section>
    <div>
    <p>This section is full of links to websites I enjoy. They are not specifc resources for specfic tasks. They are just fun.</p>
    <p>I am following a bit of the "indie-web"/"yesterweb" philosophy of linking websites I find cool so that I can find them again.</p>
    <p>Don't take too many of these links too seriously. They could be on here as simple of a reason as I like their color pallette. Otherwise I could like the utility, or some asset.  Who knows.  I don't necessarily endorse everything that every auther writes, just becasue they are on here.  It just means that at one time I thought the website was neat.</p>
    </div>
    <hr class="bg-bravegrumpy-brand5/20 h-15 rounded-lg border-4 border-solid border-bravegrumpy-brand1/60 w-4/6 mx-auto"/>
    <div>
        <p>I have also experimented with a couple different alternate list styles.  I am not a <em>super</em> fan of how they work, but I don't want to completely discard them.</p>
        <p class="mt-5"><strong class="font-heading text-lg">Toggle Experiments:</strong>
        <span class="inline">
            <DecoratedSwitch bind:checked={showTest}/>
        </span></p>
    </div>
    {#if showTest}
    <details class="bg-granny-smith-200 dark:bg-solarized-green/30 rounded-[5px] px-5 py-5 border-[2px] border-solid border-current max-w-full w-full mt-5">
        <summary>
            <!-- <h3 class="font-heading my-4 text-2xl inline bg-bravegrumpy-brand4/50 px-5 py-1 rounded-[5px] border-[5px] border-solid border-current text-bravegrumpy-brand1 hover:hue-rotate-180 hover:scale-110">Discovery</h3> -->
             <h3 class="font-heading text-2xl inline">Discovery</h3>
        </summary>
        <LOL title="Websites that aid in finding small websites">
            {@render entry("https://theuselessweb.com/", "The Useless Web", [], true, true)}
            {@render entry("https://yesterweb.org/", "The Yesterweb", [], true, true)}
            {@render entry("https://neocities.org/browse", "Neocities Websites", [], true, true)}
            {@render entry("https://nekoweb.org/explore?page=1&sort=follows&by=name&q=", "Nekoweb Websites", [] , true, true)}
            {@render entry("https://geekring.net/", "geek webring", [], true, true)}
        </LOL>
    </details>
    <Details section="Discovery" title="Websites that aid in finding small websites" stl>
        {@render entry("https://theuselessweb.com/", "The Useless Web", [], true, false)}
        {@render entry("https://yesterweb.org/", "The Yesterweb", [], true, true)}
        {@render entry("https://neocities.org/browse", "Neocities Websites", [], true, false)}
        {@render entry("https://nekoweb.org/explore?page=1&sort=follows&by=name&q=", "Nekoweb Websites", [], true, true)}
        {@render entry("https://geekring.net/", "geek webring", [], true, false)}
    </Details>
    {/if}
    <LOL section="Discovery" title="Websites that aid in finding small websites">
        {@render entry("https://theuselessweb.com/", "The Useless Web", [], true, true)}
        {@render entry("https://yesterweb.org/", "The Yesterweb", [], true, true)}
        {@render entry("https://neocities.org/browse", "Neocities Websites", [], true, true)}
        {@render entry("https://nekoweb.org/explore?page=1&sort=follows&by=name&q=", "Nekoweb Websites", [], true, true)}
        {@render entry("https://geekring.net/", "geek webring", [], true, true)}
    </LOL>
    <LOL section="Art Projects">
        <p>Literally random single-use sites, typically on personal-web static-hosts such as <a href="https://neocities.org" rel="nofollow noreferrer" target="_blank">Neocities</a> replacements such as or <a href="https://nekoweb.org" target="_blank" rel="noreferrer nofollow">Nekoweb</a> but can also be in other places. I sometimes think of this as my pintrest board for interesting web design.</p>
        {@render entry("https://humanknowledge.neocities.org/","Art Project about Human Knowledge", [], true, true)}
        {@render entry("https://substack.net/", "Weird Vaporware Art", [], true, true)}
        {@render entry("https://i-land.online/", "i-Land Interactive Art", ["Handrawn point-and-click adventure", "Innovative mixed media approach"], true, true)}
    </LOL>
    <LOL title="Single Use Websites">
        {@render entry("https://cigsdev.neocities.org/", "ThreeJS Demo App", [], true, true)}
        {@render entry("https://rainvalt.neocities.org/", "Typewriter Emulator", [], true, true)}
        {@render entry("https://optical.toys/", "optical illusions", [], true, true)}
    </LOL>
    <LOL title="Websites I like">
        <li>Mostly personal webpages I have found on <a href="https://neocities.org">Neocities</a>, <a href="https://nekoweb.org">Nekoweb</a> or by using <a href="https://yesterweb.org">Yesterweb</a>.</li>
        {@render entry("https://dawnvoid.neocities.org/", "Dawn Void", ["This one has pretty pictures"], true, true)}
        {@render entry("https://newlambda.neocities.org/explore/links", "newlambda", [], true, true)}
        {@render entry("https://vibes.fish/", "vibes.fish", [], true, true)}
        {@render entry("https://onio.club/", "Onio.club", [], true, true)}
        {@render entry("https://murderscene.neocities.org/home", "Murderscene", [], true, true)}
        {@render entry("https://iframe.chat/", "Chattable", ["I need to find an alternative"], true, true)}
        {@render entry("https://prophetofthesun.com/ch_1/pg1", "Prophet of the Sun Webcomic", [], true, true)}
        {@render entry("https://mystsaphyr.neocities.org/", "Myst Saphyr", [], true, true)}
        {@render entry("https://mystsaphyr.art/", "Myst Saphyr -- Nekoweb", [], true, true)}
        {@render entry("https://thewizardtower.neocities.org/pages/ART.HTML", "The Wizard Tower", ["Skeuomorphism in Indie-Web"], true, true)}
        {@render entry("https://dabric.xyz/", "dabric", [], true, true)}
        {@render entry("https://e4494s.neocities.org/", "cool sims", [], true, true)}
        {@render entry("https://localghost.dev/talks/", "localghost", [], true, true)}
    </LOL>
    <LOL section="Fandom" title="BBC Merlin">
        {@render entry("https://thedetourroom.neocities.org/texts/bbc-merlin", "Merlin Reference", [], true, true)}
        {@render entry("https://soupcriminal.neocities.org/fanfic%20archive/merlinbbc/merlinbbc", "List of BBC Merlin Fanfics", ["This is a random person's fanfic list. Go to tumblr for more and better lists.12"], true, true)}
        {@render entry("https://merlin.fandom.com/wiki/Merlin", "BBC Merlin Fanwiki", [], true, true)}
        {@render entry("https://thedetourroom.neocities.org/bbc-merlin", "Essay about Merlin", [], true, true)}
    </LOL>
    <LOL section="Assets">
        {@render entry("https://www.mabsland.com/Adoption.html", "Ratings Pandas", [], true, true)}
        {@render entry("https://pixelsafari.neocities.org/", "Coco's Pixel Safari", [], true, true)}
        {@render entry("https://teppyslayouts.neocities.org/", "Teppys Layouts", ["Good source for layout templates"], true, true)}
        {@render entry("https://nielssp.github.io/classic-stylesheets/", "Retro Stylesheets", [], true, true)}
    </LOL>
    <LOL section="My Creations" title="Other Websites I've made">
        <li><a href="https://merther.bravegrumpy.com">NSFW BBC Merlin fanfiction website</a></li>
        <li><a href="https://bravegrumpy.neocities.org">Neocities website with this theme</a></li>
    </LOL>
</Section>