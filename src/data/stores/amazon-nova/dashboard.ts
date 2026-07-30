import { buildAmazonBundle } from "@/data/stores/build-amazon-bundle";
import type { AmazonStoreDataConfig } from "@/types/store-data";

export const amazonNovaDataConfig: AmazonStoreDataConfig = {
  timeSeriesSeed: 207,
  timeSeriesMultiplier: 0.62,
  timeSeriesProfile: "midmarket-spike-decline",
  seriesStart: "2024-08-14",
  seriesEnd: "2026-07-30",
  defaultAggregate: {
    label: "Selected date range",
    totalOrderItems: 26592,
    unitsOrdered: 31180,
    orderedProductSales: 670631.1,
    avgUnitsPerOrderItem: 1.17,
    avgSalesPerOrderItem: 25.22,
  },
  insights: {
    id: "kursat-insights",
    paragraphs: [
      "In April 2026, your ordered product sales reached $326, down approximately 97% year over year. Units ordered totaled 24 for the month—a near-complete collapse compared to the prior year.",
      "For the selected date range, ordered product sales totaled $487,735.84 on 22,686 units with an average of $25.21 per order item. Performance peaked in mid-2025 before declining sharply starting in late 2025.",
      "Review Products Below Market Average in the ASIN carousel—the Aozora mechanical pencils SKU shows a measurable gap versus similar listings in your category.",
    ],
  },
  asinAlerts: [
    {
      asin: "B0KRPENC01",
      title: "Aozora Mechanical Pencils 0.7mm Soft Grip 12-Pack",
      imageUrl: "/products/kursat-aozora-mechanical-pencils.png",
      category: "below_market_average",
      metricLabel:
        "Last week sales were $37.85 below the market average for similar ASINs",
      deltaAmount: -37.85,
    },
    {
      asin: "B0KRCAST02",
      title: "Cast Iron Skillet 10-Inch Pre-Seasoned",
      imageUrl: "/products/kursat-cast-iron-skillet.png",
      category: "top_sales_products",
      metricLabel: "$1,124.50 in ordered product sales last week",
      deltaAmount: 1124.5,
    },
    {
      asin: "B0KRBLND03",
      title: "Immersion Blender Stick Hand Blender",
      imageUrl: "/products/kursat-immersion-blender.png",
      category: "declining_sales",
      metricLabel: "$334.20 decline in ordered product sales",
      deltaAmount: -334.2,
    },
    {
      asin: "B0KRVAC04",
      title: "Vacuum Storage Bags for Clothes 6-Pack",
      imageUrl: "/products/kursat-vacuum-storage-bags.png",
      category: "increasing_sales",
      metricLabel: "$456.80 increase in ordered product sales",
      deltaAmount: 456.8,
    },
    {
      asin: "B0KRCROC05",
      title: "Bamboo Kitchen Utensil Crock",
      imageUrl: "/products/kursat-utensil-crock.png",
      category: "declining_traffic",
      metricLabel: "14% decline in page views",
      deltaAmount: -14,
    },
    {
      asin: "B0KRCHG06",
      title: "Wireless Charging Pad for Phone",
      imageUrl: "/products/kursat-wireless-charger.png",
      category: "increasing_traffic",
      metricLabel: "9% increase in page views",
      deltaAmount: 9,
    },
  ],
  ads: { spend: 28400, roas: 3.8, acos: 16.5 },
  conversion: { rate: 11.8, sessions: 312000 },
};

export const amazonNovaBundle = buildAmazonBundle(amazonNovaDataConfig);
