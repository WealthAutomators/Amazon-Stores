import { buildAmazonBundle } from "@/data/stores/build-amazon-bundle";
import type { AmazonStoreDataConfig } from "@/types/store-data";

export const amazonApexDataConfig: AmazonStoreDataConfig = {
  timeSeriesSeed: 101,
  timeSeriesMultiplier: 1.12,
  timeSeriesProfile: "enterprise-twin-peak",
  seriesStart: "2024-05-15",
  seriesEnd: "2026-08-24",
  defaultAggregate: {
    label: "Selected date range",
    totalOrderItems: 688875,
    unitsOrdered: 751938,
    orderedProductSales: 15842091.6,
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
      title: "Sanabul Essential Boxing Gloves 14 oz Black",
      imageUrl: "/products/sanabul-boxing-gloves-14oz-black.png",
      category: "growth_opportunities",
      metricLabel:
        "This ASIN has a sales gap of $12,880 when compared to similar ASINs",
      deltaAmount: 12880,
    },
    {
      asin: "B0SAMEX02",
      title: "Sanabul Mexican Style Hand Wraps Blue Pair",
      imageUrl: "/products/sanabul-mexican-wraps-blue.png",
      category: "growth_opportunities",
      metricLabel:
        "This ASIN has a sales gap of $9,350 when compared to similar ASINs",
      deltaAmount: 9350,
    },
    {
      asin: "B0SABAG03",
      title: "Sanabul MMA Bag Gloves",
      imageUrl: "/products/sanabul-bag-gloves-pro.png",
      category: "growth_opportunities",
      metricLabel:
        "This ASIN has a sales gap of $7,220 when compared to similar ASINs",
      deltaAmount: 7220,
    },
    {
      asin: "B0SATHAI04",
      title: "Sanabul Muay Thai Pads Red Pair",
      imageUrl: "/products/sanabul-thai-pads-red.png",
      category: "growth_opportunities",
      metricLabel:
        "This ASIN has a sales gap of $5,910 when compared to similar ASINs",
      deltaAmount: 5910,
    },
    {
      asin: "B0SADEB05",
      title: "Sanabul Double End Bag Pro",
      imageUrl: "/products/sanabul-double-end-bag-pro.png",
      category: "declining_sales",
      metricLabel: "$861.40 decline in ordered product sales",
      deltaAmount: -861.4,
    },
    {
      asin: "B0SAJMP06",
      title: "Sanabul Leather Jump Rope",
      imageUrl: "/products/sanabul-leather-jump-rope.png",
      category: "increasing_sales",
      metricLabel: "$1,342.60 increase in ordered product sales",
      deltaAmount: 1342.6,
    },
    {
      asin: "B0SAWRST07",
      title: "Sanabul Pro Wrist Wraps Pair",
      imageUrl: "/products/sanabul-pro-wrist-wraps.png",
      category: "increasing_traffic",
      metricLabel: "10% increase in page views",
      deltaAmount: 421.3,
    },
    {
      asin: "B0SAMESH08",
      title: "Sanabul Mesh Gear Laundry Bag",
      imageUrl: "/products/sanabul-mesh-laundry-bag.png",
      category: "declining_traffic",
      metricLabel: "8% decline in page views",
      deltaAmount: -294.7,
    },
  ],
  ads: { spend: 428500, roas: 4.8, acos: 12.4 },
  conversion: { rate: 15.8, sessions: 1240000 },
};

export const amazonApexBundle = buildAmazonBundle(amazonApexDataConfig);
