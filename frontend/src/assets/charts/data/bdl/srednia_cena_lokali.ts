import {
  QUARTER_SCALES,
  type ChartDefinition,
} from "../../../../interfaces/ChartDefinition";
import { sredniaCenaLokali1IzboweDatasets } from "./generated/sredniaCenaLokali1IzboweDatasets";
import { sredniaCenaLokali2IzboweDatasets } from "./generated/sredniaCenaLokali2IzboweDatasets";
import { sredniaCenaLokali3IzboweDatasets } from "./generated/sredniaCenaLokali3IzboweDatasets";
import { sredniaCenaLokali4IzboweIWiekszeDatasets } from "./generated/sredniaCenaLokali4IzboweIWiekszeDatasets";
import { sredniaCenaLokaliOgolemDatasets } from "./generated/sredniaCenaLokaliOgolemDatasets";

export const sredniaCenaLokali1Izbowe: ChartDefinition<
  "connectedScatter",
  "dataset_per_voivodeship"
> = {
  chartType: "connectedScatter",
  groupingType: "dataset_per_voivodeship",
  title: "Średnia cena lokali (1 izbowe)",
  unit: "zł",
  data: {
    datasets: <any>sredniaCenaLokali1IzboweDatasets,
  },
  options: {
    ...QUARTER_SCALES,
  },
};

export const sredniaCenaLokali2Izbowe: ChartDefinition<
  "connectedScatter",
  "dataset_per_voivodeship"
> = {
  chartType: "connectedScatter",
  groupingType: "dataset_per_voivodeship",
  title: "Średnia cena lokali (2 izbowe)",
  unit: "zł",
  data: {
    datasets: <any>sredniaCenaLokali2IzboweDatasets,
  },
  options: {
    ...QUARTER_SCALES,
  },
};

export const sredniaCenaLokali3Izbowe: ChartDefinition<
  "connectedScatter",
  "dataset_per_voivodeship"
> = {
  chartType: "connectedScatter",
  groupingType: "dataset_per_voivodeship",
  title: "Średnia cena lokali (3 izbowe)",
  unit: "zł",
  data: {
    datasets: <any>sredniaCenaLokali3IzboweDatasets,
  },
  options: {
    ...QUARTER_SCALES,
  },
};

export const sredniaCenaLokali4IzboweIWieksze: ChartDefinition<
  "connectedScatter",
  "dataset_per_voivodeship"
> = {
  chartType: "connectedScatter",
  groupingType: "dataset_per_voivodeship",
  title: "Średnia cena lokali (≥4 izbowe)",
  unit: "zł",
  data: {
    datasets: <any>sredniaCenaLokali4IzboweIWiekszeDatasets,
  },
  options: {
    ...QUARTER_SCALES,
  },
};

export const sredniaCenaLokaliOgolem: ChartDefinition<
  "connectedScatter",
  "dataset_per_voivodeship"
> = {
  chartType: "connectedScatter",
  groupingType: "dataset_per_voivodeship",
  title: "Średnia cena lokali (ogółem)",
  unit: "zł",
  data: {
    datasets: <any>sredniaCenaLokaliOgolemDatasets,
  },
  options: {
    ...QUARTER_SCALES,
  },
};
