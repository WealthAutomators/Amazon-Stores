import { buildAmazonBundle } from "@/data/stores/build-amazon-bundle";
import type { AmazonStoreDataConfig } from "@/types/store-data";

export const amazonApexDataConfig: AmazonStoreDataConfig = {
  timeSeriesSeed: 101,
  timeSeriesMultiplier: 1.12,
  timeSeriesProfile: "enterprise-twin-peak",
  seriesStart: "2024-05-15",
  seriesEnd: "2026-08-05",
  defaultAggregate: {
    label: "Selected date range",
    totalOrderItems: 626592,
    unitsOrdered: 683953,
    orderedProductSales: 14409779.88,
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
      asin: "B0SAGLV12",
      title: "Sanabul Essential Boxing Gloves 12 oz",
      imageUrl: "/products/sanabul-boxing-gloves-12oz.png",
      category: "growth_opportunities",
      metricLabel:
        "This ASIN has a sales gap of $12,960 when compared to similar ASINs",
      deltaAmount: 12960,
    },
    {
      asin: "B0SAWRAP02",
      title: "Sanabul Elastic Hand Wraps Red Pair",
      imageUrl: "/products/sanabul-hand-wraps-red.png",
      category: "growth_opportunities",
      metricLabel:
        "This ASIN has a sales gap of $9,210 when compared to similar ASINs",
      deltaAmount: 9210,
    },
    {
      asin: "B0SAMMA03",
      title: "Sanabul MMA Sparring Gloves",
      imageUrl: "/products/sanabul-mma-sparring-gloves.png",
      category: "growth_opportunities",
      metricLabel:
        "This ASIN has a sales gap of $7,140 when compared to similar ASINs",
      deltaAmount: 7140,
    },
    {
      asin: "B0SATHAI04",
      title: "Sanabul Muay Thai Kick Pads Pair",
      imageUrl: "/products/sanabul-muay-thai-pads.png",
      category: "growth_opportunities",
      metricLabel:
        "This ASIN has a sales gap of $5,880 when compared to similar ASINs",
      deltaAmount: 5880,
    },
    {
      asin: "B0SAHVY05",
      title: "Sanabul Mini Heavy Bag",
      imageUrl: "/products/sanabul-heavy-bag-mini.png",
      category: "declining_sales",
      metricLabel: "$874.60 decline in ordered product sales",
      deltaAmount: -874.6,
    },
    {
      asin: "B0SAHDG06",
      title: "Sanabul Boxing Headgear",
      imageUrl: "/products/sanabul-boxing-headgear.png",
      category: "increasing_sales",
      metricLabel: "$1,318.20 increase in ordered product sales",
      deltaAmount: 1318.2,
    },
    {
      asin: "B0SAMITT07",
      title: "Sanabul Coach Focus Mitts Pair",
      imageUrl: "/products/sanabul-coach-mitts.png",
      category: "increasing_traffic",
      metricLabel: "11% increase in page views",
      deltaAmount: 442.8,
    },
    {
      asin: "B0SABPK08",
      title: "Sanabul Gear Training Backpack",
      imageUrl: "/products/sanabul-gear-backpack.png",
      category: "declining_traffic",
      metricLabel: "9% decline in page views",
      deltaAmount: -312.4,
    },
  ],
  ads: { spend: 428500, roas: 4.8, acos: 12.4 },
  conversion: { rate: 15.8, sessions: 1240000 },
};

export const amazonApexBundle = buildAmazonBundle(amazonApexDataConfig);
