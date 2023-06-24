import type { ChartDefinition } from "../../../interfaces/ChartDefinition";

export const demo: ChartDefinition<
  "connectedScatter",
  "dataset_per_voivodeship"
> = {
  chartType: "connectedScatter",
  dataType: "dataset_per_voivodeship",
  title: "Demo",
  unit: "",
  data: {
    labels: [69, 420, 2137, 9999],
    datasets: [
      {
        label: "dolnoslaskie",
        data: [1, 2, 3, 4],
      },
      {
        label: "kujawskopomorskie",
        data: [9, 7, 3, 1],
      },
      {
        label: "lodzkie",
        data: [13, 48, 9, 1],
      },
      {
        label: "lubelskie",
        data: [13, 48, 9, 1],
      },
      {
        label: "lubuskie",
        data: [3, 10, -4, 2],
      },
      {
        label: "malopolskie",
        data: [21, 39, -41, 2],
      },
      {
        label: "mazowieckie",
        data: [2, 1, 3, 7],
      },
      {
        label: "ogolnie",
        data: [4, 2, 0, 0],
      },
      {
        label: "opolskie",
        data: [10, 11, 12, 13],
      },
      {
        label: "podkarpackie",
        data: [98, 19, 30, 10],
      },
      {
        label: "podlaskie",
        data: [11, 11, 13, 13],
      },
      {
        label: "pomorskie",
        data: [69, 69, 69, 69],
      },
      {
        label: "slaskie",
        data: [9, 8, 9, 8],
      },
      {
        label: "swietokrzyskie",
        data: [0, 0, 0, 0],
      },
      {
        label: "warminskomazurskie",
        data: [1, 1, 1, 1],
      },
      {
        label: "wielkopolskie",
        data: [9, 8, 9, 9],
      },
      {
        label: "zachodniopomorskie",
        data: [0, 2, 4, 5],
      },
    ],
  },
};
