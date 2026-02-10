<script>
  import Month from "$lib/components/Blog/Month.svelte";
  import January from '../2025_01.svx';
  import February from '../2025_02.svx';
  import March from '../2025_03.svx';
  import September from '../2025_09.svx';
</script>

<Month Month="September" />
<September open={true} />

<Month Month="March" />
<March />

<Month Month="February" />
<February />

<Month Month="January" />
<January />
