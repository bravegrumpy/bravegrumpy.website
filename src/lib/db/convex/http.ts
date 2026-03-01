import { httpRouter } from "convex/server";
import { httpAction } from "$lib/db/convex/_generated/server";

const http = httpRouter();

http.route({
    path: "/api/hello",
    method: "GET",
    handler: httpAction(async (ctx, request) => {
        return new Response(`Hello from ${request.url}`)
    })
});

export default http;