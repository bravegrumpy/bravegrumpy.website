import { data } from '$lib/database.js';

export async function load() {
    const posts = await data;
    return {
        summaries: posts.map((post) => ({
            slug: post.slug,
            title: post.title,
        }))
    }
}