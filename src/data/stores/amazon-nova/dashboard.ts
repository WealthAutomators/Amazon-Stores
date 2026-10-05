import { buildAmazonBundle } from "@/data/stores/build-amazon-bundle";
import type { AmazonStoreDataConfig } from "@/types/store-data";

export const amazonNovaDataConfig: AmazonStoreDataConfig = {
  timeSeriesSeed: 207,
  timeSeriesMultiplier: 0.62,
  timeSeriesProfile: "midmarket-spike-decline",
  seriesStart: "2024-08-14",
  seriesEnd: "2026-10-05",
  defaultAggregate: {
    label: "Selected date range",
    totalOrderItems: 37143,
    unitsOrdered: 43549,
    orderedProductSales: 936720.07,
    avgUnitsPerOrderItem: 1.17,
    avgSalesPerOrderItem: 25.22,
  },
  insights: {
    id: "kursat-insights",
    paragraphs: [
      "In April 2026, your ordered product sales reached $326, down approximately 97% year over year. Units ordered totaled 24 for the month—a near-complete collapse compared to the prior year.",
      "For the selected date range, ordered product sales totaled $487,735.84 on 22,686 units with an average of $25.21 per order item. Performance peaked in mid-2025 before declining sharply starting in late 2025.",
      "Review Products Below Market Average in the ASIN carousel—the Aozora brush-tip markers SKU shows a measurable gap versus similar listings in your category.",
    ],
  },
  asinAlerts: [
    {
      asin: "B0KRBRSH01",
      title: "Aozora Brush Tip Markers Soft Pastel 6-Color Set",
      imageUrl: "/products/kursat-aozora-brush-markers.jpg",
      category: "below_market_average",
      metricLabel:
        "Last week sales were $42.80 below the market average for similar ASINs",
      deltaAmount: -42.8,
    },
    {
      asin: "B0KRSAUT02",
      title: "Ceramic Nonstick Sauté Pan 4-Quart with Lid",
      imageUrl: "/products/kursat-ceramic-saute-pan.jpg",
      category: "top_sales_products",
      metricLabel: "$1,495.40 in ordered product sales last week",
      deltaAmount: 1495.4,
    },
    {
      asin: "B0KRFPRS03",
      title: "Stainless Steel French Press Coffee Maker 34 oz",
      imageUrl: "/products/kursat-french-press.jpg",
      category: "declining_sales",
      metricLabel: "$231.10 decline in ordered product sales",
      deltaAmount: -231.1,
    },
    {
      asin: "B0KRCANS04",
      title: "Stackable Pantry Canisters with Bamboo Lids Set of 4",
      imageUrl: "/products/kursat-pantry-canisters.jpg",
      category: "increasing_sales",
      metricLabel: "$622.90 increase in ordered product sales",
      deltaAmount: 622.9,
    },
    {
      asin: "B0KRSHOE05",
      title: "Over-the-Door Shoe Rack 3-Tier Black",
      imageUrl: "/products/kursat-over-door-shoe-rack.jpg",
      category: "declining_traffic",
      metricLabel: "12% decline in page views",
      deltaAmount: -12,
    },
    {
      asin: "B0KRLTST06",
      title: "Adjustable Aluminum Laptop Stand Silver",
      imageUrl: "/products/kursat-laptop-stand.jpg",
      category: "increasing_traffic",
      metricLabel: "7% increase in page views",
      deltaAmount: 7,
    },
  ],
  ads: { spend: 28400, roas: 3.8, acos: 16.5 },
  conversion: { rate: 11.8, sessions: 312000 },
};

export const amazonNovaBundle = buildAmazonBundle(amazonNovaDataConfig);
