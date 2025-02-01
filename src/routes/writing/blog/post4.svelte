<script>
  import BaseContent from '$lib/components/BaseContent.svelte';
  import Section from '$lib/components/Section.svelte';

  import { Button, GradientButton } from 'flowbite-svelte';
</script>

<BaseContent h2="January 4th, 2025" title="2025-01-04" open>
  <Section>
    <div class="flex w-full flex-row flex-wrap gap-5">
      <Button>Default</Button>
      <Button color="alternative">Alternative</Button>
      <Button color="dark">Dark</Button>
      <Button color="light">Light</Button>
      <Button color="blue">Blue</Button>
      <Button color="green">Green</Button>
      <Button color="red">Red</Button>
      <Button color="yellow">Yellow</Button>
      <Button color="purple">Purple</Button>
    </div>
  </Section>
  <Section>
    <div class="flex w-full flex-row flex-wrap gap-5">
      <Button pill>Default</Button>
      <Button pill color="alternative">Alternative</Button>
      <Button pill color="dark">Dark</Button>
      <Button pill color="light">Light</Button>
      <Button pill color="blue">Blue</Button>
      <Button pill color="green">Green</Button>
      <Button pill color="red">Red</Button>
      <Button pill color="yellow">Yellow</Button>
      <Button pill color="purple">Purple</Button>
    </div>
  </Section>
  <Section>
    <div class="flex w-full flex-row flex-wrap gap-5">
      <Button shadow outline pill>Default</Button>
      <Button shadow outline pill color="alternative">Alternative</Button>
      <Button shadow outline pill color="dark">Dark</Button>
      <Button shadow outline pill color="light">Light</Button>
      <Button shadow outline pill color="blue">Blue</Button>
      <Button shadow outline pill color="green">Green</Button>
      <Button shadow outline pill color="red">Red</Button>
      <Button shadow outline pill color="yellow">Yellow</Button>
      <Button shadow outline pill color="purple">Purple</Button>
    </div>
  </Section>
  <Section>
    <div class="flex w-full flex-row flex-wrap gap-5">
      <GradientButton color="blue">Blue</GradientButton>
      <GradientButton color="green">Green</GradientButton>
      <GradientButton color="cyan">Cyan</GradientButton>
      <GradientButton color="teal">Teal</GradientButton>
      <GradientButton color="lime">Lime</GradientButton>
      <GradientButton color="red">Red</GradientButton>
      <GradientButton color="pink">Pink</GradientButton>
      <GradientButton color="purple">Purple</GradientButton>
    </div>
  </Section>
  <Section>
    <div class="flex w-full flex-row flex-wrap gap-5">
      <GradientButton color="purpleToBlue">Purple to Blue</GradientButton>
      <GradientButton color="cyanToBlue">Cyan to Blue</GradientButton>
      <GradientButton color="greenToBlue">Green to Blue</GradientButton>
      <GradientButton color="purpleToPink">Purple to Pink</GradientButton>
      <GradientButton color="pinkToOrange">Pink to Orange</GradientButton>
      <GradientButton color="tealToLime">Teal to Lime</GradientButton>
      <GradientButton color="redToYellow">Red to Yellow</GradientButton>
    </div>
  </Section>
  <Section>
    <div class="flex w-full flex-row flex-wrap gap-5">
      <GradientButton outline color="purpleToBlue">Purple to Blue</GradientButton>
      <GradientButton outline color="cyanToBlue">Cyan to Blue</GradientButton>
      <GradientButton outline color="greenToBlue">Green to Blue</GradientButton>
      <GradientButton outline color="purpleToPink">Purple to Pink</GradientButton>
      <GradientButton outline color="pinkToOrange">Pink to Orange</GradientButton>
      <GradientButton outline color="tealToLime">Teal to Lime</GradientButton>
      <GradientButton outline color="redToYellow">Red to Yellow</GradientButton>
    </div>
  </Section>
</BaseContent>
