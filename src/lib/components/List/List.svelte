<script>
  import BlenderPBR from './BlenderPBR.svelte';
  import WebDevelopment from './WebDevelopment.svelte';
  import GeneralCoding from './GeneralCoding.svelte';
  import CreativeWriting from './CreativeWriting.svelte';
  import Fun from "./Fun.svelte"

  import BaseLayout from '$lib/components/BaseLayout.svelte';
  import BaseContent from '$lib/components/BaseContent.svelte';
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
</BaseLayout>
