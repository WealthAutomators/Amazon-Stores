import { buildAmazonBundle } from "@/data/stores/build-amazon-bundle";
import type { AmazonStoreDataConfig } from "@/types/store-data";

export const amazonApexDataConfig: AmazonStoreDataConfig = {
  timeSeriesSeed: 101,
  timeSeriesMultiplier: 1.12,
  timeSeriesProfile: "enterprise-twin-peak",
  seriesStart: "2024-05-15",
  seriesEnd: "2026-09-29",
  defaultAggregate: {
    label: "Selected date range",
    totalOrderItems: 824364,
    unitsOrdered: 899829,
    orderedProductSales: 18957922.49,
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
      asin: "B0SAGLW12",
      title: "Sanabul Essential Boxing Gloves 12 oz White/Gold",
      imageUrl: "/products/sanabul-boxing-gloves-12oz-white.png",
      category: "growth_opportunities",
      metricLabel:
        "This ASIN has a sales gap of $13,240 when compared to similar ASINs",
      deltaAmount: 13240,
    },
    {
      asin: "B0SAGELB02",
      title: "Sanabul Gel Quick Hand Wraps Royal Blue",
      imageUrl: "/products/sanabul-gel-wraps-blue.png",
      category: "growth_opportunities",
      metricLabel:
        "This ASIN has a sales gap of $9,560 when compared to similar ASINs",
      deltaAmount: 9560,
    },
    {
      asin: "B0SAGRP03",
      title: "Sanabul 4 oz MMA Grappling Gloves Black/Red",
      imageUrl: "/products/sanabul-mma-grappling-gloves.png",
      category: "growth_opportunities",
      metricLabel:
        "This ASIN has a sales gap of $7,390 when compared to similar ASINs",
      deltaAmount: 7390,
    },
    {
      asin: "B0SAKSH04",
      title: "Sanabul Curved Kick Shield Strike Pad",
      imageUrl: "/products/sanabul-kick-shield.png",
      category: "growth_opportunities",
      metricLabel:
        "This ASIN has a sales gap of $6,020 when compared to similar ASINs",
      deltaAmount: 6020,
    },
    {
      asin: "B0SASPD05",
      title: "Sanabul Leather Speed Bag Red",
      imageUrl: "/products/sanabul-speed-bag-leather-red.png",
      category: "declining_sales",
      metricLabel: "$748.30 decline in ordered product sales",
      deltaAmount: -748.3,
    },
    {
      asin: "B0SAMGC06",
      title: "Sanabul Boil & Bite Mouth Guard with Case",
      imageUrl: "/products/sanabul-mouthguard-case.png",
      category: "increasing_sales",
      metricLabel: "$1,612.40 increase in ordered product sales",
      deltaAmount: 1612.4,
    },
    {
      asin: "B0SASHN07",
      title: "Sanabul Muay Thai Shin Guards Black",
      imageUrl: "/products/sanabul-shin-guards-black.png",
      category: "increasing_traffic",
      metricLabel: "12% increase in page views",
      deltaAmount: 498.6,
    },
    {
      asin: "B0SADUF08",
      title: "Sanabul Combat Sports Gear Duffel Bag",
      imageUrl: "/products/sanabul-gear-duffel-black.png",
      category: "declining_traffic",
      metricLabel: "6% decline in page views",
      deltaAmount: -264.9,
    },
  ],
  ads: { spend: 428500, roas: 4.8, acos: 12.4 },
  conversion: { rate: 15.8, sessions: 1240000 },
};

export const amazonApexBundle = buildAmazonBundle(amazonApexDataConfig);
