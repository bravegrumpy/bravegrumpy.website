import { fail } from "@sveltejs/kit";
import prisma from "$lib/server/prisma";

export const load = async () => {
    const posts = await prisma.post.findMany({
        where: { published: true },
        include: { author: true }
    });

    return { posts }
}

export const actions = {
    createPost: async ({ request }) => {
        const data = await request.formData();
        const title = data.get('title');
        const content = data.get('content');

        if (typeof title !== 'string' || typeof content !== 'string' || !title || !content) {
            return fail(400, { message: "Invalid data"});
        }

        try {
            await prisma.post.create({
                data: {
                    title,
                    content,
                    authorId: 1
                }
            });
        } catch (error) {
            console.error(error);
            return fail(500, { message: 'Could not create post'})
        }
        return { success: true }
    }
};