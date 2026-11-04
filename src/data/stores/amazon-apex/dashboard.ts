import { buildAmazonBundle } from "@/data/stores/build-amazon-bundle";
import type { AmazonStoreDataConfig } from "@/types/store-data";

export const amazonApexDataConfig: AmazonStoreDataConfig = {
  timeSeriesSeed: 101,
  timeSeriesMultiplier: 1.12,
  timeSeriesProfile: "enterprise-twin-peak",
  seriesStart: "2024-05-15",
  seriesEnd: "2026-11-04",
  defaultAggregate: {
    label: "Selected date range",
    totalOrderItems: 956770,
    unitsOrdered: 1044355,
    orderedProductSales: 22035766.18,
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
      asin: "B0SAGLS16",
      title: "Sanabul Essential Boxing Gloves 16 oz Silver/Black",
      imageUrl: "/products/sanabul-boxing-gloves-16oz-silver.jpg",
      category: "growth_opportunities",
      metricLabel:
        "This ASIN has a sales gap of $14,260 when compared to similar ASINs",
      deltaAmount: 14260,
    },
    {
      asin: "B0SAWRS02",
      title: "Sanabul 120\" Cotton Hand Wraps Red/Black Stripe",
      imageUrl: "/products/sanabul-hand-wraps-striped.jpg",
      category: "growth_opportunities",
      metricLabel:
        "This ASIN has a sales gap of $10,315 when compared to similar ASINs",
      deltaAmount: 10315,
    },
    {
      asin: "B0SARGW03",
      title: "Sanabul Long Sleeve BJJ Rash Guard White/Blue",
      imageUrl: "/products/sanabul-rash-guard-white.jpg",
      category: "growth_opportunities",
      metricLabel:
        "This ASIN has a sales gap of $7,940 when compared to similar ASINs",
      deltaAmount: 7940,
    },
    {
      asin: "B0SAGRP04",
      title: "Sanabul Padded Groin Protector Black",
      imageUrl: "/products/sanabul-groin-protector.jpg",
      category: "growth_opportunities",
      metricLabel:
        "This ASIN has a sales gap of $6,585 when compared to similar ASINs",
      deltaAmount: 6585,
    },
    {
      asin: "B0SAHVB05",
      title: "Sanabul 4 ft Unfilled Heavy Punching Bag Black",
      imageUrl: "/products/sanabul-heavy-bag-4ft.jpg",
      category: "declining_sales",
      metricLabel: "$1,284.60 decline in ordered product sales",
      deltaAmount: -1284.6,
    },
    {
      asin: "B0SAKNP06",
      title: "Sanabul MMA Knee Pads Black/White Pair",
      imageUrl: "/products/sanabul-knee-pads.jpg",
      category: "increasing_sales",
      metricLabel: "$612.45 increase in ordered product sales",
      deltaAmount: 612.45,
    },
    {
      asin: "B0SAKPR07",
      title: "Sanabul Curved Muay Thai Kick Pads Red Pair",
      imageUrl: "/products/sanabul-kick-pads-red.jpg",
      category: "increasing_traffic",
      metricLabel: "5% increase in page views",
      deltaAmount: 214.3,
    },
    {
      asin: "B0SADSK08",
      title: "Sanabul Mesh Drawstring Gear Sack Black",
      imageUrl: "/products/sanabul-drawstring-sack.jpg",
      category: "declining_traffic",
      metricLabel: "14% decline in page views",
      deltaAmount: -603.2,
    },
  ],
  ads: { spend: 428500, roas: 4.8, acos: 12.4 },
  conversion: { rate: 15.8, sessions: 1240000 },
};

export const amazonApexBundle = buildAmazonBundle(amazonApexDataConfig);
