import { buildAmazonBundle } from "@/data/stores/build-amazon-bundle";
import type { AmazonStoreDataConfig } from "@/types/store-data";

export const amazonNovaDataConfig: AmazonStoreDataConfig = {
  timeSeriesSeed: 207,
  timeSeriesMultiplier: 0.62,
  timeSeriesProfile: "midmarket-spike-decline",
  seriesStart: "2024-08-14",
  seriesEnd: "2026-08-24",
  defaultAggregate: {
    label: "Selected date range",
    totalOrderItems: 30123,
    unitsOrdered: 35320,
    orderedProductSales: 759687.94,
    avgUnitsPerOrderItem: 1.17,
    avgSalesPerOrderItem: 25.22,
  },
  insights: {
    id: "kursat-insights",
    paragraphs: [
      "In April 2026, your ordered product sales reached $326, down approximately 97% year over year. Units ordered totaled 24 for the month—a near-complete collapse compared to the prior year.",
      "For the selected date range, ordered product sales totaled $487,735.84 on 22,686 units with an average of $25.21 per order item. Performance peaked in mid-2025 before declining sharply starting in late 2025.",
      "Review Products Below Market Average in the ASIN carousel—the Aozora gel pens SKU shows a measurable gap versus similar listings in your category.",
    ],
  },
  asinAlerts: [
    {
      asin: "B0KRGEL01",
      title: "Aozora Soft Grip Gel Pens Black 12-Pack",
      imageUrl: "/products/kursat-aozora-gel-pens-black.png",
      category: "below_market_average",
      metricLabel:
        "Last week sales were $42.80 below the market average for similar ASINs",
      deltaAmount: -42.8,
    },
    {
      asin: "B0KRCAST02",
      title: "Cast Iron Skillet 12-Inch Pre-Seasoned",
      imageUrl: "/products/kursat-cast-iron-skillet-12.png",
      category: "top_sales_products",
      metricLabel: "$1,295.40 in ordered product sales last week",
      deltaAmount: 1295.4,
    },
    {
      asin: "B0KRBLND03",
      title: "Immersion Blender Stick Hand Blender",
      imageUrl: "/products/kursat-immersion-blender-pro.png",
      category: "declining_sales",
      metricLabel: "$289.60 decline in ordered product sales",
      deltaAmount: -289.6,
    },
    {
      asin: "B0KRVAC04",
      title: "Vacuum Storage Bags for Clothes 8-Pack",
      imageUrl: "/products/kursat-vacuum-bags-set.png",
      category: "increasing_sales",
      metricLabel: "$521.15 increase in ordered product sales",
      deltaAmount: 521.15,
    },
    {
      asin: "B0KRHOLD05",
      title: "Bamboo Kitchen Utensil Holder Crock",
      imageUrl: "/products/kursat-bamboo-utensil-holder.png",
      category: "declining_traffic",
      metricLabel: "13% decline in page views",
      deltaAmount: -13,
    },
    {
      asin: "B0KRCHG06",
      title: "Wireless Charging Pad Matte Black",
      imageUrl: "/products/kursat-wireless-pad.png",
      category: "increasing_traffic",
      metricLabel: "11% increase in page views",
      deltaAmount: 11,
    },
  ],
  ads: { spend: 28400, roas: 3.8, acos: 16.5 },
  conversion: { rate: 11.8, sessions: 312000 },
};

export const amazonNovaBundle = buildAmazonBundle(amazonNovaDataConfig);
