import { buildAmazonBundle } from "@/data/stores/build-amazon-bundle";
import type { AmazonStoreDataConfig } from "@/types/store-data";

export const amazonNovaDataConfig: AmazonStoreDataConfig = {
  timeSeriesSeed: 207,
  timeSeriesMultiplier: 0.62,
  timeSeriesProfile: "midmarket-spike-decline",
  seriesStart: "2024-08-14",
  seriesEnd: "2026-09-30",
  defaultAggregate: {
    label: "Selected date range",
    totalOrderItems: 36228,
    unitsOrdered: 42476,
    orderedProductSales: 913649.28,
    avgUnitsPerOrderItem: 1.17,
    avgSalesPerOrderItem: 25.22,
  },
  insights: {
    id: "kursat-insights",
    paragraphs: [
      "In April 2026, your ordered product sales reached $326, down approximately 97% year over year. Units ordered totaled 24 for the month—a near-complete collapse compared to the prior year.",
      "For the selected date range, ordered product sales totaled $487,735.84 on 22,686 units with an average of $25.21 per order item. Performance peaked in mid-2025 before declining sharply starting in late 2025.",
      "Review Products Below Market Average in the ASIN carousel—the Aozora fineliner pens SKU shows a measurable gap versus similar listings in your category.",
    ],
  },
  asinAlerts: [
    {
      asin: "B0KRFINE01",
      title: "Aozora Fine-Tip Fineliner Pens 0.4mm 8-Color Pack",
      imageUrl: "/products/kursat-aozora-fineliner-pens.png",
      category: "below_market_average",
      metricLabel:
        "Last week sales were $39.60 below the market average for similar ASINs",
      deltaAmount: -39.6,
    },
    {
      asin: "B0KRSAUC02",
      title: "Tri-Ply Stainless Steel Saucepan 3-Quart with Lid",
      imageUrl: "/products/kursat-stainless-saucepan.png",
      category: "top_sales_products",
      metricLabel: "$1,512.30 in ordered product sales last week",
      deltaAmount: 1512.3,
    },
    {
      asin: "B0KRPOUR03",
      title: "Gooseneck Pour-Over Coffee Kettle Matte Black",
      imageUrl: "/products/kursat-pour-over-kettle.png",
      category: "declining_sales",
      metricLabel: "$226.80 decline in ordered product sales",
      deltaAmount: -226.8,
    },
    {
      asin: "B0KRBENT04",
      title: "3-Compartment Bento Lunch Box with Utensils",
      imageUrl: "/products/kursat-bento-lunch-box.png",
      category: "increasing_sales",
      metricLabel: "$634.20 increase in ordered product sales",
      deltaAmount: 634.2,
    },
    {
      asin: "B0KRSINK05",
      title: "2-Tier Pull-Out Under Sink Organizer",
      imageUrl: "/products/kursat-under-sink-organizer.png",
      category: "declining_traffic",
      metricLabel: "10% decline in page views",
      deltaAmount: -10,
    },
    {
      asin: "B0KRMONS06",
      title: "Bamboo Monitor Stand Riser with Drawer",
      imageUrl: "/products/kursat-monitor-stand.png",
      category: "increasing_traffic",
      metricLabel: "9% increase in page views",
      deltaAmount: 9,
    },
  ],
  ads: { spend: 28400, roas: 3.8, acos: 16.5 },
  conversion: { rate: 11.8, sessions: 312000 },
};

export const amazonNovaBundle = buildAmazonBundle(amazonNovaDataConfig);
