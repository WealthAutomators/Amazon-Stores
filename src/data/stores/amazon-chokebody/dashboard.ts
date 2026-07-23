import { buildAmazonBundle } from "@/data/stores/build-amazon-bundle";
import type { AmazonStoreDataConfig } from "@/types/store-data";

export const amazonChokebodyDataConfig: AmazonStoreDataConfig = {
  timeSeriesSeed: 42,
  timeSeriesMultiplier: 1,
  timeSeriesProfile: "midmarket-growth",
  seriesStart: "2024-05-16",
  seriesEnd: "2026-07-23",
  defaultAggregate: {
    label: "Selected date range",
    totalOrderItems: 52567,
    unitsOrdered: 64947,
    orderedProductSales: 2138122.3,
    avgUnitsPerOrderItem: 1.24,
    avgSalesPerOrderItem: 40.68,
  },
  insights: {
    id: "chokebody-insights",
    paragraphs: [
      "In April 2026, your ordered product sales reached $93.5K with strong momentum across the catalog. Average selling price held near $40.68 per order item, while units ordered totaled 3,334 for the month with an average price around $28.",
      "Year-over-year ordered product sales grew approximately +2,044% compared to the prior period. Page views reached 1.34M, supporting continued visibility for top ASINs in the performance carousel.",
      "Review ASINs with declining OPS in the performance carousel before Q3 inventory planning—several confection and snack SKUs show measurable week-over-week softness.",
    ],
  },
  asinAlerts: [
    {
      asin: "B0CBTWIZ01",
      title: "Twizzlers Pull-n-Peel Candy Bulk Bag",
      imageUrl: "/products/chokebody-twizzlers.png",
      category: "declining_sales",
      metricLabel: "$573.45 decline in OPS",
      deltaAmount: -573.45,
    },
    {
      asin: "B0CBKIND02",
      title: "KIND Nut Bars Variety Pack (12 Count)",
      imageUrl: "/products/chokebody-kind-bars.png",
      category: "declining_sales",
      metricLabel: "$412.20 decline in OPS",
      deltaAmount: -412.2,
    },
    {
      asin: "B0CBAVOC03",
      title: "Primal Kitchen Avocado Oil Spray",
      imageUrl: "/products/chokebody-primal-avocado-spray.png",
      category: "declining_sales",
      metricLabel: "$298.15 decline in OPS",
      deltaAmount: -298.15,
    },
    {
      asin: "B0CBBAND04",
      title: "Resistance Loop Bands Set 5 Levels",
      imageUrl: "/products/chokebody-resistance-bands.png",
      category: "declining_sales",
      metricLabel: "$245.10 decline in OPS",
      deltaAmount: -245.1,
    },
    {
      asin: "B0CBSOUR05",
      title: "Sour Patch Kids Soft & Chewy Candy 3.5 lb Bulk",
      imageUrl: "/products/chokebody-sour-patch.png",
      category: "increasing_sales",
      metricLabel: "$245.80 increase in OPS",
      deltaAmount: 245.8,
    },
  ],
  ads: { spend: 42850, roas: 3.42, acos: 18.2 },
  conversion: { rate: 12.4, sessions: 284500 },
};

export const amazonChokebodyBundle = buildAmazonBundle(amazonChokebodyDataConfig);
