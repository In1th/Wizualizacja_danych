import type { ChartData, ChartType } from "chart.js";
import type { Voivodeship } from "../store/mapStore";

export type CustomChartType = ChartType | "connectedScatter";

export type ToStockChartType<T extends CustomChartType> = T extends ChartType
  ? T
  : T extends "connectedScatter"
  ? "scatter"
  : never;

export type ChartDefinition<
  CType extends CustomChartType,
  DType extends "global" | "dataset_per_voivodeship" | "chart_per_voivodeship"
> = {
  title: string;
  unit: string;
  chartType: CType;
  dataType: DType;
  data: DType extends "global"
    ? ChartData<ToStockChartType<CType>>
    : DType extends "dataset_per_voivodeship"
    ? ChartData<ToStockChartType<CType>> & {
        datasets: { label: Voivodeship }[];
      }
    : DType extends "chart_per_voivodeship"
    ? Record<Voivodeship, ChartData<ToStockChartType<CType>>>
    : never;
};

export function assertDtype<
  D extends "global" | "dataset_per_voivodeship" | "chart_per_voivodeship"
>(def: ChartDefinition<any, any>, dtype: D): def is ChartDefinition<any, D> {
  return def.dataType === dtype;
}
