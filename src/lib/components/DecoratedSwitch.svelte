<script>
  import Icon from '@iconify/svelte';

  // Toggle state
  // let { checked } = $state(false);

  let { offIcon = 'game-icons:sun', onIcon = 'game-icons:night-sleep', checked=$bindable() } = $props();

  // Customize which icons to show for OFF/ON states
  // let offIcon = 'game-icons:sun'; // or any other Iconify icon (e.g., 'mdi:weather-sunny')
  // let onIcon = 'game-icons:night-sleep'; // or any other Iconify icon
</script>

<label class="switch">
  <!-- Bind the Svelte variable 'checked' to the checkbox -->
  <input type="checkbox" bind:checked />

  <!-- The track -->
  <span class="slider">
    <!-- The thumb is a real element that moves, allowing us to nest icons -->
    <span class="thumb">
      <!-- Show different icons depending on on/off (checked) -->
      {#if checked}
        <Icon icon={onIcon} width="100" height="100" />
      {:else}
        <Icon icon={offIcon} width="100" height="100" />
      {/if}
    </span>
  </span>
</label>

<style>
  /* Container for the switch */
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }

  /* Hide the native checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The gray track (background) of the toggle */
  .slider {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /* background-color: rgba(196, 80, 196, 0.651); */
    border-radius: 34px; /* For a rounded pill shape */
    cursor: pointer;
    transition: 0.4s;

    --s: 16px; /* control the size*/
    --c1: #fffdb8;
    --c2: #aebee5;
    --c3: #8fcfcf;
    --c4: #886a06;

    --_g:
      var(--c2) 6% 14%, var(--c1) 16% 24%, var(--c2) 26% 34%, var(--c1) 36% 44%, var(--c2) 46% 54%,
      var(--c1) 56% 64%, var(--c2) 66% 74%, var(--c1) 76% 84%, var(--c2) 86% 94%;
    background:
      radial-gradient(100% 100% at 100% 0, var(--c1) 4%, var(--_g), #0008 96%, #0000),
      radial-gradient(100% 100% at 0 100%, #0000, #0008 4%, var(--_g), var(--c1) 96%) var(--c1);
    background-size: var(--s) var(--s);
  }

  /* The moveable "thumb" – replaces the pseudo-element */
  .thumb {
    border: 2px solid currentColor;

    position: absolute;
    top: 4px;
    left: 4px;
    width: 26px;
    height: 26px;
    /* background-color: #aebee5; */
    background-color: var(--c3);
    border-radius: 50%;
    transition: 0.4s;
    color: var(--c4);

    /* Center the icon within the thumb */
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* When checked, the slider track turns blue (or any other color) */
  input:checked + .slider {
    /* --c5: #d7d5fd; */
    --c5: #99ff;
    /* --c6: #020317; */
    --c6: #022f;
    background:
      radial-gradient(
        circle at top left,
        transparent 9%,
        var(--c5) 10%,
        var(--c5) 15%,
        transparent 16%
      ),
      radial-gradient(
        circle at bottom left,
        transparent 9%,
        var(--c5) 10%,
        var(--c5) 15%,
        transparent 16%
      ),
      radial-gradient(
        circle at top right,
        transparent 9%,
        var(--c5) 10%,
        var(--c5) 15%,
        transparent 16%
      ),
      radial-gradient(
        circle at bottom right,
        transparent 9%,
        var(--c5) 10%,
        var(--c5) 15%,
        transparent 16%
      ),
      radial-gradient(circle, transparent 25%, var(--c6) 26%),
      linear-gradient(0deg, transparent 44%, var(--c5) 45%, var(--c5) 55%, transparent 56%),
      linear-gradient(90deg, transparent 44%, var(--c5) 45%, var(--c5) 55%, transparent 56%);
    background-size: 0.8rem 0.8rem;
    background-color: var(--c6);
    opacity: 0.9;
  }

  /* Move the thumb to the right when checked */
  input:checked + .slider .thumb {
    transform: translateX(26px);

    color: var(--c5);
    background-color: var(--c6);
  }
</style>
