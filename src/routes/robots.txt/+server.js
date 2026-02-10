import * as env from '$env/static/public';

export async function GET() {
  const body = [
    'User-agent: GPTBot', 
    'Disallow: /', 
    'User-agent: GPTBot-User',
    'Disallow: /',
    'User-agent: *', 
    'Allow: /', 
    `Sitemap: ${import.meta.env.BASE_URL}/sitemap.xml`]
    .join('\n')
    .trim();

  const headers = {
    'Content-Type': 'text/plain'
  };

  return new Response(body, { headers });
}
