import { redirect } from "@sveltejs/kit";
//@ts-expect-error It cannot find the './$types.d.ts' for some reason.
import { type PageServerLoad } from './$types';

export const load:PageServerLoad = () => {
    redirect(308, '/links')
}