<script>
  import BaseContent from '$lib/components/BaseContent.svelte';

  import Section from '$lib/components/Section.svelte';
  import Heading from '$lib/components/Heading.svelte';
  const { open = false } = $props();

  import SignUp from '$lib/components/Auth/SignUp.svelte';

  import SignIn from '$lib/components/Auth/SignIn.svelte';

  import User from '$lib/components/Auth/User.svelte';
</script>

<BaseContent title="2025-02-03" {open}>
  <Heading>Monday, February 3rd 2025</Heading>
  <Heading>Figuring out how to add Auth in 2025.</Heading>
  <Section>
    <p>This is supposed to be a sign in or up page.</p>
    <p>
      Apparently it is less than advisable to have a json or csv file on my server with a list of
      users and plain text passwords, where all users have write privilages to create a login.
    </p>
    <p>
      I'm <em class="font-pageSubtitle">totally</em> unsure why this could ever prove to be a problem.
    </p>
  </Section>
  <Section>
    <h3>This is the sign up form</h3>
    <p>
      I will put it in a better place, like inside a dialog when I've finished styling it
      appropriately.
    </p>
    <SignUp />

    <User />
  </Section>

  <Section>
    <SignIn />
  </Section>
</BaseContent>

<style>
  em {
    font-family: Recursive;
    font-variation-settings:
      'MONO' 0,
      'CASL' 1,
      'wght' 415,
      'CRSV' 1,
      'slnt' -10;
  }
</style>
