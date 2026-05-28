"use client";

import { useState } from "react";
import {
  format,
  parseISO,
  isAfter,
  isBefore,
  startOfDay,
} from "date-fns";
import { Calendar } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { formatDisplayDate } from "@/lib/format-date";
import { cn } from "@/lib/utils";
import type { DatePreset, DateRange } from "@/types/common";

import "react-day-picker/style.css";

interface AmazonDateRangePickerProps {
  preset: DatePreset;
  range: DateRange;
  onPresetChange: (preset: DatePreset) => void;
  onRangeChange: (range: DateRange) => void;
}

type ActiveField = "start" | "end" | null;

function toIso(date: Date): string {
  return format(date, "yyyy-MM-dd");
}

const AMAZON_CALENDAR_CLASS_NAMES = {
  root: "amazon-day-picker rdp-root",
  months: "rdp-months",
  month: "rdp-month",
  month_caption: "rdp-month_caption",
  caption_label: "rdp-caption_label",
  nav: "rdp-nav",
  button_previous: "rdp-button_previous",
  button_next: "rdp-button_next",
  month_grid: "rdp-month_grid",
  weekdays: "rdp-weekdays",
  weekday: "rdp-weekday",
  week: "rdp-week",
  day: "rdp-day",
  day_button: "rdp-day_button",
  selected: "rdp-selected",
  outside: "rdp-outside",
  today: "rdp-today",
} as const;

function getAnchorDate(range: DateRange, field: "start" | "end"): Date {
  return parseISO(field === "start" ? range.start : range.end);
}

function getCalendarModifiers(field: "start" | "end", anchorDay: Date) {
  if (field === "start") {
    return {
      beforeAnchor: (date: Date) => isBefore(startOfDay(date), anchorDay),
    };
  }
  return {
    afterAnchor: (date: Date) => isAfter(startOfDay(date), anchorDay),
  };
}

const START_MODIFIER_CLASS_NAMES = {
  beforeAnchor: "rdp-day-before-anchor",
} as const;

const END_MODIFIER_CLASS_NAMES = {
  afterAnchor: "rdp-day-after-anchor",
} as const;

export function AmazonDateRangePicker({
  preset,
  range,
  onPresetChange,
  onRangeChange,
}: AmazonDateRangePickerProps) {
  const [activeField, setActiveField] = useState<ActiveField>(null);
  const [openField, setOpenField] = useState<ActiveField>(null);

  const handleDayClick = (date: Date | undefined, field: "start" | "end") => {
    if (!date) return;
    const clickedDay = startOfDay(date);
    const clickedIso = toIso(date);

    if (field === "start") {
      const currentEnd = parseISO(range.end);
      const nextEnd = isAfter(clickedDay, currentEnd) ? clickedIso : range.end;
      onRangeChange({ start: clickedIso, end: nextEnd });
    } else {
      const currentStart = parseISO(range.start);
      const nextStart = isBefore(clickedDay, currentStart)
        ? clickedIso
        : range.start;
      onRangeChange({ start: nextStart, end: clickedIso });
    }

    onPresetChange("custom");
  };

  return (
    <div className="flex flex-wrap items-end gap-2">
      <div className="space-y-0.5">
        <Label className="text-[11px] font-bold text-[#111111]">Date</Label>
        <Select
          value={preset}
          onValueChange={(v) => onPresetChange(v as DatePreset)}
        >
          <SelectTrigger className="h-[34px] w-[96px] rounded-sm border-[#d5d9d9] bg-white text-[12px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="custom">Custom</SelectItem>
            <SelectItem value="7d">Last 7 days</SelectItem>
            <SelectItem value="30d">Last 30 days</SelectItem>
            <SelectItem value="90d">Last 90 days</SelectItem>
            <SelectItem value="ytd">Year to date</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex gap-2">
        {(["start", "end"] as const).map((field) => {
          const isActive = activeField === field || openField === field;
          const display =
            field === "start"
              ? formatDisplayDate(range.start)
              : formatDisplayDate(range.end);
          const anchorDate = getAnchorDate(range, field);
          const anchorDay = startOfDay(anchorDate);

          return (
            <Popover
              key={field}
              open={openField === field}
              onOpenChange={(open) => {
                setOpenField(open ? field : null);
                if (open) setActiveField(field);
                else if (activeField === field) setActiveField(null);
              }}
            >
              <PopoverTrigger asChild>
                <button
                  type="button"
                  className={cn(
                    "relative flex h-[34px] w-[112px] items-center rounded-sm border bg-white pl-7 pr-2 text-left text-[12px] text-[#111111]",
                    isActive
                      ? "border-[#008296] ring-1 ring-[#008296]"
                      : "border-[#d5d9d9] hover:border-[#008296]"
                  )}
                  onFocus={() => setActiveField(field)}
                >
                  <Calendar className="pointer-events-none absolute left-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#565959]" />
                  <span className="truncate">{display}</span>
                </button>
              </PopoverTrigger>
              <PopoverContent
                align="start"
                sideOffset={2}
                className={cn(
                  "w-auto min-w-[240px] overflow-hidden rounded-sm border border-[#adb1b8] bg-white p-0 shadow-[0_1px_3px_rgba(0,0,0,0.12)]",
                  "data-[state=open]:animate-none data-[state=closed]:animate-none"
                )}
              >
                <DayPicker
                  key={`${field}-${range.start}-${range.end}`}
                  mode="single"
                  navLayout="around"
                  showOutsideDays
                  selected={anchorDate}
                  onSelect={(date) => handleDayClick(date, field)}
                  defaultMonth={anchorDate}
                  modifiers={getCalendarModifiers(field, anchorDay)}
                  modifiersClassNames={
                    field === "start"
                      ? START_MODIFIER_CLASS_NAMES
                      : END_MODIFIER_CLASS_NAMES
                  }
                  classNames={AMAZON_CALENDAR_CLASS_NAMES}
                />
              </PopoverContent>
            </Popover>
          );
        })}
      </div>
    </div>
  );
}
