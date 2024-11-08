import prisma from '$lib/prisma';

export default function data() {
    async function main(){
        const data = await prisma.findMany()
        return data;
    }
    
    return (
        main()
            .then(async () => {
                await prisma.$disconnect()
            })
            .catch(async (e) => {
                console.error(e)
                await prisma.$disconnect()
                process.exit(1)
            })
    );
}