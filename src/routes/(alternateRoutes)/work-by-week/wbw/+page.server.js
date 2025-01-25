import { redirect } from '@sveltejs/kit';

export function load() {
    redirect(308, '/')
    //TODO: link this to the appropriate route
}