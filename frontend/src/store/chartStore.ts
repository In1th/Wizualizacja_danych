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
import type { ChartData, ChartOptions, ChartType } from "chart.js";
import {
  medianaCenRynkowychZaM2,
  medianaCenRynkowychZaM2Do40,
  medianaCenRynkowychZaM2Od40Do60,
  medianaCenRynkowychZaM2Od60Do80,
  medianaCenRynkowychZaM2Od80,
} from "../assets/charts/data/bdl/mediana_cen_rynkowych_za_m2";
import {
  sredniaCenRynkowychZaM2,
  sredniaCenRynkowychZaM2Do40,
  sredniaCenRynkowychZaM2Od40Do60,
  sredniaCenRynkowychZaM2Od60Do80,
  sredniaCenRynkowychZaM2Od80,
} from "../assets/charts/data/bdl/srednia_cen_rynkowych_za_m2";
import {
  mieszkaniaOddaneDoUzytkowaniaKomunalne,
  mieszkaniaOddaneDoUzytkowaniaNaSprzedazWynajem,
  mieszkaniaOddaneDoUzytkowaniaNaWynajem,
  mieszkaniaOddaneDoUzytkowaniaOgolem,
  mieszkaniaOddaneDoUzytkowaniaSpoldzielcze,
  mieszkaniaOddaneDoUzytkowaniaSpoleczneCzynszowe,
} from "../assets/charts/data/bdl/mieszkania_oddane_do_uzytkowania";
import {
  sredniaCenaLokali1Izbowe,
  sredniaCenaLokali2Izbowe,
  sredniaCenaLokali3Izbowe,
  sredniaCenaLokali4IzboweIWieksze,
  sredniaCenaLokaliOgolem,
} from "../assets/charts/data/bdl/srednia_cena_lokali";
import {
  liczbaSprzedanychLokali1Izbowe,
  liczbaSprzedanychLokali2Izbowe,
  liczbaSprzedanychLokali3Izbowe,
  liczbaSprzedanychLokali4IzboweIWieksze,
  liczbaSprzedanychLokaliOgolem,
} from "../assets/charts/data/bdl/liczba_sprzedanych_lokali";

export type ChartVisible =
  | "liczba pokoi"
  | "miasta oferty"
  | "cena za m2"
  | "cena za pokoje"
  | "liczba ofert per wojewodztwo"
  | "mediana cen rynkowych za m2"
  | "mediana cen rynkowych za m2 do 40"
  | "mediana cen rynkowych za m2 od 40 do 60"
  | "mediana cen rynkowych za m2 od 60 do 80"
  | "mediana cen rynkowych za m2 od 80"
  | "srednia cen rynkowych za m2"
  | "srednia cen rynkowych za m2 do 40"
  | "srednia cen rynkowych za m2 od 40 do 60"
  | "srednia cen rynkowych za m2 od 60 do 80"
  | "srednia cen rynkowych za m2 od 80"
  | "mieszkania oddane do uzytkowania ogolem"
  | "mieszkania oddane do uzytkowania komunalne"
  | "mieszkania oddane do uzytkowania sprzedaz wynajem"
  | "mieszkania oddane do uzytkowania wynajem"
  | "mieszkania oddane do uzytkowania spoldzielcze"
  | "mieszkania oddane do uzytkowania spoleczne czynszowe"
  | "srednia cena lokali ogolem"
  | "srednia cena lokali 1 izbowe"
  | "srednia cena lokali 2 izbowe"
  | "srednia cena lokali 3 izbowe"
  | "srednia cena lokali 4 izbowe i wieksze"
  | "liczba sprzedanych lokali ogolem"
  | "liczba sprzedanych lokali 1 izbowe"
  | "liczba sprzedanych lokali 2 izbowe"
  | "liczba sprzedanych lokali 3 izbowe"
  | "liczba sprzedanych lokali 4 izbowe i wieksze";

const dataMap: Record<ChartVisible, ChartDefinition<any, ChartGroupingType>> = {
  "liczba pokoi": liczbaPokoi,
  "miasta oferty": miastaOferty,
  "cena za m2": cenaZaM2,
  "cena za pokoje": cenaNaPokoje,
  "liczba ofert per wojewodztwo": liczbaOfertPerWojewodztwo,
  "mediana cen rynkowych za m2": medianaCenRynkowychZaM2,
  "mediana cen rynkowych za m2 do 40": medianaCenRynkowychZaM2Do40,
  "mediana cen rynkowych za m2 od 40 do 60": medianaCenRynkowychZaM2Od40Do60,
  "mediana cen rynkowych za m2 od 60 do 80": medianaCenRynkowychZaM2Od60Do80,
  "mediana cen rynkowych za m2 od 80": medianaCenRynkowychZaM2Od80,
  "srednia cen rynkowych za m2": sredniaCenRynkowychZaM2,
  "srednia cen rynkowych za m2 do 40": sredniaCenRynkowychZaM2Do40,
  "srednia cen rynkowych za m2 od 40 do 60": sredniaCenRynkowychZaM2Od40Do60,
  "srednia cen rynkowych za m2 od 60 do 80": sredniaCenRynkowychZaM2Od60Do80,
  "srednia cen rynkowych za m2 od 80": sredniaCenRynkowychZaM2Od80,
  "mieszkania oddane do uzytkowania komunalne":
    mieszkaniaOddaneDoUzytkowaniaKomunalne,
  "mieszkania oddane do uzytkowania ogolem":
    mieszkaniaOddaneDoUzytkowaniaOgolem,
  "mieszkania oddane do uzytkowania spoldzielcze":
    mieszkaniaOddaneDoUzytkowaniaSpoldzielcze,
  "mieszkania oddane do uzytkowania spoleczne czynszowe":
    mieszkaniaOddaneDoUzytkowaniaSpoleczneCzynszowe,
  "mieszkania oddane do uzytkowania sprzedaz wynajem":
    mieszkaniaOddaneDoUzytkowaniaNaSprzedazWynajem,
  "mieszkania oddane do uzytkowania wynajem":
    mieszkaniaOddaneDoUzytkowaniaNaWynajem,
  "srednia cena lokali ogolem": sredniaCenaLokaliOgolem,
  "srednia cena lokali 1 izbowe": sredniaCenaLokali1Izbowe,
  "srednia cena lokali 2 izbowe": sredniaCenaLokali2Izbowe,
  "srednia cena lokali 3 izbowe": sredniaCenaLokali3Izbowe,
  "srednia cena lokali 4 izbowe i wieksze": sredniaCenaLokali4IzboweIWieksze,
  "liczba sprzedanych lokali ogolem": liczbaSprzedanychLokaliOgolem,
  "liczba sprzedanych lokali 1 izbowe": liczbaSprzedanychLokali1Izbowe,
  "liczba sprzedanych lokali 2 izbowe": liczbaSprzedanychLokali2Izbowe,
  "liczba sprzedanych lokali 3 izbowe": liczbaSprzedanychLokali3Izbowe,
  "liczba sprzedanych lokali 4 izbowe i wieksze":
    liczbaSprzedanychLokali4IzboweIWieksze,
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

export const currentChartOptions = derived(
  currentChart,
  ($chrt) => dataMap[$chrt].options || {}
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
