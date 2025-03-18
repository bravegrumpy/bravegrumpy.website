<script>
import { SignedOut, SignInButton, SignedIn, RedirectToSignIn, Protect } from 'svelte-clerk/components';
</script>

<SignedOut>
    <RedirectToSignIn />
</SignedOut>
<SignedIn>
    <h2>Hello User</h2>
</SignedIn>