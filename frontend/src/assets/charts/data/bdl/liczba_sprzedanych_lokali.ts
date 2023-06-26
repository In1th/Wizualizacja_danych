import {
  QUARTER_SCALES,
  type ChartDefinition,
} from "../../../../interfaces/ChartDefinition";
import { liczbaSprzedanychLokali1IzboweDatasets } from "./generated/liczbaSprzedanychLokali1IzboweDatasets";
import { liczbaSprzedanychLokali2IzboweDatasets } from "./generated/liczbaSprzedanychLokali2IzboweDatasets";
import { liczbaSprzedanychLokali3IzboweDatasets } from "./generated/liczbaSprzedanychLokali3IzboweDatasets";
import { liczbaSprzedanychLokali4IzboweIWiekszeDatasets } from "./generated/liczbaSprzedanychLokali4IzboweIWiekszeDatasets";
import { liczbaSprzedanychLokaliOgolemDatasets } from "./generated/liczbaSprzedanychLokaliOgolemDatasets";

export const liczbaSprzedanychLokali1Izbowe: ChartDefinition<
  "connectedScatter",
  "dataset_per_voivodeship"
> = {
  chartType: "connectedScatter",
  groupingType: "dataset_per_voivodeship",
  title: "Liczba sprzedanych lokali (1 izbowe)",
  unit: "zł",
  data: {
    datasets: <any>liczbaSprzedanychLokali1IzboweDatasets,
  },
  options: {
    ...QUARTER_SCALES,
  },
};

export const liczbaSprzedanychLokali2Izbowe: ChartDefinition<
  "connectedScatter",
  "dataset_per_voivodeship"
> = {
  chartType: "connectedScatter",
  groupingType: "dataset_per_voivodeship",
  title: "Liczba sprzedanych lokali (2 izbowe)",
  unit: "zł",
  data: {
    datasets: <any>liczbaSprzedanychLokali2IzboweDatasets,
  },
  options: {
    ...QUARTER_SCALES,
  },
};

export const liczbaSprzedanychLokali3Izbowe: ChartDefinition<
  "connectedScatter",
  "dataset_per_voivodeship"
> = {
  chartType: "connectedScatter",
  groupingType: "dataset_per_voivodeship",
  title: "Liczba sprzedanych lokali (3 izbowe)",
  unit: "zł",
  data: {
    datasets: <any>liczbaSprzedanychLokali3IzboweDatasets,
  },
  options: {
    ...QUARTER_SCALES,
  },
};

export const liczbaSprzedanychLokali4IzboweIWieksze: ChartDefinition<
  "connectedScatter",
  "dataset_per_voivodeship"
> = {
  chartType: "connectedScatter",
  groupingType: "dataset_per_voivodeship",
  title: "Liczba sprzedanych lokali (≥4 izbowe)",
  unit: "zł",
  data: {
    datasets: <any>liczbaSprzedanychLokali4IzboweIWiekszeDatasets,
  },
  options: {
    ...QUARTER_SCALES,
  },
};

export const liczbaSprzedanychLokaliOgolem: ChartDefinition<
  "connectedScatter",
  "dataset_per_voivodeship"
> = {
  chartType: "connectedScatter",
  groupingType: "dataset_per_voivodeship",
  title: "Liczba sprzedanych lokali (ogółem)",
  unit: "zł",
  data: {
    datasets: <any>liczbaSprzedanychLokaliOgolemDatasets,
  },
  options: {
    ...QUARTER_SCALES,
  },
};
