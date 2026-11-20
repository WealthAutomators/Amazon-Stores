import { buildAmazonBundle } from "@/data/stores/build-amazon-bundle";
import type { AmazonStoreDataConfig } from "@/types/store-data";

export const amazonChokebodyDataConfig: AmazonStoreDataConfig = {
  timeSeriesSeed: 42,
  timeSeriesMultiplier: 1,
  timeSeriesProfile: "midmarket-growth",
  seriesStart: "2024-05-16",
  seriesEnd: "2026-11-21",
  defaultAggregate: {
    label: "Selected date range",
    totalOrderItems: 95154,
    unitsOrdered: 117567,
    orderedProductSales: 3854055.7,
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
      asin: "B0CBSTBK01",
      title: "Starburst Original Fruit Chews Bulk Bag",
      imageUrl: "/products/chokebody-starburst-bulk.png",
      category: "declining_sales",
      metricLabel: "$503.85 decline in OPS",
      deltaAmount: -503.85,
    },
    {
      asin: "B0CBCLIF02",
      title: "CLIF BAR Energy Bars Variety Pack (24 Count)",
      imageUrl: "/products/chokebody-clif-bars.png",
      category: "declining_sales",
      metricLabel: "$356.40 decline in OPS",
      deltaAmount: -356.4,
    },
    {
      asin: "B0CBOLVS03",
      title: "Extra Virgin Olive Oil Cooking Spray",
      imageUrl: "/products/chokebody-olive-oil-spray.png",
      category: "declining_sales",
      metricLabel: "$221.60 decline in OPS",
      deltaAmount: -221.6,
    },
    {
      asin: "B0CBNPAW04",
      title: "Neoprene Wrist & Ankle Weights with Strap Pair",
      imageUrl: "/products/chokebody-neoprene-ankle-weights.png",
      category: "declining_sales",
      metricLabel: "$170.25 decline in OPS",
      deltaAmount: -170.25,
    },
    {
      asin: "B0CBTWZB05",
      title: "Twizzlers Pull 'n' Peel Cherry Candy Bulk Bag",
      imageUrl: "/products/chokebody-twizzlers-bulk.png",
      category: "increasing_sales",
      metricLabel: "$447.35 increase in OPS",
      deltaAmount: 447.35,
    },
  ],
  ads: { spend: 42850, roas: 3.42, acos: 18.2 },
  conversion: { rate: 12.4, sessions: 284500 },
};

export const amazonChokebodyBundle = buildAmazonBundle(amazonChokebodyDataConfig);
