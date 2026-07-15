import { buildAmazonBundle } from "@/data/stores/build-amazon-bundle";
import type { AmazonStoreDataConfig } from "@/types/store-data";

export const amazonChokebodyDataConfig: AmazonStoreDataConfig = {
  timeSeriesSeed: 42,
  timeSeriesMultiplier: 1,
  timeSeriesProfile: "midmarket-growth",
  seriesStart: "2024-05-16",
  seriesEnd: "2026-07-15",
  defaultAggregate: {
    label: "Selected date range",
    totalOrderItems: 50510,
    unitsOrdered: 62406,
    orderedProductSales: 2054490.09,
    avgUnitsPerOrderItem: 1.24,
    avgSalesPerOrderItem: 40.68,
  },
  insights: {
    id: "chokebody-insights",
    paragraphs: [
      "In April 2026, your ordered product sales reached $93.5K with strong momentum across the catalog. Average selling price held near $40.68 per order item, while units ordered totaled 3,334 for the month with an average price around $28.",
      "Year-over-year ordered product sales grew approximately +2,044% compared to the prior period. Page views reached 1.34M, supporting continued visibility for top ASINs in the performance carousel.",
      "Review ASINs with declining OPS in the performance carousel before Q3 inventory planning—several gum and confection SKUs show measurable week-over-week softness.",
    ],
  },
  asinAlerts: [
    {
      asin: "B0CBGOLD01",
      title: "Haribo Goldbears Gummy Candy 5 lb Bulk Bag",
      imageUrl: "/products/chokebody-haribo-goldbears.png",
      category: "declining_sales",
      metricLabel: "$573.45 decline in OPS",
      deltaAmount: -573.45,
    },
    {
      asin: "B0CBGRAN02",
      title: "Nature Valley Crunchy Granola Bars Variety Pack (48 Count)",
      imageUrl: "/products/chokebody-nature-valley.png",
      category: "declining_sales",
      metricLabel: "$412.20 decline in OPS",
      deltaAmount: -412.2,
    },
    {
      asin: "B0CBCOCO03",
      title: "Spectrum Culinary Organic Coconut Oil Spray",
      imageUrl: "/products/chokebody-coconut-oil-spray.png",
      category: "declining_sales",
      metricLabel: "$298.15 decline in OPS",
      deltaAmount: -298.15,
    },
    {
      asin: "B0CBANKL04",
      title: "Adjustable Ankle Weights Pair 5 lb",
      imageUrl: "/products/chokebody-ankle-weights.png",
      category: "declining_sales",
      metricLabel: "$245.10 decline in OPS",
      deltaAmount: -245.1,
    },
    {
      asin: "B0CBSWED05",
      title: "Swedish Fish Soft & Chewy Candy 3.5 lb Bulk",
      imageUrl: "/products/chokebody-swedish-fish.png",
      category: "increasing_sales",
      metricLabel: "$245.80 increase in OPS",
      deltaAmount: 245.8,
    },
  ],
  ads: { spend: 42850, roas: 3.42, acos: 18.2 },
  conversion: { rate: 12.4, sessions: 284500 },
};

export const amazonChokebodyBundle = buildAmazonBundle(amazonChokebodyDataConfig);
