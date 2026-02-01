import { error, fail } from "@sveltejs/kit";
import { prisma } from "$lib/db/prisma";

export async function load() {
    let allUsers;
    async function main() {
        allUsers = await prisma.User.findMany();
        console.log('All Users', JSON.stringify(allUsers, null, 2));
        return allUsers;
    }
    try {
    allUsers = await main().then(await prisma.$disconnect()).catch(async (e) => {
        return error(e);
    })
    } catch(err) {
        allUsers = "FAILURE"
        return error(501, err.message)
    }
    return { allUsers }
}