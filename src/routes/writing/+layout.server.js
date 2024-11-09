import { posts } from '$lib/database.js';

export async function load() {
    return {
        summaries: await posts.map((post) => ({
            slug: post.slug,
            title: post.title
        }))
    }
}