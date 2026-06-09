import { getRollingDashboardDateRange } from "@/lib/store/rolling-dashboard-range";

/** @deprecated Prefer getRollingDashboardDateRange() at runtime on the client. */
export const DEFAULT_AMAZON_DATE_RANGE = getRollingDashboardDateRange();

export const DEFAULT_WALMART_DATE_RANGE = getRollingDashboardDateRange();

export const MOCK_API_DELAY_MS = 450;

export const AMAZON_STORE_NAME = "Chokebody Enterprise";
