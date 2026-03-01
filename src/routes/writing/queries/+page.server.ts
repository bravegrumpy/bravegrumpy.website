import type { PageServerLoad } from "./$types";
import type { Actions } from "./$types";
import { fail, error } from "@sveltejs/kit";

import { prisma } from "$lib/db/prisma";

export const load: PageServerLoad = async () => {
    if (! (await prisma )) {
        return error(500, { message: "Prisma instance not loaded"})
    }
    if (! (await prisma.user)) {
        return error(505, { message: "Cannot Query User Table"})
    }

    const allUsers = await prisma.user.findMany();
    return { allUsers }
}

export const actions = {
    add: async ({ request }) => {
        const formData = await request.formData();
        const email = formData.get("email");
        const name = formData.get("name");
        if (!email) { return fail(400, { email, missing: true }); }
        if (!name) { return fail(400, { name, missing: true }); }

        const data = { name, email }
        console.log(data);
        await prisma.user.create({ data })
    }
} satisfies Actions