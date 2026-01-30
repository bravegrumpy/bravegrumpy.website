<script lang="ts">
  import Section from '$lib/components/Section.svelte';
  import LOL from '$lib/components/List/ListOfLinks.svelte';
</script>

<Section --sectionColumn="2/2" --sectionRow="2/2">
  <h2 class="font-heading text-3xl text-bravegrumpy-brand3 dark:text-bravegrumpy-accent2a">
    Web Development
  </h2>
</Section>
<Section --sectionColumn="2/2" --sectionRow="2/2">
  <LOL section="Online Guides and Tools" title="Interactive CSS Instructions">
    <li>
      <a href="https://www.joshwcomeau.com/" target="_blank"
        >CSS Information! Seriously, this is the GOAT CSS interactive tutorial resource.</a
      >
    </li>
    <li>
      <a href="https://css-tricks.com/" target="_blank"
        >CSS Tricks -> Not as good as joshcomeau, but has css guides.</a
      >
    </li>
    <li>
      <a href="https://www.smashingmagazine.com/2024/01/css-border-image-property/" target="_blank"
        >CSS border-image explaination</a
      >
    </li>
    <li>
      <a href="https://en.wikipedia.org/wiki/Pythagorean_interval" target="_blank"
        >Useful ratios for heading sizes.</a
      >
    </li>
    <li>
      <a href="https://nekocalc.com/px-to-rem-converter" target="_blank">px to rem converter</a>
    </li>
    <li>
      <a href="https://www.cleancss.com/" target="_blank">Kitchen Sink of Utilities</a>
    </li>
    <li>
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Masonry_layout"
        >Masonry Layout using CSS</a
      >
    </li>
  </LOL>
  <LOL title="Accessibility">
    <li>
      <a href="https://wave.webaim.org/" target="_blank" style="font-weight: normal"
        >web accessability evaluation tool (WAVE)</a
      >
    </li>
    <li>
      <LOL heading="Contrast Checking Grids">
        <li>
          <a href="https://contrast-grid.eightshapes.com/" target="_blank">Contrast Grid 1</a>
        </li>
        <li><a href="https://contrastgrid.com/" target="_blank">Contrast Grid 2</a></li>
        <LOL>
          <li>
            <a href="/contrast-grid.html">Contrast Grid I made with my color pallete</a>
          </li>
        </LOL>
      </LOL>
    </li>
    <li>
      <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA" target="_blank"
        >mdn web docs_ARIA</a
      >
    </li>
    <li>
      <LOL heading="W3C Accessibility Documentation">
        <li>
          <a href="https://www.w3.org/WAI/standards-guidelines/aria/" target="_blank"
            >W3C ARIA summary</a
          >
        </li>
      </LOL>
    </li>
  </LOL>
  <LOL title="Web Specifications">
    <li>
      <a href="https://spec.commonmark.org/0.31.2/" target="_blank">Official Markdown Spec</a>
    </li>
  </LOL>
  <LOL title="Color Pallette Tools" heading="Referenced Directly in Tailwind">
    <li>
      <a href="https://uicolors.app/create" target="_blank"
        >Tailwind uicolors app -- makes color in style of tailwind colors</a
      >
    </li>
    <li><a href="https://palettte.app/" target="_blank">palette app</a></li>
    <li>
      <a href="https://colorbox.io/" target="_blank">colorbox.io</a>

      <LOL heading="My Color Pallette">
        <li>
          <a
            href="https://colorbox.io/?c0=%26p%24s%24%3D11%26p%24h%24st%24%3D110%26p%24h%24e%24%3D153%26p%24h%24c%24%3Deqo%26p%24sa%24st%24%3D0.08%26p%24sa%24e%24%3D1%26p%24sa%24r%24%3D1%26p%24sa%24c%24%3Deqo%26p%24b%24st%24%3D1%26p%24b%24e%24%3D0.2%26p%24b%24c%24%3Deqti%26o%24n%24%3DGreen%26o%24ms%24%3D0%2C1%26o%24ro%24%3Dcw&c1=%26p%24s%24%3D11%26p%24h%24st%24%3D271%26p%24h%24e%24%3D210%26p%24h%24c%24%3Deqo%26p%24sa%24st%24%3D0.07%26p%24sa%24e%24%3D0.99%26p%24sa%24r%24%3D1%26p%24sa%24c%24%3Deqo%26p%24b%24st%24%3D1%26p%24b%24e%24%3D0.02%26p%24b%24c%24%3Deci%26o%24n%24%3DNew+Purple%26o%24ro%24%3Dcw%26o%24ms%24%3D0%2C1"
            target="_blank"
          >
            I made a pallette here
          </a>. This was from me experimenting.
        </li>
      </LOL>
    </li>
    <li>
      <a href="https://atmos.style/" target="_blank">Atmos color pallette toolset</a>
    </li>
    <li>
      <a href="https://colorandcontrast.com/#/" target="_blank">Interactive Guide to colors</a>
    </li>
    <li>
      <a href="https://matthewstrom.com/writing/how-to-pick-the-least-wrong-colors/" target="_blank"
        >Mathematical tools for generating color pallettes.</a
      >
    </li>
    <li>
      <a href="https://oklch.com/#69.58,0.1213,293.23,100" target="_blank">OKLCH color Picker</a>
    </li>
  </LOL>
  <LOL heading="Pallete Review and iterative Development">
    <li>
      <a href="https://www.realtimecolors.com" target="_blank"
        >View colors and fonts on real website</a
      >
    </li>
  </LOL>
  <LOL title="Asset Resources with code and images" text={assetAggregationContent}>
    <li>
      <a href="https://codepen.io/arcadejhs/pen/jOEBMyB" target="_blank"
        >Single example of a skewmorphic buttion</a
      >
    </li>
    <li>
      <a href="https://neumorphism.io/#e0e0e0" target="_blank">Neomorphic CSS generation tool</a>
    </li>
    <li>
      <a href="https://uiverse.io/" target="_blank">Open Source UI Component Library</a>
    </li>
    <li>
      <a href="https://cssbuttons.io/" target="_blank">CSS Button Library</a>
    </li>
    <li>
      <a href="https://icons8.com/" target="_blank">
        Icon Aggregation Library -- Beware, there are AI features to avoid.</a
      >
    </li>
    <li>
      <a href="https://css-pattern.com/" target="_blank">Colorful optical illusion CSS patterns</a>
    </li>
    <li>
      <a href="https://superdesigner.co/tools/css-backgrounds" target="_blank"
        >Non-colored CSS patterns</a
      >
    </li>
    <li>
      <a href="https://10015.io/tools/css-background-pattern-generator" target="_blank"
        >CSS Pattern Generator</a
      >
    </li>
    <li>
      <a href="https://projects.verou.me/css3patterns/#new-submissions" target="_blank"
        >Another list of CSS3 patterns with interesting techniques</a
      >
    </li>
    <li>
      <a href="https://freefrontend.com/css-background-patterns/" target="_blank"
        >This is another super long list of css backgrounds.</a
      >
      This one is a repeat of a bunch of the previous aggregations of css patterns.
    </li>
    <li>
      <a href="https://designerfeed.org/css-background-patterns/" target="_blank"
        >CSS renders of some common fabric patterns</a
      >
    </li>
    <li>
      <a href="https://www.svgrepo.com/" target="_blank"
        >Repo of Open-Liscensed SVG Vector Images and Icons</a
      >
    </li>
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
