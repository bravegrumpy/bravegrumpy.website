import * as env from "$env/static/private";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "./_generated/client";

const connectionString = `${env.DATABASE_URL}`;

const adapter = new PrismaPg({ connectionString })
const prisma = new PrismaClient({ adapter })

export { prisma }