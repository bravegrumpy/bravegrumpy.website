import { derived, writable } from 'svelte/store';

export const theme = writable('system');

// Links Page
export let cardStyle = writable<boolean>(false);
export let divLink = writable<boolean>(false);
export let showStyleOption = writable<boolean>(false);
export let isHeadingInteractive = writable<boolean>(false);
export let debugOutput = writable<boolean>(false);
export let showDebug = writable<boolean>(false);

// Settings page
export let devNotesExist = writable<boolean>(false);
export let showDevNotes = writable<boolean>(false);
export let settingsPageSettings = writable<boolean>(true);
export let settingsMode = writable<"dropdown" | "buttons" | "group">("dropdown");

// Blog page
export let showBlogOptions = writable<boolean>(true);
let EAY:number = 2025;
export let earliestAllowedYear = writable<number>(EAY);
export let earliestYear = writable<number>(2025);

earliestYear.update((y) => {
    if (y >= EAY) {
        return y 
    } else {
        return EAY;
    }
})