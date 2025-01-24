import links from "$lib/utils/data.js";
import { error } from "@sveltejs/kit";

export function load() {
  if (!links) {
    error(404, { message: "The page you are looking for does not exist" });
  }
  return {
    pages: links.map((link) => ({
      id: link.id,
      href: link.href,
      text: link.text,
      pageTitle: link.pageTitle,
      pageSubtitle: link.pageSubtitle,
    })),
  };
}

// export const prerender = true;
