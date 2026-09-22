import { buildAmazonBundle } from "@/data/stores/build-amazon-bundle";
import type { AmazonStoreDataConfig } from "@/types/store-data";

export const amazonNovaDataConfig: AmazonStoreDataConfig = {
  timeSeriesSeed: 207,
  timeSeriesMultiplier: 0.62,
  timeSeriesProfile: "midmarket-spike-decline",
  seriesStart: "2024-08-14",
  seriesEnd: "2026-09-22",
  defaultAggregate: {
    label: "Selected date range",
    totalOrderItems: 34811,
    unitsOrdered: 40815,
    orderedProductSales: 877912.08,
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
      imageUrl: "/products/kursat-aozora-pencils-07.png",
      category: "below_market_average",
      metricLabel:
        "Last week sales were $41.25 below the market average for similar ASINs",
      deltaAmount: -41.25,
    },
    {
      asin: "B0KRFRYP02",
      title: "Ceramic Nonstick Frying Pan 10-Inch",
      imageUrl: "/products/kursat-ceramic-skillet.png",
      category: "top_sales_products",
      metricLabel: "$1,478.60 in ordered product sales last week",
      deltaAmount: 1478.6,
    },
    {
      asin: "B0KRKETL03",
      title: "Stainless Steel Electric Kettle 1.7L",
      imageUrl: "/products/kursat-kettle-stainless.png",
      category: "declining_sales",
      metricLabel: "$234.50 decline in ordered product sales",
      deltaAmount: -234.5,
    },
    {
      asin: "B0KRMEAL04",
      title: "Glass Meal Prep Containers Set of 5",
      imageUrl: "/products/kursat-glass-containers-set.png",
      category: "increasing_sales",
      metricLabel: "$615.80 increase in ordered product sales",
      deltaAmount: 615.8,
    },
    {
      asin: "B0KRSPIC05",
      title: "Rotating Spice Rack Carousel with Jars",
      imageUrl: "/products/kursat-spice-carousel-rack.png",
      category: "declining_traffic",
      metricLabel: "11% decline in page views",
      deltaAmount: -11,
    },
    {
      asin: "B0KRLAMP06",
      title: "LED Adjustable Desk Lamp Matte Black",
      imageUrl: "/products/kursat-matte-desk-lamp.png",
      category: "increasing_traffic",
      metricLabel: "8% increase in page views",
      deltaAmount: 8,
    },
  ],
  ads: { spend: 28400, roas: 3.8, acos: 16.5 },
  conversion: { rate: 11.8, sessions: 312000 },
};

export const amazonNovaBundle = buildAmazonBundle(amazonNovaDataConfig);
