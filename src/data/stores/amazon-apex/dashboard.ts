import { buildAmazonBundle } from "@/data/stores/build-amazon-bundle";
import type { AmazonStoreDataConfig } from "@/types/store-data";

export const amazonApexDataConfig: AmazonStoreDataConfig = {
  timeSeriesSeed: 101,
  timeSeriesMultiplier: 1.12,
  timeSeriesProfile: "enterprise-twin-peak",
  seriesStart: "2024-05-15",
  seriesEnd: "2026-10-05",
  defaultAggregate: {
    label: "Selected date range",
    totalOrderItems: 849406,
    unitsOrdered: 927163,
    orderedProductSales: 19533816.96,
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
      asin: "B0SAGLB14",
      title: "Sanabul Essential Boxing Gloves 14 oz Black/Red",
      imageUrl: "/products/sanabul-boxing-gloves-14oz-black-red.jpg",
      category: "growth_opportunities",
      metricLabel:
        "This ASIN has a sales gap of $12,780 when compared to similar ASINs",
      deltaAmount: 12780,
    },
    {
      asin: "B0SAWRP02",
      title: "Sanabul 180\" Elastic Hand Wraps Black Pair",
      imageUrl: "/products/sanabul-hand-wraps-black-180.jpg",
      category: "growth_opportunities",
      metricLabel:
        "This ASIN has a sales gap of $9,410 when compared to similar ASINs",
      deltaAmount: 9410,
    },
    {
      asin: "B0SAHYB03",
      title: "Sanabul 7 oz MMA Hybrid Sparring Gloves Navy",
      imageUrl: "/products/sanabul-mma-hybrid-gloves-navy.jpg",
      category: "growth_opportunities",
      metricLabel:
        "This ASIN has a sales gap of $7,260 when compared to similar ASINs",
      deltaAmount: 7260,
    },
    {
      asin: "B0SADEB04",
      title: "Sanabul Double End Bag Black",
      imageUrl: "/products/sanabul-double-end-bag-black.jpg",
      category: "growth_opportunities",
      metricLabel:
        "This ASIN has a sales gap of $5,930 when compared to similar ASINs",
      deltaAmount: 5930,
    },
    {
      asin: "B0SAANK05",
      title: "Sanabul Boxing Ankle Support Sleeves Pair",
      imageUrl: "/products/sanabul-ankle-sleeves-black.jpg",
      category: "declining_sales",
      metricLabel: "$762.40 decline in ordered product sales",
      deltaAmount: -762.4,
    },
    {
      asin: "B0SAHGR06",
      title: "Sanabul Full-Face Training Headgear Red",
      imageUrl: "/products/sanabul-headgear-red-full.jpg",
      category: "increasing_sales",
      metricLabel: "$1,594.70 increase in ordered product sales",
      deltaAmount: 1594.7,
    },
    {
      asin: "B0SAPMT07",
      title: "Sanabul Curved Leather Punch Mitts Pair",
      imageUrl: "/products/sanabul-curved-punch-mitts.jpg",
      category: "increasing_traffic",
      metricLabel: "14% increase in page views",
      deltaAmount: 521.4,
    },
    {
      asin: "B0SAHOD08",
      title: "Sanabul Training Hoodie Heather Gray",
      imageUrl: "/products/sanabul-hoodie-gray.jpg",
      category: "declining_traffic",
      metricLabel: "8% decline in page views",
      deltaAmount: -283.1,
    },
  ],
  ads: { spend: 428500, roas: 4.8, acos: 12.4 },
  conversion: { rate: 15.8, sessions: 1240000 },
};

export const amazonApexBundle = buildAmazonBundle(amazonApexDataConfig);
