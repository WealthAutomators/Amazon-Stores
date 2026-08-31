import { buildAmazonBundle } from "@/data/stores/build-amazon-bundle";
import type { AmazonStoreDataConfig } from "@/types/store-data";

export const amazonChokebodyDataConfig: AmazonStoreDataConfig = {
  timeSeriesSeed: 42,
  timeSeriesMultiplier: 1,
  timeSeriesProfile: "midmarket-growth",
  seriesStart: "2024-05-16",
  seriesEnd: "2026-08-31",
  defaultAggregate: {
    label: "Selected date range",
    totalOrderItems: 63854,
    unitsOrdered: 78895,
    orderedProductSales: 2597221.28,
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
      asin: "B0CBMIKE01",
      title: "Mike and Ike Chewy Candy Bulk Bag",
      imageUrl: "/products/chokebody-mike-ike-bulk.png",
      category: "declining_sales",
      metricLabel: "$519.85 decline in OPS",
      deltaAmount: -519.85,
    },
    {
      asin: "B0CBCLIF02",
      title: "CLIF Bar Energy Bars Variety Pack (12 Count)",
      imageUrl: "/products/chokebody-clif-variety.png",
      category: "declining_sales",
      metricLabel: "$358.60 decline in OPS",
      deltaAmount: -358.6,
    },
    {
      asin: "B0CBOLIV03",
      title: "Olive Oil Cooking Spray",
      imageUrl: "/products/chokebody-olive-spray.png",
      category: "declining_sales",
      metricLabel: "$251.30 decline in OPS",
      deltaAmount: -251.3,
    },
    {
      asin: "B0CBANKL04",
      title: "Adjustable Ankle Weights Pair Black",
      imageUrl: "/products/chokebody-ankle-weights-black.png",
      category: "declining_sales",
      metricLabel: "$198.45 decline in OPS",
      deltaAmount: -198.45,
    },
    {
      asin: "B0CBSKIT05",
      title: "Skittles Original Candy 3.5 lb Bulk",
      imageUrl: "/products/chokebody-skittles-bulk.png",
      category: "increasing_sales",
      metricLabel: "$334.20 increase in OPS",
      deltaAmount: 334.2,
    },
  ],
  ads: { spend: 42850, roas: 3.42, acos: 18.2 },
  conversion: { rate: 12.4, sessions: 284500 },
};

export const amazonChokebodyBundle = buildAmazonBundle(amazonChokebodyDataConfig);
