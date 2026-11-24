import { buildAmazonBundle } from "@/data/stores/build-amazon-bundle";
import type { AmazonStoreDataConfig } from "@/types/store-data";

export const amazonChokebodyDataConfig: AmazonStoreDataConfig = {
  timeSeriesSeed: 42,
  timeSeriesMultiplier: 1,
  timeSeriesProfile: "midmarket-growth",
  seriesStart: "2024-05-16",
  seriesEnd: "2026-11-25",
  defaultAggregate: {
    label: "Selected date range",
    totalOrderItems: 96752,
    unitsOrdered: 119542,
    orderedProductSales: 3923950.58,
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
      title: "Mike and Ike Original Fruits Chewy Candy 5 lb Bulk",
      imageUrl: "/products/chokebody-mike-ike-bulk.png",
      category: "declining_sales",
      metricLabel: "$551.20 decline in OPS",
      deltaAmount: -551.2,
    },
    {
      asin: "B0CBNVCO02",
      title: "Nature Valley Crunchy Oats & Honey Granola Bars (12 Count)",
      imageUrl: "/products/chokebody-nature-valley-box.png",
      category: "declining_sales",
      metricLabel: "$389.75 decline in OPS",
      deltaAmount: -389.75,
    },
    {
      asin: "B0CBCOCS03",
      title: "Coconut Oil Cooking Spray",
      imageUrl: "/products/chokebody-coconut-oil-spray.png",
      category: "declining_sales",
      metricLabel: "$242.10 decline in OPS",
      deltaAmount: -242.1,
    },
    {
      asin: "B0CBBKAW04",
      title: "Adjustable Ankle Weights Black Pair",
      imageUrl: "/products/chokebody-ankle-weights-black.png",
      category: "declining_sales",
      metricLabel: "$186.40 decline in OPS",
      deltaAmount: -186.4,
    },
    {
      asin: "B0CBHGBB05",
      title: "HARIBO Goldbears Gummi Candy Bulk Bag",
      imageUrl: "/products/chokebody-haribo-goldbears-bulk.png",
      category: "increasing_sales",
      metricLabel: "$409.80 increase in OPS",
      deltaAmount: 409.8,
    },
  ],
  ads: { spend: 42850, roas: 3.42, acos: 18.2 },
  conversion: { rate: 12.4, sessions: 284500 },
};

export const amazonChokebodyBundle = buildAmazonBundle(amazonChokebodyDataConfig);
