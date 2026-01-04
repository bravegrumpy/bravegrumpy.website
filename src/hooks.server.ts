import type { Handle } from "@sveltejs/kit"

const allowedOrigins = new Set([
    "https://ncase.me",
    "https://testing-cors-self.vercel.app/",
    "https://cdn.jsdeliver.net",
    "https://*.bravegrumpy.com",
    "http://localhost:3000",
    "http://localhost:4321",
    "http://localhost:5173"
]);

function corsHeaders(origin: string | null) {
    const headers = new Headers();

    if (origin && allowedOrigins.has(origin)) {
        headers.set("Access-Control-Allow-Origins", origin)
        headers.set("Vary", "Origin");

        headers.set("Access-Control-Allow-Methods", "GET")
        headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization")

        headers.set("Access-Control-Max-Age", "86400")
    }
    return headers
}

export const handle: Handle = async ({ event, resolve }) => {
    const origin = event.request.headers.get("origin")

    if (event.request.method === "OPTIONS") {
        return new Response(null, {
            status: 204,
            headers: corsHeaders(origin)
        });
    }
    const response = await resolve(event);
    const headers = corsHeaders(origin);
    headers.forEach((value, key) => response.headers.set(key, value));

    return response

}