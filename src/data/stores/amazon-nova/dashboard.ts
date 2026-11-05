import { buildAmazonBundle } from "@/data/stores/build-amazon-bundle";
import type { AmazonStoreDataConfig } from "@/types/store-data";

export const amazonNovaDataConfig: AmazonStoreDataConfig = {
  timeSeriesSeed: 207,
  timeSeriesMultiplier: 0.62,
  timeSeriesProfile: "midmarket-spike-decline",
  seriesStart: "2024-08-14",
  seriesEnd: "2026-11-06",
  defaultAggregate: {
    label: "Selected date range",
    totalOrderItems: 43447,
    unitsOrdered: 50941,
    orderedProductSales: 1101403.48,
    avgUnitsPerOrderItem: 1.17,
    avgSalesPerOrderItem: 25.22,
  },
  insights: {
    id: "kursat-insights",
    paragraphs: [
      "In April 2026, your ordered product sales reached $326, down approximately 97% year over year. Units ordered totaled 24 for the month—a near-complete collapse compared to the prior year.",
      "For the selected date range, ordered product sales totaled $487,735.84 on 22,686 units with an average of $25.21 per order item. Performance peaked in mid-2025 before declining sharply starting in late 2025.",
      "Review Products Below Market Average in the ASIN carousel—the Aozora colored pencils SKU shows a measurable gap versus similar listings in your category.",
    ],
  },
  asinAlerts: [
    {
      asin: "B0KRPNCL01",
      title: "Aozora Colored Pencils 24-Count Tin Set",
      imageUrl: "/products/kursat-aozora-colored-pencils.jpg",
      category: "below_market_average",
      metricLabel:
        "Last week sales were $38.60 below the market average for similar ASINs",
      deltaAmount: -38.6,
    },
    {
      asin: "B0KRWOKC02",
      title: "Carbon Steel Wok 13-Inch with Wooden Handle",
      imageUrl: "/products/kursat-carbon-steel-wok.jpg",
      category: "top_sales_products",
      metricLabel: "$1,742.35 in ordered product sales last week",
      deltaAmount: 1742.35,
    },
    {
      asin: "B0KRFRTH03",
      title: "Electric Milk Frother & Warmer Matte White",
      imageUrl: "/products/kursat-milk-frother.jpg",
      category: "declining_sales",
      metricLabel: "$187.25 decline in ordered product sales",
      deltaAmount: -187.25,
    },
    {
      asin: "B0KRJARS04",
      title: "Glass Clamp-Lid Storage Jars Set of 3",
      imageUrl: "/products/kursat-clamp-glass-jars.jpg",
      category: "increasing_sales",
      metricLabel: "$734.80 increase in ordered product sales",
      deltaAmount: 734.8,
    },
    {
      asin: "B0KRDRWR05",
      title: "3-Tier Plastic Drawer Storage Organizer White",
      imageUrl: "/products/kursat-drawer-organizer-3tier.jpg",
      category: "declining_traffic",
      metricLabel: "7% decline in page views",
      deltaAmount: -7,
    },
    {
      asin: "B0KRDMAT06",
      title: "Felt Desk Mat with Matching Catch-All Tray Gray",
      imageUrl: "/products/kursat-felt-desk-mat.jpg",
      category: "increasing_traffic",
      metricLabel: "13% increase in page views",
      deltaAmount: 13,
    },
  ],
  ads: { spend: 28400, roas: 3.8, acos: 16.5 },
  conversion: { rate: 11.8, sessions: 312000 },
};

export const amazonNovaBundle = buildAmazonBundle(amazonNovaDataConfig);
