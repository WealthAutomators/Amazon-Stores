import { buildAmazonBundle } from "@/data/stores/build-amazon-bundle";
import type { AmazonStoreDataConfig } from "@/types/store-data";

export const amazonApexDataConfig: AmazonStoreDataConfig = {
  timeSeriesSeed: 101,
  timeSeriesMultiplier: 1.12,
  timeSeriesProfile: "enterprise-twin-peak",
  seriesStart: "2024-05-15",
  seriesEnd: "2026-10-27",
  defaultAggregate: {
    label: "Selected date range",
    totalOrderItems: 947913,
    unitsOrdered: 1034688,
    orderedProductSales: 21799195.81,
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
      asin: "B0SAGLP10",
      title: "Sanabul Essential Boxing Gloves 10 oz Pink/White",
      imageUrl: "/products/sanabul-boxing-gloves-10oz-pink.jpg",
      category: "growth_opportunities",
      metricLabel:
        "This ASIN has a sales gap of $12,840 when compared to similar ASINs",
      deltaAmount: 12840,
    },
    {
      asin: "B0SAGLC02",
      title: "Sanabul Gel Quick Hand Wraps Digital Camo",
      imageUrl: "/products/sanabul-gel-wraps-camo.jpg",
      category: "growth_opportunities",
      metricLabel:
        "This ASIN has a sales gap of $9,470 when compared to similar ASINs",
      deltaAmount: 9470,
    },
    {
      asin: "B0SASPT03",
      title: "Sanabul BJJ Compression Spats Black/Red",
      imageUrl: "/products/sanabul-compression-spats.jpg",
      category: "growth_opportunities",
      metricLabel:
        "This ASIN has a sales gap of $7,180 when compared to similar ASINs",
      deltaAmount: 7180,
    },
    {
      asin: "B0SABDY04",
      title: "Sanabul Padded Body Protector Chest Guard",
      imageUrl: "/products/sanabul-body-protector.jpg",
      category: "growth_opportunities",
      metricLabel:
        "This ASIN has a sales gap of $6,050 when compared to similar ASINs",
      deltaAmount: 6050,
    },
    {
      asin: "B0SASBP05",
      title: "Sanabul Wall-Mount Speed Bag Platform Kit",
      imageUrl: "/products/sanabul-speed-bag-platform.jpg",
      category: "declining_sales",
      metricLabel: "$769.20 decline in ordered product sales",
      deltaAmount: -769.2,
    },
    {
      asin: "B0SAMTS06",
      title: "Sanabul Muay Thai Fight Shorts Black/White",
      imageUrl: "/products/sanabul-muay-thai-shorts.jpg",
      category: "increasing_sales",
      metricLabel: "$1,587.90 increase in ordered product sales",
      deltaAmount: 1587.9,
    },
    {
      asin: "B0SAFMB07",
      title: "Sanabul Focus Mitts Royal Blue Pair",
      imageUrl: "/products/sanabul-focus-mitts-blue.jpg",
      category: "increasing_traffic",
      metricLabel: "12% increase in page views",
      deltaAmount: 509.7,
    },
    {
      asin: "B0SADEO08",
      title: "Sanabul Cedar Boxing Glove Deodorizers Pair",
      imageUrl: "/products/sanabul-glove-deodorizers.jpg",
      category: "declining_traffic",
      metricLabel: "6% decline in page views",
      deltaAmount: -258.4,
    },
  ],
  ads: { spend: 428500, roas: 4.8, acos: 12.4 },
  conversion: { rate: 15.8, sessions: 1240000 },
};

export const amazonApexBundle = buildAmazonBundle(amazonApexDataConfig);
