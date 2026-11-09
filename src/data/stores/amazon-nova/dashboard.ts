import { buildAmazonBundle } from "@/data/stores/build-amazon-bundle";
import type { AmazonStoreDataConfig } from "@/types/store-data";

export const amazonNovaDataConfig: AmazonStoreDataConfig = {
  timeSeriesSeed: 207,
  timeSeriesMultiplier: 0.62,
  timeSeriesProfile: "midmarket-spike-decline",
  seriesStart: "2024-08-14",
  seriesEnd: "2026-11-10",
  defaultAggregate: {
    label: "Selected date range",
    totalOrderItems: 44468,
    unitsOrdered: 52139,
    orderedProductSales: 1124598.23,
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
      asin: "B0KRGPEN01",
      title: "Aozora Soft Grip Gel Pens 12-Pack Assorted Colors",
      imageUrl: "/products/kursat-aozora-gel-pens.png",
      category: "below_market_average",
      metricLabel:
        "Last week sales were $33.45 below the market average for similar ASINs",
      deltaAmount: -33.45,
    },
    {
      asin: "B0KRSKLT02",
      title: "Pre-Seasoned Cast Iron Skillet 12-Inch with Wooden Handle",
      imageUrl: "/products/kursat-cast-iron-skillet-12.png",
      category: "top_sales_products",
      metricLabel: "$2,031.80 in ordered product sales last week",
      deltaAmount: 2031.8,
    },
    {
      asin: "B0KRKTTL03",
      title: "Stainless Steel Electric Kettle 1.7L",
      imageUrl: "/products/kursat-electric-kettle.png",
      category: "declining_sales",
      metricLabel: "$158.40 decline in ordered product sales",
      deltaAmount: -158.4,
    },
    {
      asin: "B0KRGLCT04",
      title: "Glass Meal Prep Containers with Locking Lids Set of 5",
      imageUrl: "/products/kursat-glass-containers-set.png",
      category: "increasing_sales",
      metricLabel: "$862.15 increase in ordered product sales",
      deltaAmount: 862.15,
    },
    {
      asin: "B0KRVCBG05",
      title: "Vacuum Storage Space Saver Bags 6-Pack with Hand Pump",
      imageUrl: "/products/kursat-vacuum-storage-bags.png",
      category: "declining_traffic",
      metricLabel: "5% decline in page views",
      deltaAmount: -5,
    },
    {
      asin: "B0KRMDSK06",
      title: "Mesh Desk Organizer with Sliding Drawers & Pencil Cup Black",
      imageUrl: "/products/kursat-desk-organizer.png",
      category: "increasing_traffic",
      metricLabel: "15% increase in page views",
      deltaAmount: 15,
    },
  ],
  ads: { spend: 28400, roas: 3.8, acos: 16.5 },
  conversion: { rate: 11.8, sessions: 312000 },
};

export const amazonNovaBundle = buildAmazonBundle(amazonNovaDataConfig);
