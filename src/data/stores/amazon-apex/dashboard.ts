import { buildAmazonBundle } from "@/data/stores/build-amazon-bundle";
import type { AmazonStoreDataConfig } from "@/types/store-data";

export const amazonApexDataConfig: AmazonStoreDataConfig = {
  timeSeriesSeed: 101,
  timeSeriesMultiplier: 1.12,
  timeSeriesProfile: "enterprise-twin-peak",
  seriesStart: "2024-05-15",
  seriesEnd: "2026-11-13",
  defaultAggregate: {
    label: "Selected date range",
    totalOrderItems: 975641,
    unitsOrdered: 1064955,
    orderedProductSales: 22323048.39,
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
      asin: "B0SAGLK14",
      title: "Sanabul Essential Boxing Gloves 14 oz Black",
      imageUrl: "/products/sanabul-boxing-gloves-14oz-black.png",
      category: "growth_opportunities",
      metricLabel:
        "This ASIN has a sales gap of $16,180 when compared to similar ASINs",
      deltaAmount: 16180,
    },
    {
      asin: "B0SAMXW02",
      title: "Sanabul 180\" Mexican-Style Hand Wraps Blue",
      imageUrl: "/products/sanabul-mexican-wraps-blue.png",
      category: "growth_opportunities",
      metricLabel:
        "This ASIN has a sales gap of $11,725 when compared to similar ASINs",
      deltaAmount: 11725,
    },
    {
      asin: "B0SAFSH03",
      title: "Sanabul MMA Fight Shorts Black/Red",
      imageUrl: "/products/sanabul-fight-shorts.png",
      category: "growth_opportunities",
      metricLabel:
        "This ASIN has a sales gap of $9,055 when compared to similar ASINs",
      deltaAmount: 9055,
    },
    {
      asin: "B0SACUP04",
      title: "Sanabul Athletic Cup Protector with Supporter Black",
      imageUrl: "/products/sanabul-cup-protector.png",
      category: "growth_opportunities",
      metricLabel:
        "This ASIN has a sales gap of $7,490 when compared to similar ASINs",
      deltaAmount: 7490,
    },
    {
      asin: "B0SAMHB05",
      title: "Sanabul Mini Heavy Punching Bag Black",
      imageUrl: "/products/sanabul-mini-heavy-bag.png",
      category: "declining_sales",
      metricLabel: "$1,476.25 decline in ordered product sales",
      deltaAmount: -1476.25,
    },
    {
      asin: "B0SAANS06",
      title: "Sanabul Compression Ankle Supports Black Pair",
      imageUrl: "/products/sanabul-ankle-supports.png",
      category: "increasing_sales",
      metricLabel: "$538.90 increase in ordered product sales",
      deltaAmount: 538.9,
    },
    {
      asin: "B0SATPC07",
      title: "Sanabul Curved Thai Pads Crimson/Black Pair",
      imageUrl: "/products/sanabul-thai-pads-crimson.png",
      category: "increasing_traffic",
      metricLabel: "4% increase in page views",
      deltaAmount: 171.4,
    },
    {
      asin: "B0SAMGB08",
      title: "Sanabul Mesh Drawstring Gear Bag Black",
      imageUrl: "/products/sanabul-mesh-gear-bag.png",
      category: "declining_traffic",
      metricLabel: "16% decline in page views",
      deltaAmount: -689.4,
    },
  ],
  ads: { spend: 428500, roas: 4.8, acos: 12.4 },
  conversion: { rate: 15.8, sessions: 1240000 },
};

export const amazonApexBundle = buildAmazonBundle(amazonApexDataConfig);
