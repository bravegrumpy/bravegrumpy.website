<script lang="ts">
  import Section from '$lib/components/Section.svelte';
  import LOL, { entry } from '$lib/components/List/ListOfLinks.svelte';

  import { Checkbox } from 'flowbite-svelte';

  let cardStyle = $state(false);
  let divLink = $state(false);
  let showStyleOption = $state(false);

  //TODO: #310 Continue converting list elements into entry snippet components
</script>

<Section --sectionColumn="2/2" --sectionRow="2/2">
  <div class="flex flex-row justify-between items-center w-full">
    <h2 class="font-heading text-bravegrumpy-brand3 dark:text-bravegrumpy-accent2a text-3xl">Web Development</h2>
    {#if showStyleOption}
    <div class="flex flex-row justify-between gap-5 font-pageSubtitle text-lg">
      <span>Styled List: <Checkbox color="purple" bind:checked={cardStyle} inline /></span>
      {#if cardStyle}
        <span>Div as Link <Checkbox color="purple" bind:checked={divLink} inline /></span>
      {/if}
    </div>
    {/if}
  </div>
</Section>
<Section --sectionColumn="2/2" --sectionRow="2/2">
  <LOL section="Online Guides and Tools" title="Interactive CSS Instructions">
    {@render entry("https://www.joshwcomeau.com/", "CSS Information! Seriously, this is the GOAT CSS interactive tutorial resource.", [], cardStyle, divLink)}
    {@render entry("https://css-tricks.com/", "CSS Tricks -> Not as good as joshcomeau, but has css guides.", [], cardStyle, divLink)}
    {@render entry("https://www.smashingmagazine.com/2024/01/css-border-image-property/", "CSS border-image explaination", [], cardStyle, divLink)}
    {@render entry("https://en.wikipedia.org/wiki/Pythagorean_interval", "Useful ratios for heading sizes.", [], cardStyle, divLink)}
    {@render entry("https://nekocalc.com/px-to-rem-converter", "px to rem converter", [], cardStyle, divLink)}
    {@render entry("https://www.cleancss.com/", "Kitchen Sink of Utilities", [], cardStyle, divLink)}
    {@render entry("https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Masonry_layout", "Masonry Layout using CSS", [], cardStyle, divLink)}
  </LOL>
  <LOL title="Accessibility">
    {@render entry("https://wave.webaim.org/","web accessability evaluation tool (WAVE)", [], cardStyle, divLink, ContrastChecking)}
    {@render entry("https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA","mdn web docs_ARIA", [], cardStyle, divLink, W3CAccessibilityDocumentation )}
  </LOL>
  <LOL title="Web Specifications">
    {@render entry("https://spec.commonmark.org/0.31.2/", "Official Markdown Spec", [], cardStyle, divLink)}
  </LOL>
  <LOL title="Color Pallette Tools" heading="Referenced Directly in Tailwind">
    {@render entry("https://uicolors.app/create","Tailwind uicolors app -- makes color in style of tailwind colors", [], cardStyle, divLink)}
    {@render entry("https://palettte.app/", "palette app", [], cardStyle, divLink)}
    {@render entry("https://colorbox.io/", "colorbox.io", [], cardStyle, divLink, coolorChildren)}
    {@render entry("https://atmos.style/", "Atmos color pallette toolset", [], cardStyle, divLink)}
    {@render entry("https://colorandcontrast.com/#/", "Interactive Guide to colors", [], cardStyle, divLink)}
    {@render entry("https://mycolor.space/", "My Color Space", ["Color Gradient and color palette generator"], cardStyle, divLink)}
    {@render entry("https://matthewstrom.com/writing/how-to-pick-the-least-wrong-colors/", "Mathematical tools for generating color pallettes.", [], cardStyle, divLink)}
    {@render entry("https://oklch.com/#69.58,0.1213,293.23,100", "OKLCH color Picker", [], cardStyle, divLink)}
  </LOL>
  <LOL heading="Pallete Review and iterative Development">
    {@render entry("https://www.realtimecolors.com", "View colors and fonts on real website", [], cardStyle, divLink)}
  </LOL>
  <LOL title="Asset Resources with code and images" text={assetAggregationContent}>
    {@render entry("https://codepen.io/arcadejhs/pen/jOEBMyB", "Single example of a skewmorphic buttion", [], cardStyle, divLink)}
    {@render entry("https://neumorphism.io/#e0e0e0", "Neomorphic CSS generation tool", [], cardStyle, divLink)}
    {@render entry("https://uiverse.io/", "Open Source UI Component Library", [], cardStyle, divLink)}
    {@render entry("https://cssbuttons.io/", "CSS Button Library", [], cardStyle, divLink)}
    {@render entry("https://icons8.com/", "Icon Aggregation Library -- Beware, there are AI features to avoid.", [], cardStyle, divLink)}
    {@render entry("https://css-pattern.com/", "Colorful optical illusion CSS patterns", [], cardStyle, divLink)}
    {@render entry("https://superdesigner.co/tools/css-backgrounds", "Non-colored CSS patterns", [], cardStyle, divLink)}
    {@render entry("https://10015.io/tools/css-background-pattern-generator", "CSS Pattern Generator", [], cardStyle, divLink)}
    {@render entry("https://projects.verou.me/css3patterns/#new-submissions", "Another list of CSS3 patterns with interesting techniques", [], cardStyle, divLink)}
    {@render entry("https://freefrontend.com/css-background-patterns/", "This is another super long list of css backgrounds.", [], cardStyle, divLink)}
    {@render entry("https://designerfeed.org/css-background-patterns/", "CSS renders of some common fabric patterns", [], cardStyle, divLink)}
    {@render entry("https://www.svgrepo.com/", "Repo of Open-Liscensed SVG Vector Images and Icons", [], cardStyle, divLink)}
    {@render entry("https://incompetech.com/music/royalty-free/music.html", "Royalty-Free Music", [], cardStyle, divLink)}
  </LOL>
  <LOL heading="Placeholder Content">
    <li>
      <a href="https://loremipsum.io/ultimate-list-of-lorem-ipsum-generators" target="_blank"
        >List of Placeholder text generators</a
      >
    </li>
    <li>
      <a href="https://loremipsum.io/21-of-the-best-placeholder-image-generators" target="_blank"
        >List of placeholder image sources</a
      >
    </li>
    <li>
      <a href="https://jsonplaceholder.typicode.com/" target="_blank">Placeholder JSON data</a>
    </li>
    <li>
      In both of the subsequent resources, when I say "API" I mean a way to specificy requirements
      in URL
    </li>
    <li>
      <a href="https://placehold.co/" target="_blank">Blank Placeholder Images with API</a>
    </li>
    <li>
      <a href="https://placedog.net/" target="_blank">Placeholder Dogs with API</a>
    </li>
  </LOL>
  <LOL heading="Useful scripts">
    {@render entry("https://github.com/MarketingPipeline/Markdown-Tag", "Rendering Markdown in HTML file", [], cardStyle, divLink)}
    {@render entry("https://github.com/ncase/nutshell", "Expandable Explainations", [], cardStyle, divLink)}
    {#snippet text()}
      <p>Useful javascript utilites that can be "installed" via CDN and script tag.</p>
    {/snippet}
  </LOL>
  <LOL title="Online Development Environments">
    <li>
      <a href="https://codepen.io/" target="_blank">Codepen -- Easy, can fit in iframe, static</a>
    </li>
    <li>
      <a href="https://stackblitz.com/" target="_blank"
        >Stackblitz -- Full blown IDE-- Fits in iframe</a
      >
    </li>
    <li>
      <a href="https://jsfiddle.net/" target="_blank"
        >JSFiddle -- Full blown IDE, no need to sign in</a
      >
    </li>
    <li>
      <a href="https://playcode.io/html" target="_blank"
        >PlayCode -- Has some boilerplate, no need to sign in</a
      >
    </li>
  </LOL>
  <LOL title="Links to Unicode and ascii characters" heading="Unicode">
    <li>
      <a href="https://symbl.cc/en/unicode-table/" target="_blank">All unicode symbols</a>
    </li>
    <li>
      <a href="https://symbl.cc/en/unicode-table/#box-drawing" target="_blank"
        >Box Drawing Unicode Symbols (good for representing file trees)
      </a>
    </li>
    <li>
      <a href="https://unicodeplus.com/" target="_blank"> Symbol to Unicode search</a>
    </li>
    <li>
      <a href="https://www.unicode.org/charts/" target="_blank"
        >Official Unicode List of characters
      </a>
    </li>
    <li>
      <a href="https://www.unicode.org/charts/" target="_blank"
        >Official Unicode List of characters
      </a>
    </li>
  </LOL>
  <LOL heading="ASCII">
    <li><a href="https://www.ascii-code.com/" target="_blank">ASCII table</a></li>
  </LOL>
</Section>
<Section>
  <LOL section="Documentation" title="Developer Resources" heading="Given by The Odin Project">
    <li>
      <a href="https://devdocs.io/">DevDocs</a> A website with all of the API documentation. No more
      searching for docs! Horray!
    </li>
  </LOL>
  <LOL heading="Accessing API">
    <p>This is not necessarily Javascript only, but <em>is</em> useful in all webdev.</p>
    <li>
      <a href="https://reqbin.com/req/c-skhwmiil/curl-flags-example" target="_blank" rel="noreferrer">cUrl flag documentation</a>
      <ul>
        <li>cURL, or Client-URL is a command line tool for making <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods" target="_blank">HTTP requests</a> within the command line. The flags are options for the libcurl commandline tool. cURL is typically shipped with all shells, terminal emulators and tty software, on any OS.</li>
      </ul>
    </li>
  </LOL>
  <LOL section="Non Javascript Languages" title="PHP language reference" heading="PHP references">
    <li><a href="https://php.org/" target="_blank">Useful Tutorial</a></li>
    <li><a href="https://www.php.net/manual/en/" target="_blank">Official Manual</a></li>
  </LOL>
  <LOL title="Running Python in Javascript Environments">
    <li>
      <a href="https://codeop.tech/blog/run-python-code-in-javascript/" target="_blank"
        >List of sources to run python in a javascript environment.</a
      >
      This resource also includes instructions on how to make python work
      <em>within a node environment!!</em>
    </li>
    <li>
      <a href="https://brython.info/index.html" target="_blank"
        >Brython (relatively old implementation)</a
      >
    </li>
    <li>
      <a href="https://skulpt.org/" target="_blank">Skulpt -- Client-side Newer</a>
    </li>
    <li>
      <a href="https://www.transcrypt.org/" target="_blank">Transpiling option Transcrypt</a>
    </li>
  </LOL>
  <LOL title="Understanding Containerization and Docker">
    <li>
      <a href="https://depot.dev/blog/docker-clear-cache" target="_blank">
        Deleting unwanted Docker data
      </a>
    </li>
  </LOL>
</Section>

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


{#snippet coolorChildren()}
  <LOL heading="My Color Pallette">
    {@render entry("https://colorbox.io/?c0=%26p%24s%24%3D11%26p%24h%24st%24%3D110%26p%24h%24e%24%3D153%26p%24h%24c%24%3Deqo%26p%24sa%24st%24%3D0.08%26p%24sa%24e%24%3D1%26p%24sa%24r%24%3D1%26p%24sa%24c%24%3Deqo%26p%24b%24st%24%3D1%26p%24b%24e%24%3D0.2%26p%24b%24c%24%3Deqti%26o%24n%24%3DGreen%26o%24ms%24%3D0%2C1%26o%24ro%24%3Dcw&c1=%26p%24s%24%3D11%26p%24h%24st%24%3D271%26p%24h%24e%24%3D210%26p%24h%24c%24%3Deqo%26p%24sa%24st%24%3D0.07%26p%24sa%24e%24%3D0.99%26p%24sa%24r%24%3D1%26p%24sa%24c%24%3Deqo%26p%24b%24st%24%3D1%26p%24b%24e%24%3D0.02%26p%24b%24c%24%3Deci%26o%24n%24%3DNew+Purple%26o%24ro%24%3Dcw%26o%24ms%24%3D0%2C1", "I made a pallette here", [], cardStyle, divLink, undefined, "This was from me experimenting.")}
  </LOL>
{/snippet}

{#snippet ContrastChecking()}
  <LOL heading="Contrast Checking Grids">
    {@render entry("https://contrast-grid.eightshapes.com/", "Contrast Grid 1", [], cardStyle, divLink)}
    {@render entry("https://contrastgrid.com/", "Contrast Grid 2", [], cardStyle, divLink, gridImade)}
  </LOL>
{/snippet}

{#snippet gridImade()}
  <LOL>
    {@render entry("/contrast-grid.html", "Contrast Grid I made with my color pallete", [], cardStyle, divLink)}
  </LOL>
{/snippet}

{#snippet W3CAccessibilityDocumentation()}
  <LOL heading="W3C Accessibility Documentation">
    {@render entry("https://www.w3.org/WAI/standards-guidelines/aria/","W3C ARIA summary", [], cardStyle, divLink)}
  </LOL>
{/snippet}