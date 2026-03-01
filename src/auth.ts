import { SvelteKitAuth } from "@auth/sveltekit";
import Github from "@auth/sveltekit/providers/github";
import { AUTH_TRUST_HOST } from "$env/static/private"

export const { handle, signIn, signOut } = SvelteKitAuth({
    providers: [Github],
    trustHost: Boolean(AUTH_TRUST_HOST)
})