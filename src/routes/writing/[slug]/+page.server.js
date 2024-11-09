import { posts } from "$lib/database.js";

export async function load({ params }) {
    const slug = params.slug;;
    const post = await posts.find((post) => (post.slug === params.slug));
    
    return {
        slug,
        post
    };
}