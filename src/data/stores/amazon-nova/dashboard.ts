import { buildAmazonBundle } from "@/data/stores/build-amazon-bundle";
import type { AmazonStoreDataConfig } from "@/types/store-data";

export const amazonNovaDataConfig: AmazonStoreDataConfig = {
  timeSeriesSeed: 207,
  timeSeriesMultiplier: 0.62,
  timeSeriesProfile: "midmarket-spike-decline",
  seriesStart: "2024-08-14",
  seriesEnd: "2026-09-08",
  defaultAggregate: {
    label: "Selected date range",
    totalOrderItems: 32463,
    unitsOrdered: 38063,
    orderedProductSales: 818702.58,
    avgUnitsPerOrderItem: 1.17,
    avgSalesPerOrderItem: 25.22,
  },
  insights: {
    id: "kursat-insights",
    paragraphs: [
      "In April 2026, your ordered product sales reached $326, down approximately 97% year over year. Units ordered totaled 24 for the month—a near-complete collapse compared to the prior year.",
      "For the selected date range, ordered product sales totaled $487,735.84 on 22,686 units with an average of $25.21 per order item. Performance peaked in mid-2025 before declining sharply starting in late 2025.",
      "Review Products Below Market Average in the ASIN carousel—the Aozora pastel highlighters SKU shows a measurable gap versus similar listings in your category.",
    ],
  },
  asinAlerts: [
    {
      asin: "B0KRHIGH01",
      title: "Aozora Pastel Highlighter Pens Soft Grip 8-Pack",
      imageUrl: "/products/kursat-aozora-highlighters-pastel.png",
      category: "below_market_average",
      metricLabel:
        "Last week sales were $40.15 below the market average for similar ASINs",
      deltaAmount: -40.15,
    },
    {
      asin: "B0KRDTCH02",
      title: "Cast Iron Dutch Oven with Lid 5-Quart",
      imageUrl: "/products/kursat-dutch-oven-cast.png",
      category: "top_sales_products",
      metricLabel: "$1,368.50 in ordered product sales last week",
      deltaAmount: 1368.5,
    },
    {
      asin: "B0KRBOWL03",
      title: "Stainless Steel Mixing Bowls Nested Set of 5",
      imageUrl: "/products/kursat-mixing-bowls-steel.png",
      category: "declining_sales",
      metricLabel: "$261.80 decline in ordered product sales",
      deltaAmount: -261.8,
    },
    {
      asin: "B0KRSILI04",
      title: "Reusable Silicone Food Storage Bags 6-Pack",
      imageUrl: "/products/kursat-silicone-food-bags-set.png",
      category: "increasing_sales",
      metricLabel: "$568.90 increase in ordered product sales",
      deltaAmount: 568.9,
    },
    {
      asin: "B0KRHOOK05",
      title: "Bamboo Over-the-Door Hook Rack",
      imageUrl: "/products/kursat-bamboo-door-hooks.png",
      category: "declining_traffic",
      metricLabel: "12% decline in page views",
      deltaAmount: -12,
    },
    {
      asin: "B0KRMIRR06",
      title: "LED Vanity Makeup Mirror with Lights",
      imageUrl: "/products/kursat-led-vanity-mirror.png",
      category: "increasing_traffic",
      metricLabel: "10% increase in page views",
      deltaAmount: 10,
    },
  ],
  ads: { spend: 28400, roas: 3.8, acos: 16.5 },
  conversion: { rate: 11.8, sessions: 312000 },
};

export const amazonNovaBundle = buildAmazonBundle(amazonNovaDataConfig);
