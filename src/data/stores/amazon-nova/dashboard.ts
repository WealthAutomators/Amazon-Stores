import { buildAmazonBundle } from "@/data/stores/build-amazon-bundle";
import type { AmazonStoreDataConfig } from "@/types/store-data";

export const amazonNovaDataConfig: AmazonStoreDataConfig = {
  timeSeriesSeed: 207,
  timeSeriesMultiplier: 0.62,
  timeSeriesProfile: "midmarket-spike-decline",
  seriesStart: "2024-08-14",
  seriesEnd: "2026-11-24",
  defaultAggregate: {
    label: "Selected date range",
    totalOrderItems: 47562,
    unitsOrdered: 55769,
    orderedProductSales: 1207942.09,
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
      asin: "B0KRMPCL01",
      title: "Aozora Soft Grip Mechanical Pencils 0.7mm 12-Pack",
      imageUrl: "/products/kursat-aozora-mechanical-pencils.png",
      category: "below_market_average",
      metricLabel:
        "Last week sales were $26.35 below the market average for similar ASINs",
      deltaAmount: -26.35,
    },
    {
      asin: "B0KRCSTI02",
      title: "Pre-Seasoned Cast Iron Skillet 10-Inch with Wooden Handle",
      imageUrl: "/products/kursat-cast-iron-10inch.png",
      category: "top_sales_products",
      metricLabel: "$2,512.70 in ordered product sales last week",
      deltaAmount: 2512.7,
    },
    {
      asin: "B0KRSKTL03",
      title: "Brushed Stainless Steel Electric Kettle 1.7L",
      imageUrl: "/products/kursat-steel-electric-kettle.png",
      category: "declining_sales",
      metricLabel: "$118.20 decline in ordered product sales",
      deltaAmount: -118.2,
    },
    {
      asin: "B0KRMPRP04",
      title: "Glass Meal Prep Containers with Snap Lids Set of 6",
      imageUrl: "/products/kursat-meal-prep-containers.png",
      category: "increasing_sales",
      metricLabel: "$1,104.35 increase in ordered product sales",
      deltaAmount: 1104.35,
    },
    {
      asin: "B0KRWBSK05",
      title: "Under-Shelf Wire Storage Baskets Set of 2 Silver",
      imageUrl: "/products/kursat-wire-basket.png",
      category: "declining_traffic",
      metricLabel: "3% decline in page views",
      deltaAmount: -3,
    },
    {
      asin: "B0KRGNLP06",
      title: "Flexible Gooseneck LED Desk Lamp Matte Black",
      imageUrl: "/products/kursat-matte-desk-lamp.png",
      category: "increasing_traffic",
      metricLabel: "19% increase in page views",
      deltaAmount: 19,
    },
  ],
  ads: { spend: 28400, roas: 3.8, acos: 16.5 },
  conversion: { rate: 11.8, sessions: 312000 },
};

export const amazonNovaBundle = buildAmazonBundle(amazonNovaDataConfig);
