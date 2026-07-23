import { buildAmazonBundle } from "@/data/stores/build-amazon-bundle";
import type { AmazonStoreDataConfig } from "@/types/store-data";

export const amazonApexDataConfig: AmazonStoreDataConfig = {
  timeSeriesSeed: 101,
  timeSeriesMultiplier: 1.12,
  timeSeriesProfile: "enterprise-twin-peak",
  seriesStart: "2024-05-15",
  seriesEnd: "2026-07-23",
  defaultAggregate: {
    label: "Selected date range",
    totalOrderItems: 587255,
    unitsOrdered: 641013,
    orderedProductSales: 13505123.0,
    avgUnitsPerOrderItem: 1.09,
    avgSalesPerOrderItem: 23.0,
  },
  insights: {
    id: "sanabul-insights",
    paragraphs: [
      "In April 2026, your ordered product sales reached $445K, up approximately 18% year over year. Units ordered totaled 18,420 for the month with strong demand across boxing gloves and training gear.",
      "Marketplace total sales for the selected date range reached $10.2M on 486,034 units ordered, with average sales per order item holding near $23.00.",
      "Review Products with Growth Opportunities in the ASIN carousel—Sanabul kick pads, wraps, and training apparel SKUs show a measurable sales gap versus similar ASINs in your category.",
    ],
  },
  asinAlerts: [
    {
      asin: "B0SAKICK01",
      title: "Sanabul Essential Kick Pads Pair",
      imageUrl: "/products/sanabul-kick-pads.png",
      category: "growth_opportunities",
      metricLabel:
        "This ASIN has a sales gap of $13,280 when compared to similar ASINs",
      deltaAmount: 13280,
    },
    {
      asin: "B0SAELIT02",
      title: "Sanabul Elite Boxing Hand Wraps Blue",
      imageUrl: "/products/sanabul-elite-wraps-blue.png",
      category: "growth_opportunities",
      metricLabel:
        "This ASIN has a sales gap of $9,540 when compared to similar ASINs",
      deltaAmount: 9540,
    },
    {
      asin: "B0SAHOOD03",
      title: "Sanabul Training Hoodie",
      imageUrl: "/products/sanabul-training-hoodie.png",
      category: "growth_opportunities",
      metricLabel:
        "This ASIN has a sales gap of $6,820 when compared to similar ASINs",
      deltaAmount: 6820,
    },
    {
      asin: "B0SAANKL04",
      title: "Sanabul Ankle Supports Pair",
      imageUrl: "/products/sanabul-ankle-supports.png",
      category: "growth_opportunities",
      metricLabel:
        "This ASIN has a sales gap of $5,520 when compared to similar ASINs",
      deltaAmount: 5520,
    },
    {
      asin: "B0SACUP05",
      title: "Sanabul Boxing Cup Protector",
      imageUrl: "/products/sanabul-cup-protector.png",
      category: "declining_sales",
      metricLabel: "$892.10 decline in ordered product sales",
      deltaAmount: -892.1,
    },
    {
      asin: "B0SASPD06",
      title: "Sanabul Speed Bag Platform Kit",
      imageUrl: "/products/sanabul-speed-bag.png",
      category: "increasing_sales",
      metricLabel: "$1,240.50 increase in ordered product sales",
      deltaAmount: 1240.5,
    },
    {
      asin: "B0SAROP07",
      title: "Sanabul Leather Skipping Rope",
      imageUrl: "/products/sanabul-leather-jump-rope.png",
      category: "increasing_traffic",
      metricLabel: "12% increase in page views",
      deltaAmount: 456.3,
    },
    {
      asin: "B0SADUF08",
      title: "Sanabul Gym Duffel Bag",
      imageUrl: "/products/sanabul-gym-duffel.png",
      category: "declining_traffic",
      metricLabel: "8% decline in page views",
      deltaAmount: -298.15,
    },
  ],
  ads: { spend: 428500, roas: 4.8, acos: 12.4 },
  conversion: { rate: 15.8, sessions: 1240000 },
};

export const amazonApexBundle = buildAmazonBundle(amazonApexDataConfig);
