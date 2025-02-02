<script>
  import Icon from '@iconify/svelte';
  import { Toggle } from 'flowbite-svelte';
</script>

<Toggle color="teal" checked={true}>Toggle Me</Toggle>

<p>This is the sun icon:<Icon icon="hugeicons:sun-02" width="32" height="32" /></p>

<p>
  This is the moon icon:
  <Icon icon="hugeicons:moon-02" width="24" height="24" />
</p>
