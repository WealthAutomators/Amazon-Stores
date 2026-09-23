import { buildAmazonBundle } from "@/data/stores/build-amazon-bundle";
import type { AmazonStoreDataConfig } from "@/types/store-data";

export const amazonChokebodyDataConfig: AmazonStoreDataConfig = {
  timeSeriesSeed: 42,
  timeSeriesMultiplier: 1,
  timeSeriesProfile: "midmarket-growth",
  seriesStart: "2024-05-16",
  seriesEnd: "2026-09-23",
  defaultAggregate: {
    label: "Selected date range",
    totalOrderItems: 71615,
    unitsOrdered: 88484,
    orderedProductSales: 2912918.77,
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
      asin: "B0CBSOUR01",
      title: "Sour Patch Kids Soft & Chewy Candy Bulk Bag",
      imageUrl: "/products/chokebody-sour-patch-kids.png",
      category: "declining_sales",
      metricLabel: "$478.35 decline in OPS",
      deltaAmount: -478.35,
    },
    {
      asin: "B0CBKIND02",
      title: "KIND Nut Bars Dark Chocolate Nuts & Sea Salt (12 Count)",
      imageUrl: "/products/chokebody-kind-nut-bars.png",
      category: "declining_sales",
      metricLabel: "$315.80 decline in OPS",
      deltaAmount: -315.8,
    },
    {
      asin: "B0CBCOCO03",
      title: "Coconut Oil Cooking Spray",
      imageUrl: "/products/chokebody-coconut-oil-spray.png",
      category: "declining_sales",
      metricLabel: "$217.40 decline in OPS",
      deltaAmount: -217.4,
    },
    {
      asin: "B0CBFOAM04",
      title: "High Density Foam Roller 18 Inch",
      imageUrl: "/products/chokebody-density-foam-roller.png",
      category: "declining_sales",
      metricLabel: "$164.90 decline in OPS",
      deltaAmount: -164.9,
    },
    {
      asin: "B0CBSWED05",
      title: "Swedish Fish Soft Candy 3.5 lb Bulk",
      imageUrl: "/products/chokebody-swedish-fish-bag.png",
      category: "increasing_sales",
      metricLabel: "$401.25 increase in OPS",
      deltaAmount: 401.25,
    },
  ],
  ads: { spend: 42850, roas: 3.42, acos: 18.2 },
  conversion: { rate: 12.4, sessions: 284500 },
};

export const amazonChokebodyBundle = buildAmazonBundle(amazonChokebodyDataConfig);
