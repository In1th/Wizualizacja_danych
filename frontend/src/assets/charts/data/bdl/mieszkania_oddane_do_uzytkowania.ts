import {
  MONTH_SCALES,
  type ChartDefinition,
} from "../../../../interfaces/ChartDefinition";
import { mieszkaniaOddaneDoUzytkowaniaKomunalneDatasets } from "./generated/mieszkaniaOddaneDoUzytkowaniaKomunalneDatasets";
import { mieszkaniaOddaneDoUzytkowaniaNaSprzedazWynajemDatasets } from "./generated/mieszkaniaOddaneDoUzytkowaniaNaSprzedazWynajemDatasets";
import { mieszkaniaOddaneDoUzytkowaniaNaWynajemDatasets } from "./generated/mieszkaniaOddaneDoUzytkowaniaNaWynajemDatasets";
import { mieszkaniaOddaneDoUzytkowaniaOgolemDatasets } from "./generated/mieszkaniaOddaneDoUzytkowaniaOgolemDatasets";
import { mieszkaniaOddaneDoUzytkowaniaSpoldzielczeDatasets } from "./generated/mieszkaniaOddaneDoUzytkowaniaSpoldzielczeDatasets";
import { mieszkaniaOddaneDoUzytkowaniaSpoleczneCzynszoweDatasets } from "./generated/mieszkaniaOddaneDoUzytkowaniaSpoleczneCzynszoweDatasets";

export const mieszkaniaOddaneDoUzytkowaniaOgolem: ChartDefinition<
  "connectedScatter",
  "dataset_per_voivodeship"
> = {
  chartType: "connectedScatter",
  groupingType: "dataset_per_voivodeship",
  title: "Mieszkania oddane do użytkowania, ogółem",
  unit: "",
  data: {
    datasets: <any>mieszkaniaOddaneDoUzytkowaniaOgolemDatasets,
  },
  options: { ...MONTH_SCALES },
};

export const mieszkaniaOddaneDoUzytkowaniaKomunalne: ChartDefinition<
  "connectedScatter",
  "dataset_per_voivodeship"
> = {
  chartType: "connectedScatter",
  groupingType: "dataset_per_voivodeship",
  title: "Mieszkania oddane do użytkowania, komuunalne",
  unit: "",
  data: {
    datasets: <any>mieszkaniaOddaneDoUzytkowaniaKomunalneDatasets,
  },
  options: { ...MONTH_SCALES },
};

export const mieszkaniaOddaneDoUzytkowaniaNaSprzedazWynajem: ChartDefinition<
  "connectedScatter",
  "dataset_per_voivodeship"
> = {
  chartType: "connectedScatter",
  groupingType: "dataset_per_voivodeship",
  title: "Mieszkania oddane do użytkowania, na sprzedaż/wynajem",
  unit: "",
  data: {
    datasets: <any>mieszkaniaOddaneDoUzytkowaniaNaSprzedazWynajemDatasets,
  },
  options: { ...MONTH_SCALES },
};

export const mieszkaniaOddaneDoUzytkowaniaNaWynajem: ChartDefinition<
  "connectedScatter",
  "dataset_per_voivodeship"
> = {
  chartType: "connectedScatter",
  groupingType: "dataset_per_voivodeship",
  title: "Mieszkania oddane do użytkowania, na wynajem",
  unit: "",
  data: {
    datasets: <any>mieszkaniaOddaneDoUzytkowaniaNaWynajemDatasets,
  },
  options: { ...MONTH_SCALES },
};

export const mieszkaniaOddaneDoUzytkowaniaSpoldzielcze: ChartDefinition<
  "connectedScatter",
  "dataset_per_voivodeship"
> = {
  chartType: "connectedScatter",
  groupingType: "dataset_per_voivodeship",
  title: "Mieszkania oddane do użytkowania, spółdzielcze",
  unit: "",
  data: {
    datasets: <any>mieszkaniaOddaneDoUzytkowaniaSpoldzielczeDatasets,
  },
  options: { ...MONTH_SCALES },
};

export const mieszkaniaOddaneDoUzytkowaniaSpoleczneCzynszowe: ChartDefinition<
  "connectedScatter",
  "dataset_per_voivodeship"
> = {
  chartType: "connectedScatter",
  groupingType: "dataset_per_voivodeship",
  title: "Mieszkania oddane do użytkowania, społeczne czynszowe",
  unit: "",
  data: {
    datasets: <any>mieszkaniaOddaneDoUzytkowaniaSpoleczneCzynszoweDatasets,
  },
  options: { ...MONTH_SCALES },
};
