import {
  QUARTER_SCALES,
  type ChartDefinition,
} from "../../../interfaces/ChartDefinition";
import { medianaCenZaM2Datasets } from "./bdl/generated/medianaCenZaM2Datasets";

export const medianaCenZaM2: ChartDefinition<
  "connectedScatter",
  "dataset_per_voivodeship"
> = {
  chartType: "connectedScatter",
  groupingType: "dataset_per_voivodeship",
  title:
    "Mediana cen za 1 m² lokali mieszkalnych sprzedanych w ramach transakcji rynkowych",
  unit: "zł",
  data: {
    datasets: <any>medianaCenZaM2Datasets,
  },
  options: {
    ...QUARTER_SCALES,
  },
};
