<script>
  import { SignedIn, SignIn, SignUp, SignedOut, UserButton, SignOutButton } from 'svelte-clerk';

  import Article from '$lib/components/Article.svelte';
  import Section from '$lib/components/Section.svelte';
  import Heading from '$lib/components/Heading.svelte';
  import Icon from '@iconify/svelte';
</script>

<Article --articleColumn="2/3">
  <Heading>Auth Check</Heading>
  <Section>
    <SignedIn>
      <p>You are signed in</p>
      <div>
        <p>
          View your profile here. <Icon icon="hugeicons:hand-pointing-down-04" class="inline" />
        </p>
        <UserButton />
      </div>
    </SignedIn>
    <SignedOut>
      <p>You are signed out</p>
      <div>
        <a href="/sign-in">Go to Sign In</a>
        <SignIn />
      </div>
      <div>
        <a href="/sign-up">Go to Sign Up</a>
        <SignUp />
      </div>
    </SignedOut>
  </Section>
</Article>
