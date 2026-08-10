import { buildAmazonBundle } from "@/data/stores/build-amazon-bundle";
import type { AmazonStoreDataConfig } from "@/types/store-data";

export const amazonApexDataConfig: AmazonStoreDataConfig = {
  timeSeriesSeed: 101,
  timeSeriesMultiplier: 1.12,
  timeSeriesProfile: "enterprise-twin-peak",
  seriesStart: "2024-05-15",
  seriesEnd: "2026-08-10",
  defaultAggregate: {
    label: "Selected date range",
    totalOrderItems: 642414,
    unitsOrdered: 701224,
    orderedProductSales: 14773644.88,
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
      title: "Sanabul Essential Boxing Gloves 16 oz Blue",
      imageUrl: "/products/sanabul-boxing-gloves-16oz-blue.png",
      category: "growth_opportunities",
      metricLabel:
        "This ASIN has a sales gap of $13,420 when compared to similar ASINs",
      deltaAmount: 13420,
    },
    {
      asin: "B0SAGEL02",
      title: "Sanabul Gel Quick Wraps Black Pair",
      imageUrl: "/products/sanabul-gel-wraps-black.png",
      category: "growth_opportunities",
      metricLabel:
        "This ASIN has a sales gap of $9,680 when compared to similar ASINs",
      deltaAmount: 9680,
    },
    {
      asin: "B0SASHRT03",
      title: "Sanabul MMA Fight Shorts",
      imageUrl: "/products/sanabul-mma-fight-shorts.png",
      category: "growth_opportunities",
      metricLabel:
        "This ASIN has a sales gap of $6,950 when compared to similar ASINs",
      deltaAmount: 6950,
    },
    {
      asin: "B0SASHIN04",
      title: "Sanabul Pro Shin Guards",
      imageUrl: "/products/sanabul-shin-guards-pro.png",
      category: "growth_opportunities",
      metricLabel:
        "This ASIN has a sales gap of $5,640 when compared to similar ASINs",
      deltaAmount: 5640,
    },
    {
      asin: "B0SASPD05",
      title: "Sanabul Leather Speed Bag",
      imageUrl: "/products/sanabul-speed-bag-pro.png",
      category: "declining_sales",
      metricLabel: "$905.30 decline in ordered product sales",
      deltaAmount: -905.3,
    },
    {
      asin: "B0SAPINK06",
      title: "Sanabul Gel Hand Wraps Pink Pair",
      imageUrl: "/products/sanabul-gel-wraps-pink.png",
      category: "increasing_sales",
      metricLabel: "$1,275.80 increase in ordered product sales",
      deltaAmount: 1275.8,
    },
    {
      asin: "B0SAANKL07",
      title: "Sanabul Ankle Support Braces Pair",
      imageUrl: "/products/sanabul-ankle-braces.png",
      category: "increasing_traffic",
      metricLabel: "13% increase in page views",
      deltaAmount: 468.5,
    },
    {
      asin: "B0SADUF08",
      title: "Sanabul Training Gym Duffel Bag",
      imageUrl: "/products/sanabul-training-duffel.png",
      category: "declining_traffic",
      metricLabel: "7% decline in page views",
      deltaAmount: -285.2,
    },
  ],
  ads: { spend: 428500, roas: 4.8, acos: 12.4 },
  conversion: { rate: 15.8, sessions: 1240000 },
};

export const amazonApexBundle = buildAmazonBundle(amazonApexDataConfig);
