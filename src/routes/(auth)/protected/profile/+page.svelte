<script>
  import { UserProfile, SignIn, SignUp, SignedIn, SignedOut } from 'svelte-clerk';

  import Article from '$lib/components/Article.svelte';
  import Section from '$lib/components/Section.svelte';
  import Heading from '$lib/components/Heading.svelte';
</script>

<SignedIn>
  <Article --articleColumn="2/3">
    <Heading>User Profile</Heading>
    <Section>
      <UserProfile />
    </Section>
  </Article>
</SignedIn>
<SignedOut>
  <Article --articleColumn="1/4">
    <Heading>Sign In or Up</Heading>
    <Section>
      <div class="login">
        <SignIn />
        <SignUp />
      </div>
    </Section>
  </Article>
</SignedOut>

<style>
  .login {
    display: flex;
    flex-direction: row;
    gap: 25px;
    justify-content: space-around;
    width: 100%;
  }
</style>
