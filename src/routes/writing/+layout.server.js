import { posts } from '$lib/database';

export async function load() {
    return {
        summaries: await posts.map((post) => ({
            slug: post.slug,
            title: post.title
        }))
    }
}