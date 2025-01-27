import links from '$lib/utils/data.js';
import { error } from '@sveltejs/kit';

export function load() {
  if (!links) error(500, body={message:"Links not found"});

  const writing = links.find((link) => link.href === '/writing');
  const fantasy = writing.subnav.find((page)=> page.href === '/writing/huetopis');

  const subnav = fantasy.subnav

  if (!writing ) error(404, body={message: "Writing page data not found"});
  if (!fantasy ) error(404, body={message: "Huetopa page data not found"})

  return {
    page: fantasy,
    subNav: subnav
  }

}
