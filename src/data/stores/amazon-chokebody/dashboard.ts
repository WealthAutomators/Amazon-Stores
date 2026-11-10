import { buildAmazonBundle } from "@/data/stores/build-amazon-bundle";
import type { AmazonStoreDataConfig } from "@/types/store-data";

export const amazonChokebodyDataConfig: AmazonStoreDataConfig = {
  timeSeriesSeed: 42,
  timeSeriesMultiplier: 1,
  timeSeriesProfile: "midmarket-growth",
  seriesStart: "2024-05-16",
  seriesEnd: "2026-11-11",
  defaultAggregate: {
    label: "Selected date range",
    totalOrderItems: 91130,
    unitsOrdered: 112595,
    orderedProductSales: 3682788.56,
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
      asin: "B0CBSPKB01",
      title: "Sour Patch Kids Soft & Chewy Candy Bulk Bag",
      imageUrl: "/products/chokebody-sour-patch-kids.png",
      category: "declining_sales",
      metricLabel: "$462.30 decline in OPS",
      deltaAmount: -462.3,
    },
    {
      asin: "B0CBKDCS02",
      title: "KIND Bars Dark Chocolate Nuts & Sea Salt (12 Count)",
      imageUrl: "/products/chokebody-kind-bars-box.png",
      category: "declining_sales",
      metricLabel: "$327.85 decline in OPS",
      deltaAmount: -327.85,
    },
    {
      asin: "B0CBAVOS03",
      title: "100% Avocado Oil Cooking Spray",
      imageUrl: "/products/chokebody-avocado-oil-spray.png",
      category: "declining_sales",
      metricLabel: "$203.15 decline in OPS",
      deltaAmount: -203.15,
    },
    {
      asin: "B0CBTANK04",
      title: "Adjustable Neoprene Ankle Weights Teal Pair",
      imageUrl: "/products/chokebody-teal-ankle-weights.png",
      category: "declining_sales",
      metricLabel: "$156.70 decline in OPS",
      deltaAmount: -156.7,
    },
    {
      asin: "B0CBSKTB05",
      title: "Skittles Original Fruity Candy Bulk Party Bag",
      imageUrl: "/products/chokebody-skittles-bulk.png",
      category: "increasing_sales",
      metricLabel: "$488.20 increase in OPS",
      deltaAmount: 488.2,
    },
  ],
  ads: { spend: 42850, roas: 3.42, acos: 18.2 },
  conversion: { rate: 12.4, sessions: 284500 },
};

export const amazonChokebodyBundle = buildAmazonBundle(amazonChokebodyDataConfig);
