import { buildAmazonBundle } from "@/data/stores/build-amazon-bundle";
import type { AmazonStoreDataConfig } from "@/types/store-data";

export const amazonNovaDataConfig: AmazonStoreDataConfig = {
  timeSeriesSeed: 207,
  timeSeriesMultiplier: 0.62,
  timeSeriesProfile: "midmarket-spike-decline",
  seriesStart: "2024-08-14",
  seriesEnd: "2026-10-28",
  defaultAggregate: {
    label: "Selected date range",
    totalOrderItems: 41658,
    unitsOrdered: 48843,
    orderedProductSales: 1050580.28,
    avgUnitsPerOrderItem: 1.17,
    avgSalesPerOrderItem: 25.22,
  },
  insights: {
    id: "kursat-insights",
    paragraphs: [
      "In April 2026, your ordered product sales reached $326, down approximately 97% year over year. Units ordered totaled 24 for the month—a near-complete collapse compared to the prior year.",
      "For the selected date range, ordered product sales totaled $487,735.84 on 22,686 units with an average of $25.21 per order item. Performance peaked in mid-2025 before declining sharply starting in late 2025.",
      "Review Products Below Market Average in the ASIN carousel—the Aozora dot grid notebooks SKU shows a measurable gap versus similar listings in your category.",
    ],
  },
  asinAlerts: [
    {
      asin: "B0KRDOTN01",
      title: "Aozora A5 Dot Grid Spiral Notebooks 3-Pack Pastel",
      imageUrl: "/products/kursat-aozora-dot-notebooks.jpg",
      category: "below_market_average",
      metricLabel:
        "Last week sales were $43.15 below the market average for similar ASINs",
      deltaAmount: -43.15,
    },
    {
      asin: "B0KRSTCK02",
      title: "Stainless Steel Stock Pot 8-Quart with Glass Lid",
      imageUrl: "/products/kursat-stock-pot-8qt.jpg",
      category: "top_sales_products",
      metricLabel: "$1,503.90 in ordered product sales last week",
      deltaAmount: 1503.9,
    },
    {
      asin: "B0KRGRND03",
      title: "Electric Burr Coffee Grinder Stainless Steel",
      imageUrl: "/products/kursat-burr-coffee-grinder.jpg",
      category: "declining_sales",
      metricLabel: "$232.60 decline in ordered product sales",
      deltaAmount: -232.6,
    },
    {
      asin: "B0KRBOWL04",
      title: "Stackable Glass Food Storage Bowls with Lids Set of 4",
      imageUrl: "/products/kursat-glass-bowls-lids.jpg",
      category: "increasing_sales",
      metricLabel: "$619.40 increase in ordered product sales",
      deltaAmount: 619.4,
    },
    {
      asin: "B0KRBSKT05",
      title: "Woven Seagrass Storage Basket with Handles",
      imageUrl: "/products/kursat-seagrass-basket.jpg",
      category: "declining_traffic",
      metricLabel: "11% decline in page views",
      deltaAmount: -11,
    },
    {
      asin: "B0KRPENH06",
      title: "Ceramic Desk Pen Holder & Catch-All Tray Set",
      imageUrl: "/products/kursat-ceramic-pen-holder.jpg",
      category: "increasing_traffic",
      metricLabel: "8% increase in page views",
      deltaAmount: 8,
    },
  ],
  ads: { spend: 28400, roas: 3.8, acos: 16.5 },
  conversion: { rate: 11.8, sessions: 312000 },
};

export const amazonNovaBundle = buildAmazonBundle(amazonNovaDataConfig);
