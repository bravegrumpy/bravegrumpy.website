<script>
  import SignInButton from '$lib/components/Auth/SignInButton.svelte';
  import SignOutButton from '$lib/components/Auth/SignOutButton.svelte';
  import SignUpButton from '$lib/components/Auth/SignUpButton.svelte';

  import Article from '$lib/components/Article.svelte';
  import Section from '$lib/components/Section.svelte';
  import Heading from '$lib/components/Heading.svelte';
  import { SignedIn, SignedOut } from 'svelte-clerk';
</script>

<Article --articleColumn="2/3">
  <Heading>Protected Testing</Heading>
  <Section>
    <p>This is the protected route</p>

    <SignedIn>
      <SignOutButton />
    </SignedIn>

    <SignedOut>
      <SignInButton />
      <SignUpButton />
    </SignedOut>
  </Section>
</Article>
