import { buildAmazonBundle } from "@/data/stores/build-amazon-bundle";
import type { AmazonStoreDataConfig } from "@/types/store-data";

export const amazonChokebodyDataConfig: AmazonStoreDataConfig = {
  timeSeriesSeed: 42,
  timeSeriesMultiplier: 1,
  timeSeriesProfile: "midmarket-growth",
  seriesStart: "2024-05-16",
  seriesEnd: "2026-10-27",
  defaultAggregate: {
    label: "Selected date range",
    totalOrderItems: 84851,
    unitsOrdered: 104836,
    orderedProductSales: 3451234.54,
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
      asin: "B0CBSPWM01",
      title: "Sour Patch Kids Watermelon Soft & Chewy Candy",
      imageUrl: "/products/chokebody-sour-patch-watermelon.jpg",
      category: "declining_sales",
      metricLabel: "$473.40 decline in OPS",
      deltaAmount: -473.4,
    },
    {
      asin: "B0CBKPBD02",
      title: "KIND Peanut Butter Dark Chocolate Bars (12 Count)",
      imageUrl: "/products/chokebody-kind-pb-dark-choc.jpg",
      category: "declining_sales",
      metricLabel: "$325.15 decline in OPS",
      deltaAmount: -325.15,
    },
    {
      asin: "B0CBBTRS03",
      title: "Butter Flavored Cooking Spray",
      imageUrl: "/products/chokebody-butter-cooking-spray.jpg",
      category: "declining_sales",
      metricLabel: "$211.70 decline in OPS",
      deltaAmount: -211.7,
    },
    {
      asin: "B0CBPUBD04",
      title: "Pull-Up Assistance Resistance Bands Set of 3",
      imageUrl: "/products/chokebody-pullup-bands.jpg",
      category: "declining_sales",
      metricLabel: "$163.55 decline in OPS",
      deltaAmount: -163.55,
    },
    {
      asin: "B0CBDOTS05",
      title: "Dots Gumdrops Assorted Fruit Candy 5 lb Bulk",
      imageUrl: "/products/chokebody-dots-gumdrops.jpg",
      category: "increasing_sales",
      metricLabel: "$421.80 increase in OPS",
      deltaAmount: 421.8,
    },
  ],
  ads: { spend: 42850, roas: 3.42, acos: 18.2 },
  conversion: { rate: 12.4, sessions: 284500 },
};

export const amazonChokebodyBundle = buildAmazonBundle(amazonChokebodyDataConfig);
