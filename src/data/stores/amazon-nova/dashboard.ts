import { buildAmazonBundle } from "@/data/stores/build-amazon-bundle";
import type { AmazonStoreDataConfig } from "@/types/store-data";

export const amazonNovaDataConfig: AmazonStoreDataConfig = {
  timeSeriesSeed: 207,
  timeSeriesMultiplier: 0.62,
  timeSeriesProfile: "midmarket-spike-decline",
  seriesStart: "2024-08-14",
  seriesEnd: "2026-11-20",
  defaultAggregate: {
    label: "Selected date range",
    totalOrderItems: 46642,
    unitsOrdered: 54689,
    orderedProductSales: 1179631.89,
    avgUnitsPerOrderItem: 1.17,
    avgSalesPerOrderItem: 25.22,
  },
  insights: {
    id: "kursat-insights",
    paragraphs: [
      "In April 2026, your ordered product sales reached $326, down approximately 97% year over year. Units ordered totaled 24 for the month—a near-complete collapse compared to the prior year.",
      "For the selected date range, ordered product sales totaled $487,735.84 on 22,686 units with an average of $25.21 per order item. Performance peaked in mid-2025 before declining sharply starting in late 2025.",
      "Review Products Below Market Average in the ASIN carousel—the Aozora highlighters SKU shows a measurable gap versus similar listings in your category.",
    ],
  },
  asinAlerts: [
    {
      asin: "B0KRHLTR01",
      title: "Aozora Chisel Tip Highlighter Pens 8-Color Set",
      imageUrl: "/products/kursat-aozora-highlighters.png",
      category: "below_market_average",
      metricLabel:
        "Last week sales were $29.80 below the market average for similar ASINs",
      deltaAmount: -29.8,
    },
    {
      asin: "B0KRDTCH02",
      title: "Enameled Cast Iron Dutch Oven with Lid Matte Black",
      imageUrl: "/products/kursat-dutch-oven.png",
      category: "top_sales_products",
      metricLabel: "$2,268.40 in ordered product sales last week",
      deltaAmount: 2268.4,
    },
    {
      asin: "B0KRBLND03",
      title: "Stainless Steel Immersion Hand Blender",
      imageUrl: "/products/kursat-immersion-blender.png",
      category: "declining_sales",
      metricLabel: "$136.75 decline in ordered product sales",
      deltaAmount: -136.75,
    },
    {
      asin: "B0KRSLBG04",
      title: "Reusable Silicone Food Storage Bags Set of 6",
      imageUrl: "/products/kursat-silicone-food-bags-set.png",
      category: "increasing_sales",
      metricLabel: "$985.60 increase in ordered product sales",
      deltaAmount: 985.6,
    },
    {
      asin: "B0KRHMPR05",
      title: "Mesh Laundry Hamper with Handles Gray",
      imageUrl: "/products/kursat-laundry-hamper.png",
      category: "declining_traffic",
      metricLabel: "4% decline in page views",
      deltaAmount: -4,
    },
    {
      asin: "B0KRLAMP06",
      title: "Dimmable LED Desk Lamp with 3 Color Modes Black",
      imageUrl: "/products/kursat-led-desk-lamp.png",
      category: "increasing_traffic",
      metricLabel: "17% increase in page views",
      deltaAmount: 17,
    },
  ],
  ads: { spend: 28400, roas: 3.8, acos: 16.5 },
  conversion: { rate: 11.8, sessions: 312000 },
};

export const amazonNovaBundle = buildAmazonBundle(amazonNovaDataConfig);
