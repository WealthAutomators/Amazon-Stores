import { buildAmazonBundle } from "@/data/stores/build-amazon-bundle";
import type { AmazonStoreDataConfig } from "@/types/store-data";

export const amazonChokebodyDataConfig: AmazonStoreDataConfig = {
  timeSeriesSeed: 42,
  timeSeriesMultiplier: 1,
  timeSeriesProfile: "midmarket-growth",
  seriesStart: "2024-05-16",
  seriesEnd: "2026-10-06",
  defaultAggregate: {
    label: "Selected date range",
    totalOrderItems: 76413,
    unitsOrdered: 94412,
    orderedProductSales: 3108044.14,
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
      asin: "B0CBSTBO01",
      title: "Starburst Original Fruit Chews Share Pack",
      imageUrl: "/products/chokebody-starburst-original.jpg",
      category: "declining_sales",
      metricLabel: "$471.20 decline in OPS",
      deltaAmount: -471.2,
    },
    {
      asin: "B0CBCLPB02",
      title: "CLIF BAR Crunchy Peanut Butter Energy Bars (12 Count)",
      imageUrl: "/products/chokebody-clif-peanut-butter.jpg",
      category: "declining_sales",
      metricLabel: "$322.45 decline in OPS",
      deltaAmount: -322.45,
    },
    {
      asin: "B0CBEVOO03",
      title: "Extra Virgin Olive Oil Cooking Spray",
      imageUrl: "/products/chokebody-evoo-cooking-spray.jpg",
      category: "declining_sales",
      metricLabel: "$213.60 decline in OPS",
      deltaAmount: -213.6,
    },
    {
      asin: "B0CBJRBB04",
      title: "Ball-Bearing Speed Jump Rope with Aluminum Handles",
      imageUrl: "/products/chokebody-bearing-jump-rope.jpg",
      category: "declining_sales",
      metricLabel: "$161.75 decline in OPS",
      deltaAmount: -161.75,
    },
    {
      asin: "B0CBTWST05",
      title: "Twizzlers Strawberry Twists 5 lb Bulk Bag",
      imageUrl: "/products/chokebody-twizzlers-strawberry.jpg",
      category: "increasing_sales",
      metricLabel: "$409.35 increase in OPS",
      deltaAmount: 409.35,
    },
  ],
  ads: { spend: 42850, roas: 3.42, acos: 18.2 },
  conversion: { rate: 12.4, sessions: 284500 },
};

export const amazonChokebodyBundle = buildAmazonBundle(amazonChokebodyDataConfig);
