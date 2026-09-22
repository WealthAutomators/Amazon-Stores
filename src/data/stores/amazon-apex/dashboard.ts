import { buildAmazonBundle } from "@/data/stores/build-amazon-bundle";
import type { AmazonStoreDataConfig } from "@/types/store-data";

export const amazonApexDataConfig: AmazonStoreDataConfig = {
  timeSeriesSeed: 101,
  timeSeriesMultiplier: 1.12,
  timeSeriesProfile: "enterprise-twin-peak",
  seriesStart: "2024-05-15",
  seriesEnd: "2026-09-22",
  defaultAggregate: {
    label: "Selected date range",
    totalOrderItems: 796080,
    unitsOrdered: 868955,
    orderedProductSales: 18307469.15,
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
      asin: "B0SAGLV16",
      title: "Sanabul Essential Boxing Gloves 16 oz Navy",
      imageUrl: "/products/sanabul-boxing-gloves-16oz-navy.png",
      category: "growth_opportunities",
      metricLabel:
        "This ASIN has a sales gap of $12,910 when compared to similar ASINs",
      deltaAmount: 12910,
    },
    {
      asin: "B0SAMEX02",
      title: "Sanabul Mexican Style Hand Wraps Navy Pair",
      imageUrl: "/products/sanabul-mexican-wraps-navy.png",
      category: "growth_opportunities",
      metricLabel:
        "This ASIN has a sales gap of $9,280 when compared to similar ASINs",
      deltaAmount: 9280,
    },
    {
      asin: "B0SABAG03",
      title: "Sanabul Heavy Bag MMA Gloves",
      imageUrl: "/products/sanabul-heavy-bag-gloves.png",
      category: "growth_opportunities",
      metricLabel:
        "This ASIN has a sales gap of $7,140 when compared to similar ASINs",
      deltaAmount: 7140,
    },
    {
      asin: "B0SATHAI04",
      title: "Sanabul Muay Thai Pads Crimson Pair",
      imageUrl: "/products/sanabul-thai-pads-crimson.png",
      category: "growth_opportunities",
      metricLabel:
        "This ASIN has a sales gap of $5,850 when compared to similar ASINs",
      deltaAmount: 5850,
    },
    {
      asin: "B0SAHVY05",
      title: "Sanabul Mini Leather Heavy Bag",
      imageUrl: "/products/sanabul-mini-bag-leather.png",
      category: "declining_sales",
      metricLabel: "$776.50 decline in ordered product sales",
      deltaAmount: -776.5,
    },
    {
      asin: "B0SAHDG06",
      title: "Sanabul Cheek Protection Headgear",
      imageUrl: "/products/sanabul-cheek-headgear.png",
      category: "increasing_sales",
      metricLabel: "$1,568.20 increase in ordered product sales",
      deltaAmount: 1568.2,
    },
    {
      asin: "B0SAMITT07",
      title: "Sanabul Leather Focus Mitts Pair",
      imageUrl: "/products/sanabul-leather-focus-mitts.png",
      category: "increasing_traffic",
      metricLabel: "13% increase in page views",
      deltaAmount: 512.8,
    },
    {
      asin: "B0SABPK08",
      title: "Sanabul Training Gear Backpack",
      imageUrl: "/products/sanabul-training-backpack.png",
      category: "declining_traffic",
      metricLabel: "7% decline in page views",
      deltaAmount: -276.3,
    },
  ],
  ads: { spend: 428500, roas: 4.8, acos: 12.4 },
  conversion: { rate: 15.8, sessions: 1240000 },
};

export const amazonApexBundle = buildAmazonBundle(amazonApexDataConfig);
