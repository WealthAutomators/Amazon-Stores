import type { Marketplace } from "@/config/stores/types";

export function getMarketplaceFromPath(
  pathname: string
): Marketplace | null {
  if (
    pathname.startsWith("/business-reports") ||
    pathname.includes("/store/amazon-")
  ) {
    return "amazon";
  }

  if (
    pathname.startsWith("/analytics") ||
    pathname.startsWith("/walmart") ||
    pathname.includes("/store/walmart-")
  ) {
    return "walmart";
  }

  return null;
}
