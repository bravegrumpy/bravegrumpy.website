<script>
  import '$lib/styles/globals.css';

  const { href, text, reversed = true, slug = '/', className = '' } = $props();

  const baseClass = $state('navButton hover:hue-rotate-15 hover:scale-105');
  const reverse = $derived(reversed);
  const defaultLight = 'bg-bravegrumpy-brand1 text-bravegrumpy-accent1a border-accent1a';
  const defaultDark =
    'dark:bg-bravegrumpy-accent1a dark:text-bravegrumpy-logoPurple dark:border-bravegrumpy-logoPurple';
  const activeLight = 'active:text-bravegrumpy-highlight1 active:border-bravegrumpy-highlight1';
  const activeDark = 'dark:active:text-bravegrumpy-brand1 dark:active:border-bravegrumpy-brand1';
  const reverseDefaultLight =
    'data-[reverse=true]:bg-bravegrumpy-accent1a data-[reverse=true]:text-bravegrumpy-logoPurple data-[reverse=true]:border-bravegrumpy-logoPurple';
  const reverseActiveLight =
    'active:data-[reverse=true]:text-bravegrumpy-brand1 active:data-[reverse=true]:border-bravegrumpy-brand1';
  const reverseDefaultDark =
    'dark:data-[reverse=true]:bg-bravegrumpy-brand1 dark:data-[reverse=true]:text-bravegrumpy-accent1a dark:data-[reverse=true]:border-bravegrumpy-accent1a';
  const reverseActiveDark =
    'dark:active:data-[reverse=true]:text-bravegrumpy-highlight1 dark:active:data-[reverse=true]:border-bravegrumpy-highlight1';
</script>

<a
  {href}
  class:active={slug === href ? 'active' : ''}
  data-reverse={reverse}
  class={`${className} ${baseClass} ${reverse} ${defaultLight} ${defaultDark} ${activeLight} ${activeDark} ${reverseDefaultLight} ${reverseActiveLight} ${reverseDefaultDark} ${reverseActiveDark} font-navMenuDefault active:font-navMenuActive`}
>
  {text}</a
>

<style>
  .navButton {
    font-size: var(--fontSize, 2rem);
    border: 5px solid;
    border-radius: 5px;
    width: var(--buttonWidth, 175px);
    height: 3.75rem;
    text-align: center;
    padding-top: calc(2rem - var(--fontSize, 2rem));
    margin-left: var(--marginLeft, 1rem);
    margin-top: var(--marginTop, 0px);
    text-decoration: none;
  }
</style>
