import links from '$lib/utils/data';

export function load() {
  const page = links.find((link) => link.href === '/writing').subnav;
  const subnav = page.subSubnav;

  return {
    page: page,
    subnav: subnav
  };
}
