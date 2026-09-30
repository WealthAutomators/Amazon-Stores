import { buildAmazonBundle } from "@/data/stores/build-amazon-bundle";
import type { AmazonStoreDataConfig } from "@/types/store-data";

export const amazonChokebodyDataConfig: AmazonStoreDataConfig = {
  timeSeriesSeed: 42,
  timeSeriesMultiplier: 1,
  timeSeriesProfile: "midmarket-growth",
  seriesStart: "2024-05-16",
  seriesEnd: "2026-09-30",
  defaultAggregate: {
    label: "Selected date range",
    totalOrderItems: 74160,
    unitsOrdered: 91628,
    orderedProductSales: 3016413.02,
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
      asin: "B0CBSKSR01",
      title: "Skittles Sour Chewy Candy Share Size Bag",
      imageUrl: "/products/chokebody-skittles-sour.png",
      category: "declining_sales",
      metricLabel: "$462.70 decline in OPS",
      deltaAmount: -462.7,
    },
    {
      asin: "B0CBRXCH02",
      title: "RXBAR Protein Bars Chocolate Sea Salt (12 Count)",
      imageUrl: "/products/chokebody-rxbar-chocolate.png",
      category: "declining_sales",
      metricLabel: "$328.15 decline in OPS",
      deltaAmount: -328.15,
    },
    {
      asin: "B0CBAVMS03",
      title: "Avocado Oil Cooking Spray 2-Pack",
      imageUrl: "/products/chokebody-avocado-oil-mist.png",
      category: "declining_sales",
      metricLabel: "$209.85 decline in OPS",
      deltaAmount: -209.85,
    },
    {
      asin: "B0CBLOOP04",
      title: "Fabric Resistance Loop Bands Set of 5",
      imageUrl: "/products/chokebody-resistance-loop-bands.png",
      category: "declining_sales",
      metricLabel: "$158.40 decline in OPS",
      deltaAmount: -158.4,
    },
    {
      asin: "B0CBMIKE05",
      title: "Mike and Ike Original Fruits Chewy Candy Bulk Box",
      imageUrl: "/products/chokebody-mike-ike-original.png",
      category: "increasing_sales",
      metricLabel: "$418.90 increase in OPS",
      deltaAmount: 418.9,
    },
  ],
  ads: { spend: 42850, roas: 3.42, acos: 18.2 },
  conversion: { rate: 12.4, sessions: 284500 },
};

export const amazonChokebodyBundle = buildAmazonBundle(amazonChokebodyDataConfig);
