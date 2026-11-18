import { buildAmazonBundle } from "@/data/stores/build-amazon-bundle";
import type { AmazonStoreDataConfig } from "@/types/store-data";

export const amazonApexDataConfig: AmazonStoreDataConfig = {
  timeSeriesSeed: 101,
  timeSeriesMultiplier: 1.12,
  timeSeriesProfile: "enterprise-twin-peak",
  seriesStart: "2024-05-15",
  seriesEnd: "2026-11-19",
  defaultAggregate: {
    label: "Selected date range",
    totalOrderItems: 985104,
    unitsOrdered: 1075285,
    orderedProductSales: 22479734.88,
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
      asin: "B0SAGLR16",
      title: "Sanabul Essential Boxing Gloves 16 oz Black/Red",
      imageUrl: "/products/sanabul-boxing-gloves-16oz-red.png",
      category: "growth_opportunities",
      metricLabel:
        "This ASIN has a sales gap of $18,240 when compared to similar ASINs",
      deltaAmount: 18240,
    },
    {
      asin: "B0SAGQW02",
      title: "Sanabul Gel Quick Hand Wraps Black",
      imageUrl: "/products/sanabul-gel-quick-wraps.png",
      category: "growth_opportunities",
      metricLabel:
        "This ASIN has a sales gap of $13,190 when compared to similar ASINs",
      deltaAmount: 13190,
    },
    {
      asin: "B0SACMT03",
      title: "Sanabul Compression Training Tights Black",
      imageUrl: "/products/sanabul-compression-tights.png",
      category: "growth_opportunities",
      metricLabel:
        "This ASIN has a sales gap of $10,220 when compared to similar ASINs",
      deltaAmount: 10220,
    },
    {
      asin: "B0SAMGD04",
      title: "Sanabul Essential Mouth Guard with Case Black",
      imageUrl: "/products/sanabul-mouth-guard.png",
      category: "growth_opportunities",
      metricLabel:
        "This ASIN has a sales gap of $8,415 when compared to similar ASINs",
      deltaAmount: 8415,
    },
    {
      asin: "B0SADEB05",
      title: "Sanabul Double End Bag Red/Black",
      imageUrl: "/products/sanabul-double-end-bag.png",
      category: "declining_sales",
      metricLabel: "$1,689.40 decline in ordered product sales",
      deltaAmount: -1689.4,
    },
    {
      asin: "B0SAHDG06",
      title: "Sanabul Essential Boxing Headgear Black/Red",
      imageUrl: "/products/sanabul-headgear.png",
      category: "increasing_sales",
      metricLabel: "$472.15 increase in ordered product sales",
      deltaAmount: 472.15,
    },
    {
      asin: "B0SASHG07",
      title: "Sanabul Shin & Instep Guards Black/Red Pair",
      imageUrl: "/products/sanabul-shin-guards.png",
      category: "increasing_traffic",
      metricLabel: "3% increase in page views",
      deltaAmount: 128.6,
    },
    {
      asin: "B0SAGDF08",
      title: "Sanabul Gym Duffel Bag Black/Red",
      imageUrl: "/products/sanabul-gym-duffel.png",
      category: "declining_traffic",
      metricLabel: "18% decline in page views",
      deltaAmount: -775.6,
    },
  ],
  ads: { spend: 428500, roas: 4.8, acos: 12.4 },
  conversion: { rate: 15.8, sessions: 1240000 },
};

export const amazonApexBundle = buildAmazonBundle(amazonApexDataConfig);
