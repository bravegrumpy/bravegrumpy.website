import links from '$lib/utils/data.js';
import { error } from '@sveltejs/kit';

export async function load({ request }) {
  if (!links) {
    error(404, { message: 'The page you are looking for does not exist' });
  }
  if (!request) {
    error(500, 'There was an internal error')
  }
  const headers = request.headers;
  const userAgent = headers.get('user-agent');
  return {
    userAgent,
    pages: links.map((link) => ({
      id: link.id,
      href: link.href,
      text: link.text,
      pageTitle: link.pageTitle,
      pageSubtitle: link.pageSubtitle
    }))
  };
}

// export const prerender = true;
