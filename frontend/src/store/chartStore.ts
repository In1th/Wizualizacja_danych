import { writable, derived, get, type Readable } from "svelte/store";
import { mapStore, type Voivodeship, isVoivodeshipSelected } from "./mapStore";
import { liczbaPokoi } from "../assets/charts/data/liczba_pokoi/liczba_pokoi";
import { miastaOferty } from "../assets/charts/data/miasta_oferty/miasta_oferty";
import { cenaZaM2 } from "../assets/charts/data/cena_za_m2/cena_za_m2";
import { cenaNaPokoje } from "../assets/charts/data/cena_na_pokoje/cena_na_pokoje";
import { liczbaOfertPerWojewodztwo } from "../assets/charts/data/liczba_ofert/liczba_ofert_per_wojewodztwo";
import {
  assertGroupingType,
  type ChartDefinition,
  type ChartGroupingType,
  type CustomChartType,
} from "../interfaces/ChartDefinition";
import { plot, type PlotType } from "./store";
import type { ChartData, ChartType } from "chart.js";
import { demo } from "../assets/charts/data/demo";

export type ChartVisible =
  | "liczba pokoi"
  | "miasta oferty"
  | "cena za m2"
  | "cena za pokoje"
  | "liczba ofert per wojewodztwo"
  | "demo";

const dataMap: Record<
  ChartVisible,
  ChartDefinition<CustomChartType, ChartGroupingType>
> = {
  "liczba pokoi": liczbaPokoi,
  "miasta oferty": miastaOferty,
  "cena za m2": cenaZaM2,
  "cena za pokoje": cenaNaPokoje,
  "liczba ofert per wojewodztwo": liczbaOfertPerWojewodztwo,
  demo: demo,
};

export const currentChart = writable(
  "liczba ofert per wojewodztwo" as ChartVisible
);

export const currentChartType = derived(
  currentChart,
  ($chrt) => dataMap[$chrt].chartType
);

export const currentDataType = derived(
  currentChart,
  ($chrt) => dataMap[$chrt].groupingType
);

export const currentVisibleDatasets = derived(
  [currentChart, mapStore],
  ([$cc, $ms]) => {
    let def = dataMap[$cc];

    if (assertGroupingType(def, "global")) {
      return [...def.data.datasets.keys()];
    } else if (assertGroupingType(def, "chart_per_voivodeship")) {
      return [
        ...def.data[
          $ms.type === "single" ? <Voivodeship>$ms.value : "ogolnie"
        ].datasets.keys(),
      ];
    } else if (assertGroupingType(def, "dataset_per_voivodeship")) {
      return def.data.datasets.flatMap((ds, i) =>
        isVoivodeshipSelected(ds.label, $ms) ? [i] : []
      );
    }
  }
);

export const chartData: Readable<ChartData> = derived(
  [currentChart, mapStore],
  ([$cc, $ms]) => {
    let chart = dataMap[$cc];

    if (chart.groupingType === "global") return chart.data;

    if (chart.groupingType === "chart_per_voivodeship" && $ms.type === "single")
      return chart.data[<Voivodeship>$ms.value];

    if (chart.groupingType === "chart_per_voivodeship" && $ms.type === "none")
      return chart.data["ogolnie"];

    if (chart.groupingType === "dataset_per_voivodeship") return chart.data;

    return {};
  }
);

const DEFAULT_VOIVODESHIP = <Voivodeship>"malopolskie";

export function changeChart(ch: ChartVisible, anim: PlotType) {
  console.log(ch, anim);
  const prevSelection = get(mapStore);

  currentChart.set(ch);
  plot.toggle(anim);

  let currType = get(currentDataType);
  if (currType === "global") {
    mapStore.set({ type: "none" });
  } else if (
    prevSelection.type === "none" &&
    currType === "chart_per_voivodeship"
  ) {
    mapStore.set({ type: "single", value: DEFAULT_VOIVODESHIP });
  } else if (
    prevSelection.type === "none" &&
    currType === "dataset_per_voivodeship"
  ) {
    mapStore.set({ type: "multi", value: [DEFAULT_VOIVODESHIP] });
  } else if (
    prevSelection.type === "single" &&
    currType === "dataset_per_voivodeship"
  ) {
    mapStore.set({ type: "multi", value: [prevSelection.value] });
  } else if (
    prevSelection.type === "multi" &&
    currType === "chart_per_voivodeship"
  ) {
    mapStore.set({
      type: "single",
      value: [...prevSelection.value, DEFAULT_VOIVODESHIP][0],
    });
  }
}
