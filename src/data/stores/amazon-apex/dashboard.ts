import { buildAmazonBundle } from "@/data/stores/build-amazon-bundle";
import type { AmazonStoreDataConfig } from "@/types/store-data";

export const amazonApexDataConfig: AmazonStoreDataConfig = {
  timeSeriesSeed: 101,
  timeSeriesMultiplier: 1.12,
  timeSeriesProfile: "enterprise-twin-peak",
  seriesStart: "2024-05-15",
  seriesEnd: "2026-07-16",
  defaultAggregate: {
    label: "Selected date range",
    totalOrderItems: 567106,
    unitsOrdered: 619020,
    orderedProductSales: 13041757.22,
    avgUnitsPerOrderItem: 1.09,
    avgSalesPerOrderItem: 23.0,
  },
  insights: {
    id: "sanabul-insights",
    paragraphs: [
      "In April 2026, your ordered product sales reached $445K, up approximately 18% year over year. Units ordered totaled 18,420 for the month with strong demand across boxing gloves and training gear.",
      "Marketplace total sales for the selected date range reached $10.2M on 486,034 units ordered, with average sales per order item holding near $23.00.",
      "Review Products with Growth Opportunities in the ASIN carousel—several Sanabul hand wrap and quick-wrap SKUs show a measurable sales gap versus similar ASINs in your category.",
    ],
  },
  asinAlerts: [
    {
      asin: "B0SAGLOV01",
      title: "Sanabul Essential Boxing Gloves 16 oz",
      imageUrl: "/products/sanabul-boxing-gloves-16oz.png",
      category: "growth_opportunities",
      metricLabel:
        "This ASIN has a sales gap of $13,280 when compared to similar ASINs",
      deltaAmount: 13280,
    },
    {
      asin: "B0SAMEXW02",
      title: "Sanabul Mexican Style Boxing Hand Wraps 180\"",
      imageUrl: "/products/sanabul-mexican-wraps.png",
      category: "growth_opportunities",
      metricLabel:
        "This ASIN has a sales gap of $9,540 when compared to similar ASINs",
      deltaAmount: 9540,
    },
    {
      asin: "B0SASHRT03",
      title: "Sanabul Contender Fight Shorts",
      imageUrl: "/products/sanabul-fight-shorts.png",
      category: "growth_opportunities",
      metricLabel:
        "This ASIN has a sales gap of $6,820 when compared to similar ASINs",
      deltaAmount: 6820,
    },
    {
      asin: "B0SAMOUT04",
      title: "Sanabul Essential Mouth Guard Dual Density",
      imageUrl: "/products/sanabul-mouth-guard.png",
      category: "growth_opportunities",
      metricLabel:
        "This ASIN has a sales gap of $5,520 when compared to similar ASINs",
      deltaAmount: 5520,
    },
    {
      asin: "B0SAGRP05",
      title: "Sanabul MMA Grappling Gloves",
      imageUrl: "/products/sanabul-mma-gloves.png",
      category: "declining_sales",
      metricLabel: "$892.10 decline in ordered product sales",
      deltaAmount: -892.1,
    },
    {
      asin: "B0SATHAI06",
      title: "Sanabul Pro Series Thai Pads Pair",
      imageUrl: "/products/sanabul-thai-pads.png",
      category: "increasing_sales",
      metricLabel: "$1,240.50 increase in ordered product sales",
      deltaAmount: 1240.5,
    },
    {
      asin: "B0SAHEAD07",
      title: "Sanabul Headgear Sparring Helmet",
      imageUrl: "/products/sanabul-headgear.png",
      category: "increasing_traffic",
      metricLabel: "12% increase in page views",
      deltaAmount: 456.3,
    },
    {
      asin: "B0SABAG08",
      title: "Sanabul Punching Bag Gloves Training Pair",
      imageUrl: "/products/sanabul-bag-gloves.png",
      category: "declining_traffic",
      metricLabel: "8% decline in page views",
      deltaAmount: -298.15,
    },
  ],
  ads: { spend: 428500, roas: 4.8, acos: 12.4 },
  conversion: { rate: 15.8, sessions: 1240000 },
};

export const amazonApexBundle = buildAmazonBundle(amazonApexDataConfig);
