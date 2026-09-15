import { buildAmazonBundle } from "@/data/stores/build-amazon-bundle";
import type { AmazonStoreDataConfig } from "@/types/store-data";

export const amazonApexDataConfig: AmazonStoreDataConfig = {
  timeSeriesSeed: 101,
  timeSeriesMultiplier: 1.12,
  timeSeriesProfile: "enterprise-twin-peak",
  seriesStart: "2024-05-15",
  seriesEnd: "2026-09-15",
  defaultAggregate: {
    label: "Selected date range",
    totalOrderItems: 768766,
    unitsOrdered: 839141,
    orderedProductSales: 17679333.1,
    avgUnitsPerOrderItem: 1.09,
    avgSalesPerOrderItem: 23.0,
  },
  insights: {
    id: "sanabul-insights",
    paragraphs: [
      "In April 2026, your ordered product sales reached $445K, up approximately 18% year over year. Units ordered totaled 18,420 for the month with strong demand across boxing gloves and training gear.",
      "Marketplace total sales for the selected date range reached $10.2M on 486,034 units ordered, with average sales per order item holding near $23.00.",
      "Review Products with Growth Opportunities in the ASIN carousel—Sanabul gloves, gel wraps, and training apparel SKUs show a measurable sales gap versus similar ASINs in your category.",
    ],
  },
  asinAlerts: [
    {
      asin: "B0SAGLV14",
      title: "Sanabul Essential Boxing Gloves 14 oz Gold",
      imageUrl: "/products/sanabul-boxing-gloves-14oz-gold.png",
      category: "growth_opportunities",
      metricLabel:
        "This ASIN has a sales gap of $13,280 when compared to similar ASINs",
      deltaAmount: 13280,
    },
    {
      asin: "B0SAGEL02",
      title: "Sanabul Gel Quick Wraps Black Pair",
      imageUrl: "/products/sanabul-gel-wraps-quick-black.png",
      category: "growth_opportunities",
      metricLabel:
        "This ASIN has a sales gap of $9,540 when compared to similar ASINs",
      deltaAmount: 9540,
    },
    {
      asin: "B0SASHRT03",
      title: "Sanabul MMA Fight Shorts Black",
      imageUrl: "/products/sanabul-fight-shorts-black.png",
      category: "growth_opportunities",
      metricLabel:
        "This ASIN has a sales gap of $6,920 when compared to similar ASINs",
      deltaAmount: 6920,
    },
    {
      asin: "B0SASHIN04",
      title: "Sanabul Pro Shin Guards",
      imageUrl: "/products/sanabul-pro-shin-guards.png",
      category: "growth_opportunities",
      metricLabel:
        "This ASIN has a sales gap of $5,680 when compared to similar ASINs",
      deltaAmount: 5680,
    },
    {
      asin: "B0SADEB05",
      title: "Sanabul Double End Training Bag",
      imageUrl: "/products/sanabul-double-end-training.png",
      category: "declining_sales",
      metricLabel: "$798.40 decline in ordered product sales",
      deltaAmount: -798.4,
    },
    {
      asin: "B0SAJMP06",
      title: "Sanabul Leather Jump Rope",
      imageUrl: "/products/sanabul-jump-rope-leather.png",
      category: "increasing_sales",
      metricLabel: "$1,512.70 increase in ordered product sales",
      deltaAmount: 1512.7,
    },
    {
      asin: "B0SAWRST07",
      title: "Sanabul Elite Wrist Wraps Pair",
      imageUrl: "/products/sanabul-wrist-wraps-elite.png",
      category: "increasing_traffic",
      metricLabel: "11% increase in page views",
      deltaAmount: 492.3,
    },
    {
      asin: "B0SAMESH08",
      title: "Sanabul Mesh Gear Laundry Bag",
      imageUrl: "/products/sanabul-mesh-gear-laundry.png",
      category: "declining_traffic",
      metricLabel: "8% decline in page views",
      deltaAmount: -289.6,
    },
  ],
  ads: { spend: 428500, roas: 4.8, acos: 12.4 },
  conversion: { rate: 15.8, sessions: 1240000 },
};

export const amazonApexBundle = buildAmazonBundle(amazonApexDataConfig);
