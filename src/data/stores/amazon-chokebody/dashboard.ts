import { buildAmazonBundle } from "@/data/stores/build-amazon-bundle";
import type { AmazonStoreDataConfig } from "@/types/store-data";

export const amazonChokebodyDataConfig: AmazonStoreDataConfig = {
  timeSeriesSeed: 42,
  timeSeriesMultiplier: 1,
  timeSeriesProfile: "midmarket-growth",
  seriesStart: "2024-05-16",
  seriesEnd: "2026-08-05",
  defaultAggregate: {
    label: "Selected date range",
    totalOrderItems: 56089,
    unitsOrdered: 69298,
    orderedProductSales: 2281346.99,
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
      imageUrl: "/products/chokebody-reeses-minis.png",
      category: "declining_sales",
      metricLabel: "$561.30 decline in OPS",
      deltaAmount: -561.3,
    },
    {
      asin: "B0CBRXBR02",
      title: "RXBAR Protein Bars Variety Pack (12 Count)",
      imageUrl: "/products/chokebody-rxbars.png",
      category: "declining_sales",
      metricLabel: "$398.75 decline in OPS",
      deltaAmount: -398.75,
    },
    {
      asin: "B0CBSPRY03",
      title: "Coconut Avocado Oil Cooking Spray",
      imageUrl: "/products/chokebody-cooking-spray.png",
      category: "declining_sales",
      metricLabel: "$287.40 decline in OPS",
      deltaAmount: -287.4,
    },
    {
      asin: "B0CBANKL04",
      title: "Neoprene Ankle Weights Pair Adjustable",
      imageUrl: "/products/chokebody-neoprene-ankle-weights.png",
      category: "declining_sales",
      metricLabel: "$232.90 decline in OPS",
      deltaAmount: -232.9,
    },
    {
      asin: "B0CBSTAR05",
      title: "Starburst Original Fruit Chews 3.5 lb Bulk",
      imageUrl: "/products/chokebody-starburst.png",
      category: "increasing_sales",
      metricLabel: "$268.15 increase in OPS",
      deltaAmount: 268.15,
    },
  ],
  ads: { spend: 42850, roas: 3.42, acos: 18.2 },
  conversion: { rate: 12.4, sessions: 284500 },
};

export const amazonChokebodyBundle = buildAmazonBundle(amazonChokebodyDataConfig);
