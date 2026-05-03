<script lang="ts">
  import Section from '$lib/components/Section.svelte';
  import Heading from "$lib/components/List/ListHeadingInteractive.svelte"
  import LOL, { entry } from '$lib/components/List/ListOfLinks.svelte';
  import Entry from "$lib/components/List/ListEntry.svelte";

  import { showDebug } from '$lib/stores';

  import { cardStyle, divLink } from '$lib/stores';

  import { useQuery } from 'convex-svelte';
  import { api } from "$lib/db/convex/_generated/api"

  // const categories = $derived(useQuery(api.links.getCategories));
  // const webDev = $derived(categories.data.filter((c) => c.slug === "web-dev"));
  // const webDevId = $derived(webDev[0]._id)
  // const nodes = $derived(useQuery(api.links.getNodesByCategory, { categoryId: webDevId}));

// TODO: #337 Finish debugging this new convex approach
// TODO: #338 implement the convex approach throughout `List`.
</script>



<Heading>Web Development</Heading>
{#if $showDebug}
<Section>
  <!-- <p>{JSON.stringify(categories)}</p> -->
  <!-- <p>{JSON.stringify(nodes)}</p> -->
</Section>
{/if}
<Section --sectionColumn="2/2" --sectionRow="2/2">
  <LOL section="Online Guides and Tools" title="Interactive CSS Instructions">
    {@render entry("https://www.joshwcomeau.com/", "CSS Information! Seriously, this is the GOAT CSS interactive tutorial resource.", [], $cardStyle, $divLink)}
    {@render entry("https://css-tricks.com/", "CSS Tricks -> Not as good as joshcomeau, but has css guides.", [], $cardStyle, $divLink)}
    {@render entry("https://www.smashingmagazine.com/2024/01/css-border-image-property/", "CSS border-image explaination", [], $cardStyle, $divLink)}
    {@render entry("https://en.wikipedia.org/wiki/Pythagorean_interval", "Useful ratios for heading sizes.", [], $cardStyle, $divLink)}
    {@render entry("https://nekocalc.com/px-to-rem-converter", "px to rem converter", [], $cardStyle, $divLink)}
    {@render entry("https://www.cleancss.com/", "Kitchen Sink of Utilities", [], $cardStyle, $divLink)}
    {@render entry("https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Masonry_layout", "Masonry Layout using CSS", [], $cardStyle, $divLink)}
  </LOL>
  <LOL title="Accessibility">
    {@render entry("https://wave.webaim.org/","web accessability evaluation tool (WAVE)", [], $cardStyle, $divLink, ContrastChecking)}
    {@render entry("https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA","mdn web docs_ARIA", [], $cardStyle, $divLink, W3CAccessibilityDocumentation )}
  </LOL>
  <LOL title="Web Specifications">
    {@render entry("https://spec.commonmark.org/0.31.2/", "Official Markdown Spec", [], $cardStyle, $divLink)}
  </LOL>
  <LOL title="Color Pallette Tools" heading="Referenced Directly in Tailwind">
    {@render entry("https://uicolors.app/create","Tailwind uicolors app -- makes color in style of tailwind colors", [], $cardStyle, $divLink)}
    {@render entry("https://palettte.app/", "palette app", [], $cardStyle, $divLink)}
    {@render entry("https://colorbox.io/", "colorbox.io", [], $cardStyle, $divLink, coolorChildren)}
    {@render entry("https://atmos.style/", "Atmos color pallette toolset", [], $cardStyle, $divLink)}
    {@render entry("https://colorandcontrast.com/#/", "Interactive Guide to colors", [], $cardStyle, $divLink)}
    {@render entry("https://mycolor.space/", "My Color Space", ["Color Gradient and color palette generator"], $cardStyle, $divLink)}
    {@render entry("https://matthewstrom.com/writing/how-to-pick-the-least-wrong-colors/", "Mathematical tools for generating color pallettes.", [], $cardStyle, $divLink)}
    {@render entry("https://oklch.com/#69.58,0.1213,293.23,100", "OKLCH color Picker", [], $cardStyle, $divLink)}
  </LOL>
  <LOL heading="Pallete Review and iterative Development">
    {@render entry("https://www.realtimecolors.com", "View colors and fonts on real website", [interactiveWebsiteTheme], $cardStyle, $divLink)}
  </LOL>
  <LOL title="Asset Resources with code and images" text={assetAggregationContent}>
    {@render entry("https://codepen.io/arcadejhs/pen/jOEBMyB", "Single example of a skewmorphic buttion", [], $cardStyle, $divLink)}
    {@render entry("https://neumorphism.io/#e0e0e0", "Neomorphic CSS generation tool", [], $cardStyle, $divLink)}
    {@render entry("https://uiverse.io/", "Open Source UI Component Library", [], $cardStyle, $divLink)}
    {@render entry("https://cssbuttons.io/", "CSS Button Library", [], $cardStyle, $divLink)}
    {@render entry("https://icons8.com/", "Icon Aggregation Library -- Beware, there are AI features to avoid.", [], $cardStyle, $divLink)}
    {@render entry("https://css-pattern.com/", "Colorful optical illusion CSS patterns", [], $cardStyle, $divLink)}
    {@render entry("https://superdesigner.co/tools/css-backgrounds", "Non-colored CSS patterns", [], $cardStyle, $divLink)}
    {@render entry("https://10015.io/tools/css-background-pattern-generator", "CSS Pattern Generator", [], $cardStyle, $divLink)}
    {@render entry("https://projects.verou.me/css3patterns/#new-submissions", "Another list of CSS3 patterns with interesting techniques", [], $cardStyle, $divLink)}
    {@render entry("https://freefrontend.com/css-background-patterns/", "This is another super long list of css backgrounds.", [], $cardStyle, $divLink)}
    {@render entry("https://designerfeed.org/css-background-patterns/", "CSS renders of some common fabric patterns", [], $cardStyle, $divLink)}
    {@render entry("https://www.svgrepo.com/", "Repo of Open-Liscensed SVG Vector Images and Icons", [], $cardStyle, $divLink)}
    {@render entry("https://svgl.app/", "More SVGs specifically for Brands", [], $cardStyle, $divLink)}
    {@render entry("https://incompetech.com/music/royalty-free/music.html", "Royalty-Free Music", [], $cardStyle, $divLink)}
  </LOL>
  <LOL heading="Placeholder Content">
    {@render entry("https://loremipsum.io/ultimate-list-of-lorem-ipsum-generators", "List of Placeholder text generators", [], $cardStyle, $divLink)}
    {@render entry("https://loremipsum.io/21-of-the-best-placeholder-image-generators", "List of placeholder image sources", [], $cardStyle, $divLink)}
    {@render entry("https://jsonplaceholder.typicode.com/", "Placeholder JSON data", [], $cardStyle, $divLink)}
    {@render entry("", "In both of the subsequent resources, when I say \"API\" I mean a way to specificy requirements in URL", [], $cardStyle, $divLink, undefined, "", true)}
    {@render entry("https://placehold.co/", "Blank Placeholder Images with API", [], $cardStyle, $divLink)}
    {@render entry("https://placedog.net/", "Placeholder Dogs with API", [], $cardStyle, $divLink)}
  </LOL>
  <LOL heading="Useful scripts">
    {@render entry("https://github.com/MarketingPipeline/Markdown-Tag", "Rendering Markdown in HTML file", [], $cardStyle, $divLink)}
    {@render entry("https://github.com/ncase/nutshell", "Expandable Explainations", [], $cardStyle, $divLink)}
    {#snippet text()}
      <p>Useful javascript utilites that can be "installed" via CDN and script tag.</p>
    {/snippet}
  </LOL>
  <LOL title="Online Development Environments">
    {@render entry("https://codepen.io/", "Codepen -- Easy, can fit in iframe, static", [], $cardStyle, $divLink)}
    {@render entry("https://stackblitz.com/", "Stackblitz -- Full blown IDE-- Fits in iframe", [], $cardStyle, $divLink)}
    {@render entry("https://jsfiddle.net/", "JSFiddle -- Full blown IDE, no need to sign in", [], $cardStyle, $divLink)}
    {@render entry("https://playcode.io/html", "PlayCode -- Has some boilerplate, no need to sign in", [], $cardStyle, $divLink)}
  </LOL>
  <LOL title="Links to Unicode and ascii characters" heading="Unicode">
  {@render entry("https://symbl.cc/en/unicode-table/", "All unicode symbols", [], $cardStyle, $divLink)}
  {@render entry("https://symbl.cc/en/unicode-table/#box-drawing", "Box Drawing Unicode Symbols (good for representing file trees)", [], $cardStyle, $divLink)}
  {@render entry("https://unicodeplus.com/", "Symbol to Unicode search", [], $cardStyle, $divLink)}
  {@render entry("https://www.unicode.org/charts/", "Official Unicode List of characters", [], $cardStyle, $divLink)}
  </LOL>
  <LOL heading="ASCII">
    {@render entry("https://www.ascii-code.com/", "ASCII table", [], $cardStyle, $divLink)}
  </LOL>
</Section>
<Section>
  <LOL section="Documentation" title="Developer Resources" heading="Given by The Odin Project">
    {@render entry("https://devdocs.io/", "DevDocs", [], $cardStyle, $divLink, undefined, "A website with all of the API documentation. No more searching for docs! Horray!")}
  </LOL>
  <LOL heading="Accessing API">
    <p>This is not necessarily Javascript only, but <em>is</em> useful in all webdev.</p>
    {@render entry("https://reqbin.com/req/c-skhwmiil/curl-flags-example", "cUrl flag documentation", [curl], $cardStyle, $divLink)}
  </LOL>
  <LOL section="Non Javascript Languages" title="PHP language reference" heading="PHP references">
    {@render entry("https://php.org/", "Useful Tutorial", [], $cardStyle, $divLink)}
    {@render entry("https://www.php.net/manual/en/", "Official Manual", [], $cardStyle, $divLink)}
  </LOL>
  <LOL title="Running Python in Javascript Environments">
    {@render entry("https://codeop.tech/blog/run-python-code-in-javascript/", "List of sources to run python in a javascript environment.", [], $cardStyle, $divLink, pythonInJS)}
    {@render entry("https://brython.info/index.html", "Brython (relatively old implementation)", [], $cardStyle, $divLink)}
    {@render entry("https://skulpt.org/", "Skulpt -- Client-side Newer", [], $cardStyle, $divLink)}
    {@render entry("https://www.transcrypt.org/", "Transpiling option Transcrypt", [], $cardStyle, $divLink)}
  </LOL>
  <LOL title="Understanding Containerization and Docker">
    {@render entry("https://depot.dev/blog/docker-clear-cache", "Deleting unwanted Docker data", [], $cardStyle, $divLink)}
  </LOL>
</Section>

{#snippet ContrastChecking()}
  <LOL heading="Contrast Checking Grids">
    {@render entry("https://contrast-grid.eightshapes.com/", "Contrast Grid 1", [], $cardStyle, $divLink)}
    {@render entry("https://contrastgrid.com/", "Contrast Grid 2", [], $cardStyle, $divLink, gridImade)}
  </LOL>
{/snippet}

{#snippet gridImade()}
  <LOL>
    <Entry href="/contrast-grid.html" text="Contrast Grid I made with my color pallete" local/>
  </LOL>
{/snippet}

{#snippet W3CAccessibilityDocumentation()}
  <LOL heading="W3C Accessibility Documentation">
    {@render entry("https://www.w3.org/WAI/standards-guidelines/aria/","W3C ARIA summary", [], $cardStyle, $divLink)}
  </LOL>
{/snippet}

{#snippet interactiveWebsiteTheme()}
  {@render entry("https://www.realtimecolors.com/?colors=0f1a16-f6f9f8-6ca792-a8a6c9-9b86b6&fonts=Croissant%20One-Parkinsans", "My Theme", [], $cardStyle, $divLink, undefined, "- Example theme, uses colors I like. This is a <em class='font-bodyEmphasis'>pretty good</em> font, but I think there is a better title font out there.")}
{/snippet}

{#snippet coolorChildren()}
  <LOL heading="My Color Pallette">
    {@render entry("https://colorbox.io/?c0=%26p%24s%24%3D11%26p%24h%24st%24%3D110%26p%24h%24e%24%3D153%26p%24h%24c%24%3Deqo%26p%24sa%24st%24%3D0.08%26p%24sa%24e%24%3D1%26p%24sa%24r%24%3D1%26p%24sa%24c%24%3Deqo%26p%24b%24st%24%3D1%26p%24b%24e%24%3D0.2%26p%24b%24c%24%3Deqti%26o%24n%24%3DGreen%26o%24ms%24%3D0%2C1%26o%24ro%24%3Dcw&c1=%26p%24s%24%3D11%26p%24h%24st%24%3D271%26p%24h%24e%24%3D210%26p%24h%24c%24%3Deqo%26p%24sa%24st%24%3D0.07%26p%24sa%24e%24%3D0.99%26p%24sa%24r%24%3D1%26p%24sa%24c%24%3Deqo%26p%24b%24st%24%3D1%26p%24b%24e%24%3D0.02%26p%24b%24c%24%3Deci%26o%24n%24%3DNew+Purple%26o%24ro%24%3Dcw%26o%24ms%24%3D0%2C1", "I made a pallette here", [], $cardStyle, $divLink, undefined, "This was from me experimenting.")}
  </LOL>
{/snippet}

{#snippet assetAggregationContent()}
  <p class="description">
    Lots of assets. Many of them link to code used to create interesting visual effects.
  </p>
  <p class="description">The focus is on 2D design, including skeuomorphism and neomorophism.</p>
  <p class="description">
    However, resources for true 3D, will be under the Blender section or a 3D tools section,
    depending on relevancy.
  </p>
{/snippet}

{#snippet curl()}
  <p class="font-bodyEmphasis">cURL, or Client-URL is a command line tool for making <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods" target="_blank">HTTP requests</a> within the command line. The flags are options for the libcurl commandline tool. cURL is typically shipped with all shells, terminal emulators and tty software, on any OS.</p>
{/snippet}

{#snippet pythonInJS()}
  <p class="ml-14">
    This resource also includes instructions on how to make python work <em class="font-bodyEmphasis">within a node environment!!</em>
  </p>
{/snippet}