export default function GET({ params, request }) {
    return new Response(
        JSON.stringify({
            path: new URL(request.url).pathname
        })
    )
}