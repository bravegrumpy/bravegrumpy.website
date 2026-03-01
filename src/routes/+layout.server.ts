import links from '$lib/utils/data.js';
import { error, fail } from '@sveltejs/kit';
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async (event) => {
  const session = await event.locals.auth();
  if (!links) {
    error(404, { message: 'The page you are looking for does not exist' });
  }
  return {
    session,
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
