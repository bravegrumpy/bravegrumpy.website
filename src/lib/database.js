import prisma from "$lib/prisma.js";

export const posts = await prisma.posts.findMany();