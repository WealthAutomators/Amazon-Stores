import { buildAmazonBundle } from "@/data/stores/build-amazon-bundle";
import type { AmazonStoreDataConfig } from "@/types/store-data";

export const amazonChokebodyDataConfig: AmazonStoreDataConfig = {
  timeSeriesSeed: 42,
  timeSeriesMultiplier: 1,
  timeSeriesProfile: "midmarket-growth",
  seriesStart: "2024-05-16",
  seriesEnd: "2026-08-20",
  defaultAggregate: {
    label: "Selected date range",
    totalOrderItems: 60446,
    unitsOrdered: 74683,
    orderedProductSales: 2458568.27,
    avgUnitsPerOrderItem: 1.24,
    avgSalesPerOrderItem: 40.68,
  },
  insights: {
    id: "chokebody-insights",
    paragraphs: [
      "In April 2026, your ordered product sales reached $93.5K with strong momentum across the catalog. Average selling price held near $40.68 per order item, while units ordered totaled 3,334 for the month with an average price around $28.",
      "Year-over-year ordered product sales grew approximately +2,044% compared to the prior period. Page views reached 1.34M, supporting continued visibility for top ASINs in the performance carousel.",
      "Review ASINs with declining OPS in the performance carousel before Q3 inventory planning—several candy and snack SKUs show measurable week-over-week softness.",
    ],
  },
  asinAlerts: [
    {
      asin: "B0CBTWIZ01",
      title: "Twizzlers Pull-n-Peel Cherry Candy Bulk Bag",
      imageUrl: "/products/chokebody-twizzlers-bulk.png",
      category: "declining_sales",
      metricLabel: "$548.90 decline in OPS",
      deltaAmount: -548.9,
    },
    {
      asin: "B0CBNAT02",
      title: "Nature Valley Granola Bars Oats & Honey (12 Count)",
      imageUrl: "/products/chokebody-nature-valley-box.png",
      category: "declining_sales",
      metricLabel: "$385.40 decline in OPS",
      deltaAmount: -385.4,
    },
    {
      asin: "B0CBAVOC03",
      title: "Avocado Oil Cooking Spray",
      imageUrl: "/products/chokebody-avocado-spray.png",
      category: "declining_sales",
      metricLabel: "$276.55 decline in OPS",
      deltaAmount: -276.55,
    },
    {
      asin: "B0CBJUMP04",
      title: "Speed Jump Rope Foam Handles",
      imageUrl: "/products/chokebody-speed-jump-rope.png",
      category: "declining_sales",
      metricLabel: "$221.80 decline in OPS",
      deltaAmount: -221.8,
    },
    {
      asin: "B0CBHARI05",
      title: "Haribo Goldbears Gummy Candy 5 lb Bulk",
      imageUrl: "/products/chokebody-haribo-bulk.png",
      category: "increasing_sales",
      metricLabel: "$291.60 increase in OPS",
      deltaAmount: 291.6,
    },
  ],
  ads: { spend: 42850, roas: 3.42, acos: 18.2 },
  conversion: { rate: 12.4, sessions: 284500 },
};

export const amazonChokebodyBundle = buildAmazonBundle(amazonChokebodyDataConfig);
