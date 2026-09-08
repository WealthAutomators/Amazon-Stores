import { buildAmazonBundle } from "@/data/stores/build-amazon-bundle";
import type { AmazonStoreDataConfig } from "@/types/store-data";

export const amazonApexDataConfig: AmazonStoreDataConfig = {
  timeSeriesSeed: 101,
  timeSeriesMultiplier: 1.12,
  timeSeriesProfile: "enterprise-twin-peak",
  seriesStart: "2024-05-15",
  seriesEnd: "2026-09-08",
  defaultAggregate: {
    label: "Selected date range",
    totalOrderItems: 742389,
    unitsOrdered: 810350,
    orderedProductSales: 17072748.64,
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
      title: "Sanabul Essential Boxing Gloves 12 oz Blue",
      imageUrl: "/products/sanabul-boxing-gloves-12oz-blue.png",
      category: "growth_opportunities",
      metricLabel:
        "This ASIN has a sales gap of $12,640 when compared to similar ASINs",
      deltaAmount: 12640,
    },
    {
      asin: "B0SAWRAP02",
      title: "Sanabul Elastic Hand Wraps Red Pair",
      imageUrl: "/products/sanabul-hand-wraps-red-elastic.png",
      category: "growth_opportunities",
      metricLabel:
        "This ASIN has a sales gap of $9,180 when compared to similar ASINs",
      deltaAmount: 9180,
    },
    {
      asin: "B0SAMMA03",
      title: "Sanabul MMA Sparring Gloves",
      imageUrl: "/products/sanabul-mma-spar-gloves.png",
      category: "growth_opportunities",
      metricLabel:
        "This ASIN has a sales gap of $7,050 when compared to similar ASINs",
      deltaAmount: 7050,
    },
    {
      asin: "B0SATHAI04",
      title: "Sanabul Muay Thai Kick Pads Pair",
      imageUrl: "/products/sanabul-muay-thai-kick-pads.png",
      category: "growth_opportunities",
      metricLabel:
        "This ASIN has a sales gap of $5,520 when compared to similar ASINs",
      deltaAmount: 5520,
    },
    {
      asin: "B0SASPD05",
      title: "Sanabul Leather Speed Bag",
      imageUrl: "/products/sanabul-leather-speed-bag.png",
      category: "declining_sales",
      metricLabel: "$821.90 decline in ordered product sales",
      deltaAmount: -821.9,
    },
    {
      asin: "B0SAPINK06",
      title: "Sanabul Gel Hand Wraps Pink Pair",
      imageUrl: "/products/sanabul-pink-gel-wraps.png",
      category: "increasing_sales",
      metricLabel: "$1,452.30 increase in ordered product sales",
      deltaAmount: 1452.3,
    },
    {
      asin: "B0SAANKL07",
      title: "Sanabul Ankle Support Braces Pair",
      imageUrl: "/products/sanabul-ankle-support-pair.png",
      category: "increasing_traffic",
      metricLabel: "14% increase in page views",
      deltaAmount: 478.6,
    },
    {
      asin: "B0SADUF08",
      title: "Sanabul Training Gym Duffel Bag",
      imageUrl: "/products/sanabul-gym-duffel-pro.png",
      category: "declining_traffic",
      metricLabel: "6% decline in page views",
      deltaAmount: -271.5,
    },
  ],
  ads: { spend: 428500, roas: 4.8, acos: 12.4 },
  conversion: { rate: 15.8, sessions: 1240000 },
};

export const amazonApexBundle = buildAmazonBundle(amazonApexDataConfig);
