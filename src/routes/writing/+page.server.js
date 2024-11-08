import { posts } from '$lib/database.js';
import { error } from '@sveltejs/kit';

export async function load() {
    return {
        summaries: posts.map((post) => ({
            slug: post.slug,
            title: post.title
        }))
    };
}