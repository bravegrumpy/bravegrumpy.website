import * as env from '$env/static/public';

export async function GET() {
  const body = ['User-agent: *', 'Allow: /', '', `Sitemap: ${env.PUBLIC_ORIGIN}/sitemap.xml`]
    .join('\n')
    .trim();

  const headers = {
    'Content-Type': 'text/plain'
  };

  return new Response(body, { headers });
}
