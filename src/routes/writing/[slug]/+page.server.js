import { error } from '@sveltejs/kit';
import { posts } from '$lib/database.js';

export async function load({ params }) {
    const slug = params.slug;
    const post = posts.find((post) => post.slug === params.slug)

    if(!post) error(404);

    return {
        slug,
        post
    };
}