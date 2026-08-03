import { buildAmazonBundle } from "@/data/stores/build-amazon-bundle";
import type { AmazonStoreDataConfig } from "@/types/store-data";

export const amazonNovaDataConfig: AmazonStoreDataConfig = {
  timeSeriesSeed: 207,
  timeSeriesMultiplier: 0.62,
  timeSeriesProfile: "midmarket-spike-decline",
  seriesStart: "2024-08-14",
  seriesEnd: "2026-08-03",
  defaultAggregate: {
    label: "Selected date range",
    totalOrderItems: 27128,
    unitsOrdered: 31808,
    orderedProductSales: 684144.65,
    avgUnitsPerOrderItem: 1.17,
    avgSalesPerOrderItem: 25.22,
  },
  insights: {
    id: "kursat-insights",
    paragraphs: [
      "In April 2026, your ordered product sales reached $326, down approximately 97% year over year. Units ordered totaled 24 for the month—a near-complete collapse compared to the prior year.",
      "For the selected date range, ordered product sales totaled $487,735.84 on 22,686 units with an average of $25.21 per order item. Performance peaked in mid-2025 before declining sharply starting in late 2025.",
      "Review Products Below Market Average in the ASIN carousel—the Aozora rollerball pens SKU shows a measurable gap versus similar listings in your category.",
    ],
  },
  asinAlerts: [
    {
      asin: "B0KRROLL01",
      title: "Aozora Soft Grip Rollerball Pens 12-Pack",
      imageUrl: "/products/kursat-aozora-rollerball-pens.png",
      category: "below_market_average",
      metricLabel:
        "Last week sales were $41.20 below the market average for similar ASINs",
      deltaAmount: -41.2,
    },
    {
      asin: "B0KRFRYP02",
      title: "Ceramic Nonstick Frying Pan 10-Inch",
      imageUrl: "/products/kursat-ceramic-frying-pan.png",
      category: "top_sales_products",
      metricLabel: "$1,186.40 in ordered product sales last week",
      deltaAmount: 1186.4,
    },
    {
      asin: "B0KRKETL03",
      title: "Stainless Steel Electric Kettle 1.7L",
      imageUrl: "/products/kursat-steel-electric-kettle.png",
      category: "declining_sales",
      metricLabel: "$318.75 decline in ordered product sales",
      deltaAmount: -318.75,
    },
    {
      asin: "B0KRMEAL04",
      title: "Glass Meal Prep Containers Set of 5",
      imageUrl: "/products/kursat-meal-prep-containers.png",
      category: "increasing_sales",
      metricLabel: "$482.30 increase in ordered product sales",
      deltaAmount: 482.3,
    },
    {
      asin: "B0KRSPIC05",
      title: "Rotating Spice Rack Carousel with Jars",
      imageUrl: "/products/kursat-spice-carousel.png",
      category: "declining_traffic",
      metricLabel: "12% decline in page views",
      deltaAmount: -12,
    },
    {
      asin: "B0KRLAMP06",
      title: "LED Adjustable Desk Lamp Matte Black",
      imageUrl: "/products/kursat-adjustable-desk-lamp.png",
      category: "increasing_traffic",
      metricLabel: "10% increase in page views",
      deltaAmount: 10,
    },
  ],
  ads: { spend: 28400, roas: 3.8, acos: 16.5 },
  conversion: { rate: 11.8, sessions: 312000 },
};

export const amazonNovaBundle = buildAmazonBundle(amazonNovaDataConfig);
