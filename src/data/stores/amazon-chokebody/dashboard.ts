import { buildAmazonBundle } from "@/data/stores/build-amazon-bundle";
import type { AmazonStoreDataConfig } from "@/types/store-data";

export const amazonChokebodyDataConfig: AmazonStoreDataConfig = {
  timeSeriesSeed: 42,
  timeSeriesMultiplier: 1,
  timeSeriesProfile: "midmarket-growth",
  seriesStart: "2024-05-16",
  seriesEnd: "2026-08-26",
  defaultAggregate: {
    label: "Selected date range",
    totalOrderItems: 62282,
    unitsOrdered: 76952,
    orderedProductSales: 2533253.45,
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
      imageUrl: "/products/chokebody-sour-patch-bulk.png",
      category: "declining_sales",
      metricLabel: "$532.40 decline in OPS",
      deltaAmount: -532.4,
    },
    {
      asin: "B0CBKIND02",
      title: "KIND Nut Bars Dark Chocolate Nuts & Sea Salt (12 Count)",
      imageUrl: "/products/chokebody-kind-bars-box.png",
      category: "declining_sales",
      metricLabel: "$371.25 decline in OPS",
      deltaAmount: -371.25,
    },
    {
      asin: "B0CBCOCO03",
      title: "Coconut Oil Cooking Spray",
      imageUrl: "/products/chokebody-coconut-spray.png",
      category: "declining_sales",
      metricLabel: "$264.80 decline in OPS",
      deltaAmount: -264.8,
    },
    {
      asin: "B0CBFOAM04",
      title: "High Density Foam Roller 18 Inch",
      imageUrl: "/products/chokebody-foam-roller-pro.png",
      category: "declining_sales",
      metricLabel: "$209.55 decline in OPS",
      deltaAmount: -209.55,
    },
    {
      asin: "B0CBSWED05",
      title: "Swedish Fish Soft Candy 3.5 lb Bulk",
      imageUrl: "/products/chokebody-swedish-fish-bulk.png",
      category: "increasing_sales",
      metricLabel: "$312.70 increase in OPS",
      deltaAmount: 312.7,
    },
  ],
  ads: { spend: 42850, roas: 3.42, acos: 18.2 },
  conversion: { rate: 12.4, sessions: 284500 },
};

export const amazonChokebodyBundle = buildAmazonBundle(amazonChokebodyDataConfig);
