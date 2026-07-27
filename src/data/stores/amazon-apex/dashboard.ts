import { buildAmazonBundle } from "@/data/stores/build-amazon-bundle";
import type { AmazonStoreDataConfig } from "@/types/store-data";

export const amazonApexDataConfig: AmazonStoreDataConfig = {
  timeSeriesSeed: 101,
  timeSeriesMultiplier: 1.12,
  timeSeriesProfile: "enterprise-twin-peak",
  seriesStart: "2024-05-15",
  seriesEnd: "2026-07-27",
  defaultAggregate: {
    label: "Selected date range",
    totalOrderItems: 599088,
    unitsOrdered: 653930,
    orderedProductSales: 13777257.99,
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
      asin: "B0SAGLV14",
      title: "Sanabul Essential Boxing Gloves 14 oz",
      imageUrl: "/products/sanabul-boxing-gloves-14oz.png",
      category: "growth_opportunities",
      metricLabel:
        "This ASIN has a sales gap of $13,280 when compared to similar ASINs",
      deltaAmount: 13280,
    },
    {
      asin: "B0SAQGEL02",
      title: "Sanabul Gel Quick Wraps Black",
      imageUrl: "/products/sanabul-quick-wraps-gel.png",
      category: "growth_opportunities",
      metricLabel:
        "This ASIN has a sales gap of $9,540 when compared to similar ASINs",
      deltaAmount: 9540,
    },
    {
      asin: "B0SACOMP03",
      title: "Sanabul Compression Training Pants",
      imageUrl: "/products/sanabul-compression-pants.png",
      category: "growth_opportunities",
      metricLabel:
        "This ASIN has a sales gap of $6,820 when compared to similar ASINs",
      deltaAmount: 6820,
    },
    {
      asin: "B0SAWRST04",
      title: "Sanabul Wrist Wraps Pair",
      imageUrl: "/products/sanabul-wrist-wraps.png",
      category: "growth_opportunities",
      metricLabel:
        "This ASIN has a sales gap of $5,520 when compared to similar ASINs",
      deltaAmount: 5520,
    },
    {
      asin: "B0SADEB05",
      title: "Sanabul Double End Bag",
      imageUrl: "/products/sanabul-double-end-bag.png",
      category: "declining_sales",
      metricLabel: "$892.10 decline in ordered product sales",
      deltaAmount: -892.1,
    },
    {
      asin: "B0SAMITT06",
      title: "Sanabul Focus Mitts Pro Pair",
      imageUrl: "/products/sanabul-focus-mitts-pro.png",
      category: "increasing_sales",
      metricLabel: "$1,240.50 increase in ordered product sales",
      deltaAmount: 1240.5,
    },
    {
      asin: "B0SASHIN07",
      title: "Sanabul Shin and Instep Guards",
      imageUrl: "/products/sanabul-shin-instep.png",
      category: "increasing_traffic",
      metricLabel: "12% increase in page views",
      deltaAmount: 456.3,
    },
    {
      asin: "B0SAMESH08",
      title: "Sanabul Mesh Gear Laundry Bag",
      imageUrl: "/products/sanabul-mesh-gear-bag.png",
      category: "declining_traffic",
      metricLabel: "8% decline in page views",
      deltaAmount: -298.15,
    },
  ],
  ads: { spend: 428500, roas: 4.8, acos: 12.4 },
  conversion: { rate: 15.8, sessions: 1240000 },
};

export const amazonApexBundle = buildAmazonBundle(amazonApexDataConfig);
