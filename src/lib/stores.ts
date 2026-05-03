import { writable } from 'svelte/store';

export const theme = writable('system');

export let cardStyle = writable<boolean>(false);
export let divLink = writable<boolean>(false);
export let showStyleOption = writable<boolean>(false);
export let isHeadingInteractive = writable<boolean>(false);
export let showDebug = writable<boolean>(false);