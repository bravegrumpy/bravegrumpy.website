import * as env from "$env/static/private";
import { PrismaPg } from "@prisma/adapter-pg"
import { PrismaClient } from "$lib/../../generated/prisma/client";

const connectionString = `${env.DATABASE_URL}`;

const adapter = new PrismaPg({ connectionString })
const prisma = new PrismaClient({ adapter });

export { prisma };