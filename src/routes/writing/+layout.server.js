import links from '$lib/utils/data.js';

export function load() {
  const writing = links.find((link) => link.href === '/writing');
  const fantasy = writing.subnav.find((page) => page.href === '/writing/huetopia');
  const fp = fantasy.subnav;
  const subnav = writing.subnav;

  return {
    page: writing,
    subNav: subnav,
    huetopia: fantasy,
    writing: fp
  };
}
