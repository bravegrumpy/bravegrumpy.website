export default function GET({ request }) {
    return new Response(
        JSON.stringify({
            path: new URL(request.url).pathname
        })
    )
}