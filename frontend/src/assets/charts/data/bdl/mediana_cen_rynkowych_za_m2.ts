import {
  QUARTER_SCALES,
  type ChartDefinition,
} from "../../../../interfaces/ChartDefinition";
import { medianaCenRynkowychZaM2Datasets } from "./generated/medianaCenRynkowychZaM2Datasets";
import { medianaCenRynkowychZaM2Do40Datasets } from "./generated/medianaCenRynkowychZaM2Do40Datasets";
import { medianaCenRynkowychZaM2Od40Do60Datasets } from "./generated/medianaCenRynkowychZaM2Od40Do60Datasets";
import { medianaCenRynkowychZaM2Od60Do80Datasets } from "./generated/medianaCenRynkowychZaM2Od60Do80Datasets";
import { medianaCenRynkowychZaM2Od80Datasets } from "./generated/medianaCenRynkowychZaM2Od80Datasets";

export const medianaCenRynkowychZaM2: ChartDefinition<
  "connectedScatter",
  "dataset_per_voivodeship"
> = {
  chartType: "connectedScatter",
  groupingType: "dataset_per_voivodeship",
  title:
    "Mediana cen za 1 m² lokali mieszkalnych sprzedanych w ramach transakcji rynkowych",
  unit: "zł",
  data: {
    datasets: <any>medianaCenRynkowychZaM2Datasets,
  },
  options: {
    ...QUARTER_SCALES,
  },
};

export const medianaCenRynkowychZaM2Do40: ChartDefinition<
  "connectedScatter",
  "dataset_per_voivodeship"
> = {
  chartType: "connectedScatter",
  groupingType: "dataset_per_voivodeship",
  title:
    "Mediana cen za 1 m² lokali mieszkalnych sprzedanych w ramach transakcji rynkowych (<40 m²)",
  unit: "zł",
  data: {
    datasets: <any>medianaCenRynkowychZaM2Do40Datasets,
  },
  options: {
    ...QUARTER_SCALES,
  },
};

export const medianaCenRynkowychZaM2Od40Do60: ChartDefinition<
  "connectedScatter",
  "dataset_per_voivodeship"
> = {
  chartType: "connectedScatter",
  groupingType: "dataset_per_voivodeship",
  title:
    "Mediana cen za 1 m² lokali mieszkalnych sprzedanych w ramach transakcji rynkowych (40,1 - 60 m²)",
  unit: "zł",
  data: {
    datasets: <any>medianaCenRynkowychZaM2Od40Do60Datasets,
  },
  options: {
    ...QUARTER_SCALES,
  },
};

export const medianaCenRynkowychZaM2Od60Do80: ChartDefinition<
  "connectedScatter",
  "dataset_per_voivodeship"
> = {
  chartType: "connectedScatter",
  groupingType: "dataset_per_voivodeship",
  title:
    "Mediana cen za 1 m² lokali mieszkalnych sprzedanych w ramach transakcji rynkowych (60,1 - 80 m²)",
  unit: "zł",
  data: {
    datasets: <any>medianaCenRynkowychZaM2Od60Do80Datasets,
  },
  options: {
    ...QUARTER_SCALES,
  },
};

export const medianaCenRynkowychZaM2Od80: ChartDefinition<
  "connectedScatter",
  "dataset_per_voivodeship"
> = {
  chartType: "connectedScatter",
  groupingType: "dataset_per_voivodeship",
  title:
    "Mediana cen za 1 m² lokali mieszkalnych sprzedanych w ramach transakcji rynkowych (>80 m²)",
  unit: "zł",
  data: {
    datasets: <any>medianaCenRynkowychZaM2Od80Datasets,
  },
  options: {
    ...QUARTER_SCALES,
  },
};
