// Utility functions for navigation and page data
export function getCurrentPageData(pathname, links) {
  // Handle root path
  if (pathname === "/") {
    return links.find((link) => link.href === "/");
  }

  // Handle direct matches
  const directMatch = links.find((link) => link.href === pathname);
  if (directMatch) {
    return directMatch;
  }

  // Handle nested routes
  const parentPath = "/" + pathname.split("/")[1];
  const parent = links.find((link) => link.href === parentPath);

  if (parent?.subnav) {
    return parent.subnav.find((sublink) => sublink.href === pathname) || parent;
  }

  // Fallback to default values
  return {
    pageTitle: "Page Not Found",
    pageSubtitle: "The requested page could not be found",
  };
}
