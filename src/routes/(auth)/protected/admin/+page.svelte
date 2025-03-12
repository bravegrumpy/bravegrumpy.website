<script>
  import Article from '$lib/components/Article.svelte';
  import Section from '$lib/components/Section.svelte';
  import Heading from '$lib/components/Heading.svelte';

  import { SignedIn, SignedOut, Protect } from 'svelte-clerk';

  import SignInButton from '$lib/components/Auth/SignInButton.svelte';
  import SignOutButton from '$lib/components/Auth/SignOutButton.svelte';
  import SignUpButton from '$lib/components/Auth/SignUpButton.svelte';
</script>

<svelte:head>
  <title>Admin | Bravegrumpy</title>
</svelte:head>

<SignedOut>
  <Article --articleColumn="2/3">
    <Heading>Sign In to View Content</Heading>
    <Section>
      <p>Sign in to view content</p>
      <SignInButton />
      <SignUpButton />
    </Section>
  </Article>
</SignedOut>
<SignedIn>
  <Article>
    <Heading>You Are Signed In</Heading>
    <Section>
      <p>Lets put info here</p>
      <SignOutButton />
    </Section>
    <Protect permission="org:role:admin">
      <Section>
        <p>Admin Only</p>
      </Section>
    </Protect>
  </Article>
</SignedIn>
