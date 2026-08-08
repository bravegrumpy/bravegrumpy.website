<script>
  import BlenderPBR from './BlenderPBR.svelte';
  import WebDevelopment from './WebDevelopment.svelte';
  import GeneralCoding from './GeneralCoding.svelte';
  import CreativeWriting from './CreativeWriting.svelte';
  import Fun from './Fun.svelte';
  import Crafts from './Crafts.svelte';
  import Media from './Media.svelte';

  import BaseLayout from '$lib/components/BaseLayout.svelte';
  import BaseContent from '$lib/components/BaseContent.svelte';

  import { page } from '$app/state';

  let tabs = ['Blender', 'Web Dev', 'Coding', 'CreativeWriting', 'Fun', 'Crafts', 'Media'];

  let activeTab = $derived(page.url.searchParams.get('tab'));
</script>

<BaseLayout colEnd="4">
  <BaseContent title="Blender PBR" open>
    <BlenderPBR />
  </BaseContent>
  <BaseContent title="Web Development">
    <WebDevelopment />
  </BaseContent>
  <BaseContent title="General Coding">
    <GeneralCoding />
  </BaseContent>
  <BaseContent title="Creative Writing">
    <CreativeWriting />
  </BaseContent>
  <BaseContent title="Small-Web Community">
    <Fun />
  </BaseContent>
  <BaseContent title="Arts & Crafts">
    <Crafts />
  </BaseContent>
  <BaseContent title="Media">
    <Media />
  </BaseContent>
</BaseLayout>
