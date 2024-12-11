<script>
  let phrase;
  $: phrase;
</script>

<p>The phrase is:</p>
<input bind:value={phrase} />
