declare module '*.svx' {
    import type { SvelteComponent } from "svelte";
    export default class Comp extends SvelteComponent{}
    export const metadata: Record<string, unkown>
}

declare module '*.md' {
    import type { SvelteComponent } from "svelte";
    export default class Comp extends SvelteComponent{};
    export const metadata: Record<string, unknown>;
}