<script>
  import { page } from '$app/stores';

  import Article from '$lib/components/Article.svelte';
  import Section from '$lib/components/Section.svelte';
  import Aside from '$lib/components/Aside.svelte';

  import NavButton from '$lib/components/NavButton.svelte';

  import UnderConstruction from '$lib/components/UnderConstruction.svelte';

  const errorClass = $state(
    'rounded-[5px] border-2 border-solid border-current bg-flush-orange-300 p-5 text-center text-3xl text-flush-orange-700 dark:bg-flush-orange-700 dark:text-flush-orange-300 mt-[15px] w-fit self-center'
  );

  const constructionHeight = $state('338px');
  const constructionWidth = $state('100%');
  const smallWidth = $state('35px');
  const largeWidth = $state('70px');
</script>

<svelte:head>
  <title>Error | Bravegrumpy</title>
</svelte:head>

<Article --articleColumn="2/3">
  <UnderConstruction
    text=""
    constructionHeight="2rem"
    --smallWidth={smallWidth}
    --largeWidth={largeWidth}
  />
  <Section
    lightColors="text-valencia-800 bg-valencia-300"
    darkColors="dark:text-valencia-300 dark:bg-valencia-800"
    sectionClass="font-heading text-3xl self-center w-full"
    --XMargin="0px"
  >
    <h2>Error {$page.status}: Page {$page.error.message}</h2>
  </Section>
  <Section sectionClass="self-start">
    <p>
      You navigated to the page {$page.url}, which has the problem "{$page.error.message.toLowerCase()}".
    </p>
    <NavButton
      href="/"
      reversed={true}
      slug="/"
      text="Click here return to Bravegrumpy Homepage"
      --fontSize="1.2rem"
      --buttonWidth="75%"
      --marginLeft="0px"
      className="self-center mb-[25px] hover:hue-rotate-15 "
    />
  </Section>
  <ul style:display="none">
    <li>Origin: {$page.url.origin}</li>
    <li>HostName: {$page.url.hostname}</li>
    <li>Host: {$page.url.host}</li>
    <li>PathName: {$page.url.pathname}</li>
    <li>Searh Parameters: {$page.url.searchParams}</li>
  </ul>

  <UnderConstruction
    text=""
    constructionHeight="2rem"
    --smallWidth={smallWidth}
    --largeWidth={largeWidth}
  />
</Article>

<div style:display="none">
  <Article --articleColumn="3/4">
    <Aside>
      <p>The original color pallete:</p>
      <ul>
        <li>
          Light: <em>bg-cerise-300</em> and <em>text-grenadier-800</em>
        </li>
        <li>
          Dark: <em>dark:bg-grenadier-800</em> and <em>dark:text-cerise-300</em>
        </li>
      </ul>
    </Aside>
    <Aside>
      <p>Second Colors</p>
      <ul>
        <li>bg-flush-orange-300</li>
        <li>text-flush-orange-700</li>
      </ul>
    </Aside>
  </Article>
</div>
