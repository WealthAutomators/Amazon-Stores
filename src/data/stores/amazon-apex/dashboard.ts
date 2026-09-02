import { buildAmazonBundle } from "@/data/stores/build-amazon-bundle";
import type { AmazonStoreDataConfig } from "@/types/store-data";

export const amazonApexDataConfig: AmazonStoreDataConfig = {
  timeSeriesSeed: 101,
  timeSeriesMultiplier: 1.12,
  timeSeriesProfile: "enterprise-twin-peak",
  seriesStart: "2024-05-15",
  seriesEnd: "2026-09-02",
  defaultAggregate: {
    label: "Selected date range",
    totalOrderItems: 720502,
    unitsOrdered: 786459,
    orderedProductSales: 16569411.2,
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
      title: "Sanabul Essential Boxing Gloves 16 oz Red",
      imageUrl: "/products/sanabul-boxing-gloves-16oz-red.png",
      category: "growth_opportunities",
      metricLabel:
        "This ASIN has a sales gap of $13,150 when compared to similar ASINs",
      deltaAmount: 13150,
    },
    {
      asin: "B0SAGEL02",
      title: "Sanabul Gel Quick Wraps Black Pair",
      imageUrl: "/products/sanabul-gel-quick-wraps.png",
      category: "growth_opportunities",
      metricLabel:
        "This ASIN has a sales gap of $9,720 when compared to similar ASINs",
      deltaAmount: 9720,
    },
    {
      asin: "B0SACOMP03",
      title: "Sanabul Compression Training Tights",
      imageUrl: "/products/sanabul-compression-tights.png",
      category: "growth_opportunities",
      metricLabel:
        "This ASIN has a sales gap of $6,880 when compared to similar ASINs",
      deltaAmount: 6880,
    },
    {
      asin: "B0SASHIN04",
      title: "Sanabul Shin and Instep Guards",
      imageUrl: "/products/sanabul-shin-instep-guards.png",
      category: "growth_opportunities",
      metricLabel:
        "This ASIN has a sales gap of $5,740 when compared to similar ASINs",
      deltaAmount: 5740,
    },
    {
      asin: "B0SAHVY05",
      title: "Sanabul Mini Heavy Bag",
      imageUrl: "/products/sanabul-mini-heavy-bag.png",
      category: "declining_sales",
      metricLabel: "$843.20 decline in ordered product sales",
      deltaAmount: -843.2,
    },
    {
      asin: "B0SAHDG06",
      title: "Sanabul Training Headgear",
      imageUrl: "/products/sanabul-training-headgear.png",
      category: "increasing_sales",
      metricLabel: "$1,398.50 increase in ordered product sales",
      deltaAmount: 1398.5,
    },
    {
      asin: "B0SAMITT07",
      title: "Sanabul Coach Focus Mitts Pair",
      imageUrl: "/products/sanabul-focus-mitts-coach.png",
      category: "increasing_traffic",
      metricLabel: "12% increase in page views",
      deltaAmount: 455.8,
    },
    {
      asin: "B0SABPK08",
      title: "Sanabul Sports Gear Backpack",
      imageUrl: "/products/sanabul-sports-backpack.png",
      category: "declining_traffic",
      metricLabel: "9% decline in page views",
      deltaAmount: -308.4,
    },
  ],
  ads: { spend: 428500, roas: 4.8, acos: 12.4 },
  conversion: { rate: 15.8, sessions: 1240000 },
};

export const amazonApexBundle = buildAmazonBundle(amazonApexDataConfig);
