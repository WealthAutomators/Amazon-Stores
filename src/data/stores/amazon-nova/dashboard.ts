import { buildAmazonBundle } from "@/data/stores/build-amazon-bundle";
import type { AmazonStoreDataConfig } from "@/types/store-data";

export const amazonNovaDataConfig: AmazonStoreDataConfig = {
  timeSeriesSeed: 207,
  timeSeriesMultiplier: 0.62,
  timeSeriesProfile: "midmarket-spike-decline",
  seriesStart: "2024-08-14",
  seriesEnd: "2026-09-15",
  defaultAggregate: {
    label: "Selected date range",
    totalOrderItems: 33616,
    unitsOrdered: 39415,
    orderedProductSales: 847790.59,
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
      imageUrl: "/products/kursat-aozora-gel-pens-soft.png",
      category: "below_market_average",
      metricLabel:
        "Last week sales were $43.60 below the market average for similar ASINs",
      deltaAmount: -43.6,
    },
    {
      asin: "B0KRCAST02",
      title: "Cast Iron Skillet 10-Inch Pre-Seasoned",
      imageUrl: "/products/kursat-cast-iron-10inch.png",
      category: "top_sales_products",
      metricLabel: "$1,421.30 in ordered product sales last week",
      deltaAmount: 1421.3,
    },
    {
      asin: "B0KRBLND03",
      title: "Immersion Stick Blender Hand Mixer",
      imageUrl: "/products/kursat-stick-blender.png",
      category: "declining_sales",
      metricLabel: "$248.70 decline in ordered product sales",
      deltaAmount: -248.7,
    },
    {
      asin: "B0KRVAC04",
      title: "Vacuum Storage Bags for Clothes 6-Pack",
      imageUrl: "/products/kursat-vacuum-clothes-bags.png",
      category: "increasing_sales",
      metricLabel: "$592.40 increase in ordered product sales",
      deltaAmount: 592.4,
    },
    {
      asin: "B0KRCROC05",
      title: "Bamboo Kitchen Utensil Crock",
      imageUrl: "/products/kursat-bamboo-crock.png",
      category: "declining_traffic",
      metricLabel: "9% decline in page views",
      deltaAmount: -9,
    },
    {
      asin: "B0KRCHG06",
      title: "Wireless Charging Pad Matte Black",
      imageUrl: "/products/kursat-wireless-charger-pad.png",
      category: "increasing_traffic",
      metricLabel: "12% increase in page views",
      deltaAmount: 12,
    },
  ],
  ads: { spend: 28400, roas: 3.8, acos: 16.5 },
  conversion: { rate: 11.8, sessions: 312000 },
};

export const amazonNovaBundle = buildAmazonBundle(amazonNovaDataConfig);
