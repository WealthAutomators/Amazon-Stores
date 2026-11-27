import { buildAmazonBundle } from "@/data/stores/build-amazon-bundle";
import type { AmazonStoreDataConfig } from "@/types/store-data";

export const amazonApexDataConfig: AmazonStoreDataConfig = {
  timeSeriesSeed: 101,
  timeSeriesMultiplier: 1.12,
  timeSeriesProfile: "enterprise-twin-peak",
  seriesStart: "2024-05-15",
  seriesEnd: "2026-11-28",
  defaultAggregate: {
    label: "Selected date range",
    totalOrderItems: 1006624,
    unitsOrdered: 1098775,
    orderedProductSales: 22781814.07,
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
      asin: "B0SAGLU12",
      title: "Sanabul Essential Boxing Gloves 12 oz Blue/Black",
      imageUrl: "/products/sanabul-boxing-gloves-12oz-blue.png",
      category: "growth_opportunities",
      metricLabel:
        "This ASIN has a sales gap of $20,350 when compared to similar ASINs",
      deltaAmount: 20350,
    },
    {
      asin: "B0SAGWB02",
      title: "Sanabul Gel Hand Wraps with Elastic Strap Black",
      imageUrl: "/products/sanabul-gel-wraps-black.png",
      category: "growth_opportunities",
      metricLabel:
        "This ASIN has a sales gap of $14,725 when compared to similar ASINs",
      deltaAmount: 14725,
    },
    {
      asin: "B0SAHDY03",
      title: "Sanabul Training Pullover Hoodie Black/Red",
      imageUrl: "/products/sanabul-training-hoodie.png",
      category: "growth_opportunities",
      metricLabel:
        "This ASIN has a sales gap of $11,380 when compared to similar ASINs",
      deltaAmount: 11380,
    },
    {
      asin: "B0SACHG04",
      title: "Sanabul Full Face Cheek Protector Headgear Black",
      imageUrl: "/products/sanabul-cheek-headgear.png",
      category: "growth_opportunities",
      metricLabel:
        "This ASIN has a sales gap of $9,390 when compared to similar ASINs",
      deltaAmount: 9390,
    },
    {
      asin: "B0SASPB05",
      title: "Sanabul Speed Bag with Wall Mount Platform Kit",
      imageUrl: "/products/sanabul-speed-bag.png",
      category: "declining_sales",
      metricLabel: "$1,912.65 decline in ordered product sales",
      deltaAmount: -1912.65,
    },
    {
      asin: "B0SAABR06",
      title: "Sanabul Elastic Ankle Braces Black Pair",
      imageUrl: "/products/sanabul-ankle-braces.png",
      category: "increasing_sales",
      metricLabel: "$416.30 increase in ordered product sales",
      deltaAmount: 416.3,
    },
    {
      asin: "B0SAFCM07",
      title: "Sanabul Curved Focus Mitts Red/Black Pair",
      imageUrl: "/products/sanabul-focus-mitts.png",
      category: "increasing_traffic",
      metricLabel: "2% increase in page views",
      deltaAmount: 85.7,
    },
    {
      asin: "B0SATBP08",
      title: "Sanabul Training Backpack Black",
      imageUrl: "/products/sanabul-training-backpack.png",
      category: "declining_traffic",
      metricLabel: "20% decline in page views",
      deltaAmount: -861.8,
    },
  ],
  ads: { spend: 428500, roas: 4.8, acos: 12.4 },
  conversion: { rate: 15.8, sessions: 1240000 },
};

export const amazonApexBundle = buildAmazonBundle(amazonApexDataConfig);
