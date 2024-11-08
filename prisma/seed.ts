import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main(){
    const welcome = await prisma.posts.upsert({
        where: { slug: 'welcome'},
        update: {},
        create: {
            slug: 'welcome',
            title: 'Welcome to the Aperture Science computer-aided enrichment center',
            content: '<p>We hope your brief detention in the relaxation vault has been a pleasant one.</p><p>Your specimen has been processed and we are now ready to begin the test proper.</p>'
        },
    })
    const safety = await prisma.posts.upsert({
        where: { slug: 'safety' },
        update: {},
        create: {
            slug: 'safety',
            title: 'Safety notice',
            content: '<p>While safety is one of many Enrichment Center Goals, the Aperture Science High Energy Pellet, seen to the left of the chamber, can and has caused permanent disabilities, such as vaporization. Please be careful.</p>'
        }
    })
    const cake = await prisma.posts.upsert({
        where: { slug: 'cake' },
        update: {},
        create: {
            slug: 'cake',
            title: 'This was a triumph',
            content: "<p>I'm making a note here: HUGE SUCCESS.</p>"
        },
    })
    console.log({ welcome, safety, cake })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })