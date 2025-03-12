import { redirect } from "@sveltejs/kit"

export async function load() {
    // const isAdmin = await checkRole('admin')
    // if (!isAdmin) {
        // redirect('/')
    // }
    return {
        page: "private"
    }
}