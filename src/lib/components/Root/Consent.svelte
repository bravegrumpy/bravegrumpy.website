<script>
  import { Modal } from 'flowbite-svelte';

  let defaultModel = $state(true);
  let selectedYear = $state(Number(new Date().getFullYear()));
  let currentYear = $state(Number(new Date().getFullYear()));
  let age = $derived(currentYear - selectedYear);

  function handleClick() {
    if (selectedYear <= 2004) {
      defaultModel = !defaultModel;
    } else {
      // window.location.href = "https://www.google.com";
      defaultModel = !defaultModel;
    }
  }
</script>

<Modal
  title="Consent to being exposed to adult content"
  bind:open={defaultModel}
  color="purple"
  autoclose={false}
>
  <h2>This website mature content</h2>
  <p>
    By proceeding to this website, you are agreeing that you are over the age of 18, and consent to
    being exposed to content for mature audiences.
  </p>

  <label>
    Enter the year you were born.
    <input type="number" bind:value={selectedYear} />
  </label>
  <div class="flex w-full flex-row gap-2">
    <Button color="green" onclick={handleClick}>Yes Continue</Button>
    <Button color="red" href="https://www.google.com">Exit</Button>
  </div>
</Modal>
