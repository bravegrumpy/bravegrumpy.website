import type { PageServerLoad } from "./$types";
import { prisma } from "$lib/db/prisma"
import { error, json } from "@sveltejs/kit"

export const load: PageServerLoad = async () => {
    let allUsers;
    async function main() {
        const allUsers = await prisma.User.findMany()
        console.log('All Users:', JSON.stringify(allUsers, null, 2))
        return await allUsers;
    }
    allUsers = await main();

    return { allUsers };
}