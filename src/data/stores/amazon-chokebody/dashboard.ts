import { buildAmazonBundle } from "@/data/stores/build-amazon-bundle";
import type { AmazonStoreDataConfig } from "@/types/store-data";

export const amazonChokebodyDataConfig: AmazonStoreDataConfig = {
  timeSeriesSeed: 42,
  timeSeriesMultiplier: 1,
  timeSeriesProfile: "midmarket-growth",
  seriesStart: "2024-05-16",
  seriesEnd: "2026-11-09",
  defaultAggregate: {
    label: "Selected date range",
    totalOrderItems: 90290,
    unitsOrdered: 111557,
    orderedProductSales: 3649514.91,
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
      asin: "B0CBHRTS01",
      title: "HARIBO Twin Snakes Sour & Sweet Gummi Candy",
      imageUrl: "/products/chokebody-haribo-twin-snakes.jpg",
      category: "declining_sales",
      metricLabel: "$418.65 decline in OPS",
      deltaAmount: -418.65,
    },
    {
      asin: "B0CBNVOH02",
      title: "Nature Valley Crunchy Oats 'n Honey Granola Bars (12 Count)",
      imageUrl: "/products/chokebody-nature-valley-honey.jpg",
      category: "declining_sales",
      metricLabel: "$296.40 decline in OPS",
      deltaAmount: -296.4,
    },
    {
      asin: "B0CBCNLS03",
      title: "Pure Canola Oil No-Stick Cooking Spray",
      imageUrl: "/products/chokebody-canola-cooking-spray.jpg",
      category: "declining_sales",
      metricLabel: "$184.90 decline in OPS",
      deltaAmount: -184.9,
    },
    {
      asin: "B0CBWAWT04",
      title: "Adjustable Wrist & Ankle Weights 5 lb Pair",
      imageUrl: "/products/chokebody-wrist-ankle-weights-5lb.jpg",
      category: "declining_sales",
      metricLabel: "$142.20 decline in OPS",
      deltaAmount: -142.2,
    },
    {
      asin: "B0CBJRHC05",
      title: "Jolly Rancher Original Flavors Hard Candy 5 lb Bulk",
      imageUrl: "/products/chokebody-jolly-rancher-bulk.jpg",
      category: "increasing_sales",
      metricLabel: "$536.75 increase in OPS",
      deltaAmount: 536.75,
    },
  ],
  ads: { spend: 42850, roas: 3.42, acos: 18.2 },
  conversion: { rate: 12.4, sessions: 284500 },
};

export const amazonChokebodyBundle = buildAmazonBundle(amazonChokebodyDataConfig);
