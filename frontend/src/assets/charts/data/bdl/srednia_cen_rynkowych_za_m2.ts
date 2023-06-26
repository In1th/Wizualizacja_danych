import {
  QUARTER_SCALES,
  type ChartDefinition,
} from "../../../../interfaces/ChartDefinition";
import { sredniaCenRynkowychZaM2Datasets } from "./generated/sredniaCenRynkowychZaM2Datasets";
import { sredniaCenRynkowychZaM2Do40Datasets } from "./generated/sredniaCenRynkowychZaM2Do40Datasets";
import { sredniaCenRynkowychZaM2Od40Do60Datasets } from "./generated/sredniaCenRynkowychZaM2Od40Do60Datasets";
import { sredniaCenRynkowychZaM2Od60Do80Datasets } from "./generated/sredniaCenRynkowychZaM2Od60Do80Datasets";
import { sredniaCenRynkowychZaM2Od80Datasets } from "./generated/sredniaCenRynkowychZaM2Od80Datasets";

export const sredniaCenRynkowychZaM2: ChartDefinition<
  "connectedScatter",
  "dataset_per_voivodeship"
> = {
  chartType: "connectedScatter",
  groupingType: "dataset_per_voivodeship",
  title:
    "Średnia cen za 1 m² lokali mieszkalnych sprzedanych w ramach transakcji rynkowych",
  unit: "zł",
  data: {
    datasets: <any>sredniaCenRynkowychZaM2Datasets,
  },
  options: {
    ...QUARTER_SCALES,
  },
};

export const sredniaCenRynkowychZaM2Do40: ChartDefinition<
  "connectedScatter",
  "dataset_per_voivodeship"
> = {
  chartType: "connectedScatter",
  groupingType: "dataset_per_voivodeship",
  title:
    "Średnia cen za 1 m² lokali mieszkalnych sprzedanych w ramach transakcji rynkowych (<40 m²)",
  unit: "zł",
  data: {
    datasets: <any>sredniaCenRynkowychZaM2Do40Datasets,
  },
  options: {
    ...QUARTER_SCALES,
  },
};

export const sredniaCenRynkowychZaM2Od40Do60: ChartDefinition<
  "connectedScatter",
  "dataset_per_voivodeship"
> = {
  chartType: "connectedScatter",
  groupingType: "dataset_per_voivodeship",
  title:
    "Średnia cen za 1 m² lokali mieszkalnych sprzedanych w ramach transakcji rynkowych (40,1 - 60 m²)",
  unit: "zł",
  data: {
    datasets: <any>sredniaCenRynkowychZaM2Od40Do60Datasets,
  },
  options: {
    ...QUARTER_SCALES,
  },
};

export const sredniaCenRynkowychZaM2Od60Do80: ChartDefinition<
  "connectedScatter",
  "dataset_per_voivodeship"
> = {
  chartType: "connectedScatter",
  groupingType: "dataset_per_voivodeship",
  title:
    "Średnia cen za 1 m² lokali mieszkalnych sprzedanych w ramach transakcji rynkowych (60,1 - 80 m²)",
  unit: "zł",
  data: {
    datasets: <any>sredniaCenRynkowychZaM2Od60Do80Datasets,
  },
  options: {
    ...QUARTER_SCALES,
  },
};

export const sredniaCenRynkowychZaM2Od80: ChartDefinition<
  "connectedScatter",
  "dataset_per_voivodeship"
> = {
  chartType: "connectedScatter",
  groupingType: "dataset_per_voivodeship",
  title:
    "Średnia cen za 1 m² lokali mieszkalnych sprzedanych w ramach transakcji rynkowych (>80 m²)",
  unit: "zł",
  data: {
    datasets: <any>sredniaCenRynkowychZaM2Od80Datasets,
  },
  options: {
    ...QUARTER_SCALES,
  },
};
