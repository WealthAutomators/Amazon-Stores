import { buildAmazonBundle } from "@/data/stores/build-amazon-bundle";
import type { AmazonStoreDataConfig } from "@/types/store-data";

export const amazonChokebodyDataConfig: AmazonStoreDataConfig = {
  timeSeriesSeed: 42,
  timeSeriesMultiplier: 1,
  timeSeriesProfile: "midmarket-growth",
  seriesStart: "2024-05-16",
  seriesEnd: "2026-09-15",
  defaultAggregate: {
    label: "Selected date range",
    totalOrderItems: 68814,
    unitsOrdered: 85023,
    orderedProductSales: 2798980.55,
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
      asin: "B0CBREES01",
      title: "Reese's Peanut Butter Cups Miniatures Bulk Bag",
      imageUrl: "/products/chokebody-reeses-miniatures.png",
      category: "declining_sales",
      metricLabel: "$492.70 decline in OPS",
      deltaAmount: -492.7,
    },
    {
      asin: "B0CBRXBR02",
      title: "RXBAR Protein Bars Variety Pack (12 Count)",
      imageUrl: "/products/chokebody-rxbar-variety.png",
      category: "declining_sales",
      metricLabel: "$329.40 decline in OPS",
      deltaAmount: -329.4,
    },
    {
      asin: "B0CBSPRY03",
      title: "Coconut Avocado Oil Cooking Spray",
      imageUrl: "/products/chokebody-coco-avo-spray.png",
      category: "declining_sales",
      metricLabel: "$228.55 decline in OPS",
      deltaAmount: -228.55,
    },
    {
      asin: "B0CBANKL04",
      title: "Neoprene Ankle Weights Pair Adjustable Teal",
      imageUrl: "/products/chokebody-teal-ankle-weights.png",
      category: "declining_sales",
      metricLabel: "$176.20 decline in OPS",
      deltaAmount: -176.2,
    },
    {
      asin: "B0CBSTAR05",
      title: "Starburst Original Fruit Chews 3.5 lb Bulk",
      imageUrl: "/products/chokebody-starburst-bulk.png",
      category: "increasing_sales",
      metricLabel: "$378.90 increase in OPS",
      deltaAmount: 378.9,
    },
  ],
  ads: { spend: 42850, roas: 3.42, acos: 18.2 },
  conversion: { rate: 12.4, sessions: 284500 },
};

export const amazonChokebodyBundle = buildAmazonBundle(amazonChokebodyDataConfig);
