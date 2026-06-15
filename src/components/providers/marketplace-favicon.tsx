"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { getMarketplaceFromPath } from "@/lib/navigation/marketplace-from-path";
import { getFaviconHref } from "@/lib/metadata/site-metadata";

const FAVICON_LINKS = [
  { rel: "icon", selector: 'link[rel="icon"]' },
  { rel: "shortcut icon", selector: 'link[rel="shortcut icon"]' },
  { rel: "apple-touch-icon", selector: 'link[rel="apple-touch-icon"]' },
] as const;

function setFavicon(href: string): void {
  for (const { rel, selector } of FAVICON_LINKS) {
    let link = document.querySelector<HTMLLinkElement>(selector);
    if (!link) {
      link = document.createElement("link");
      link.rel = rel;
      document.head.appendChild(link);
    }
    link.type = "image/png";
    link.href = href;
  }
}

export function MarketplaceFavicon() {
  const pathname = usePathname();

  useEffect(() => {
    const marketplace = getMarketplaceFromPath(pathname);
    if (!marketplace) return;

    setFavicon(getFaviconHref(marketplace));
  }, [pathname]);

  return null;
}
