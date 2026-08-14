import { buildAmazonBundle } from "@/data/stores/build-amazon-bundle";
import type { AmazonStoreDataConfig } from "@/types/store-data";

export const amazonNovaDataConfig: AmazonStoreDataConfig = {
  timeSeriesSeed: 207,
  timeSeriesMultiplier: 0.62,
  timeSeriesProfile: "midmarket-spike-decline",
  seriesStart: "2024-08-14",
  seriesEnd: "2026-08-14",
  defaultAggregate: {
    label: "Selected date range",
    totalOrderItems: 28658,
    unitsOrdered: 33602,
    orderedProductSales: 722727.56,
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
      imageUrl: "/products/kursat-aozora-pastel-highlighters.png",
      category: "below_market_average",
      metricLabel:
        "Last week sales were $39.55 below the market average for similar ASINs",
      deltaAmount: -39.55,
    },
    {
      asin: "B0KRDTCH02",
      title: "Cast Iron Dutch Oven with Lid 5-Quart",
      imageUrl: "/products/kursat-dutch-oven.png",
      category: "top_sales_products",
      metricLabel: "$1,248.90 in ordered product sales last week",
      deltaAmount: 1248.9,
    },
    {
      asin: "B0KRBOWL03",
      title: "Stainless Steel Mixing Bowls Nested Set of 5",
      imageUrl: "/products/kursat-steel-mixing-bowls.png",
      category: "declining_sales",
      metricLabel: "$302.40 decline in ordered product sales",
      deltaAmount: -302.4,
    },
    {
      asin: "B0KRSILI04",
      title: "Reusable Silicone Food Storage Bags 6-Pack",
      imageUrl: "/products/kursat-silicone-bags.png",
      category: "increasing_sales",
      metricLabel: "$498.75 increase in ordered product sales",
      deltaAmount: 498.75,
    },
    {
      asin: "B0KRHOOK05",
      title: "Bamboo Over-the-Door Hook Rack",
      imageUrl: "/products/kursat-door-hooks.png",
      category: "declining_traffic",
      metricLabel: "11% decline in page views",
      deltaAmount: -11,
    },
    {
      asin: "B0KRMIRR06",
      title: "LED Vanity Makeup Mirror with Lights",
      imageUrl: "/products/kursat-vanity-mirror.png",
      category: "increasing_traffic",
      metricLabel: "8% increase in page views",
      deltaAmount: 8,
    },
  ],
  ads: { spend: 28400, roas: 3.8, acos: 16.5 },
  conversion: { rate: 11.8, sessions: 312000 },
};

export const amazonNovaBundle = buildAmazonBundle(amazonNovaDataConfig);
