import type {
  ChartData,
  ChartOptions,
  ChartType,
  ScaleChartOptions,
} from "chart.js";
import type { Voivodeship } from "../store/mapStore";

export type CustomChartType = ChartType | "connectedScatter";
export type ChartGroupingType =
  | "global"
  | "dataset_per_voivodeship"
  | "chart_per_voivodeship";

export type ToStockChartType<T extends CustomChartType> = T extends ChartType
  ? T
  : T extends "connectedScatter"
  ? "scatter"
  : never;

export type ToChartDataType<
  C extends CustomChartType,
  G extends ChartGroupingType
> = G extends "global"
  ? ChartData<ToStockChartType<C>>
  : G extends "dataset_per_voivodeship"
  ? ChartData<ToStockChartType<C>> & {
      datasets: { label: Voivodeship }[];
    }
  : G extends "chart_per_voivodeship"
  ? Record<Voivodeship, ChartData<ToStockChartType<C>>>
  : never;

export type ChartDefinition<
  C extends CustomChartType,
  G extends ChartGroupingType
> = {
  title: string;
  unit: string;
  chartType: C;
  groupingType: G;
  data: ToChartDataType<C, G>;
  options?: ChartOptions<ToStockChartType<C>>;
};

export function assertGroupingType<G extends ChartGroupingType, T>(
  def: ChartDefinition<any, any>,
  dtype: G
): def is ChartDefinition<any, G> {
  return def.groupingType === dtype;
}

export const QUARTER_SCALES: ScaleChartOptions<any> = {
  scales: {
    x: {
      type: "time",
      time: {
        displayFormats: {
          quarter: "yyyy QQQ",
        },
        parser: "yyyy-QQQ",
        unit: "quarter",
        isoWeekday: false,
      },
    },
  },
};

export const MONTH_SCALES: ScaleChartOptions<any> = {
  scales: {
    x: {
      type: "time",
      time: {
        displayFormats: {
          month: "MMM yyyy",
        },
        parser: "yyyy-MM",
        unit: "month",
        isoWeekday: false,
      },
    },
  },
};
