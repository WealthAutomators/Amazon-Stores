import {
  mulberry32,
  type AmazonDailyPoint,
} from "@/mock-data/generators/amazon-behavioral-series";

const LAST_90_DAYS = 90;
const SEED_OFFSET = 88090;

function percentile(values: number[], p: number): number {
  const positive = values.filter((v) => v > 0);
  if (positive.length === 0) return 1;
  const sorted = [...positive].sort((a, b) => a - b);
  const idx = Math.min(
    sorted.length - 1,
    Math.max(0, Math.ceil((p / 100) * sorted.length) - 1)
  );
  return Math.max(1, sorted[idx]);
}

function median(values: number[]): number {
  const positive = values.filter((v) => v > 0);
  if (positive.length === 0) return 0;
  const sorted = [...positive].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0
    ? (sorted[mid - 1] + sorted[mid]) / 2
    : sorted[mid];
}

export interface ApplyAmazonLast90DaysLiftOptions {
  seed: number;
  /** Defaults to false — recent days are added on top, totals may drift. */
  preserveTotals?: boolean;
}

/**
 * Lift only the last 90 calendar days of an Amazon series so the right side
 * of Compare Sales is visibly active (clustered bursts + healthy baseline),
 * without redesigning the full chart. Historical days (i < length - 90)
 * are left untouched. KPI cards read from defaultAggregate, so chart totals
 * are allowed to drift slightly above the configured target.
 */
export function applyAmazonLast90DaysLift(
  points: AmazonDailyPoint[],
  options: ApplyAmazonLast90DaysLiftOptions
): AmazonDailyPoint[] {
  const dayCount = points.length;
  if (dayCount === 0) return points;

  const liftStart = dayCount - LAST_90_DAYS;
  if (liftStart <= 0) return points;

  const historicalUnits = points.slice(0, liftStart).map((p) => p.unitsOrdered);
  const refPeak = percentile(historicalUnits, 98);

  const aspSamples: number[] = [];
  for (let i = 0; i < liftStart; i++) {
    const u = points[i].unitsOrdered;
    if (u > 0) {
      aspSamples.push(points[i].orderedProductSales / u);
    }
  }
  const aspMedian = median(aspSamples) || 25;

  const rand = mulberry32(options.seed + SEED_OFFSET);
  const recentLength = dayCount - liftStart;

  const burstFlag = new Array<boolean>(recentLength).fill(false);
  const clusterCount = 2 + Math.floor(rand() * 3);
  const last30Start = Math.max(0, recentLength - 30);

  for (let c = 0; c < clusterCount; c++) {
    const runLength = 2 + Math.floor(rand() * 3);
    const maxStart = Math.max(0, recentLength - runLength);
    // Guarantee the first cluster overlaps the last 30 days so the chart's
    // right edge always shows visible activity, regardless of seed.
    const lowerBound = c === 0 ? Math.max(0, last30Start - runLength + 1) : 0;
    const range = Math.max(0, maxStart - lowerBound);
    const startOffset = lowerBound + Math.floor(rand() * (range + 1));
    for (let k = 0; k < runLength; k++) {
      const idx = startOffset + k;
      if (idx >= 0 && idx < recentLength) burstFlag[idx] = true;
    }
  }

  const dipFlag = new Array<boolean>(recentLength).fill(false);
  for (let i = 0; i < recentLength; i++) {
    if (!burstFlag[i] && rand() < 0.15) dipFlag[i] = true;
  }

  const result = points.map((p) => ({ ...p }));

  for (let i = liftStart; i < dayCount; i++) {
    const offset = i - liftStart;
    const weekly = 1 + 0.06 * Math.sin((i / 7) * Math.PI * 2);
    const oldUnits = result[i].unitsOrdered;

    let target: number;
    if (burstFlag[offset]) {
      target = refPeak * (0.3 + rand() * 0.2) * weekly;
    } else if (dipFlag[offset]) {
      target = refPeak * (0.08 + rand() * 0.06) * weekly;
    } else {
      target = refPeak * (0.14 + rand() * 0.12) * weekly;
    }

    const blendedUnits = oldUnits * 0.25 + target * 0.75;
    const newUnits = Math.max(0, Math.round(blendedUnits));
    const newSales =
      Math.round(newUnits * aspMedian * (0.96 + rand() * 0.08) * 100) / 100;

    result[i] = {
      date: result[i].date,
      unitsOrdered: newUnits,
      orderedProductSales: Math.max(0, newSales),
    };
  }

  // preserveTotals defaults to false — totals drift up by the lifted delta.
  // KPI cards in the dashboard read defaultAggregate from config, not the
  // series sum, so this is intentional. If a caller ever opts in, we leave
  // the hook here for future implementation.
  void options.preserveTotals;

  return result;
}
