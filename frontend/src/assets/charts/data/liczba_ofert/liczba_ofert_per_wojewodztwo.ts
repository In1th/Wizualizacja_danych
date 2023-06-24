import type { ChartDefinition } from "../../../../interfaces/ChartDefinition";

export const liczbaOfertPerWojewodztwo: ChartDefinition<"pie", "global"> = {
  chartType: "pie",
  groupingType: "global",
  title: "Liczba ofert w województwie",
  unit: "",
  data: {
    labels: [
      "Dolnosląskie",
      "Kujawsko-pomorskie",
      "Lubelskie",
      "Lubuskie",
      "Łódzkie",
      "Małopolskie",
      "Mazowieckie",
      "Opolskie",
      "Podkarpackie",
      "Podlaskie",
      "Pomorskie",
      "Śląskie",
      "Świętokrzyskie",
      "Warmińsko-mazurskie",
      "Wielkopolskie",
      "Zachodniopomorskie",
    ],
    datasets: [
      {
        label: "Liczba ofert w wojewodztwie",
        backgroundColor: [
          "rgba(247, 70, 74, 0.5)",
          "rgba(70, 191, 189, 0.5)",
          "rgba(253, 180, 92, 0.5)",
          "rgba(148, 159, 177, 0.5)",
          "rgba(77, 83, 96, 0.5)",
          "rgba(139, 39, 91, 0.5)",
          "rgba(39, 140, 72, 0.5)",
          "rgba(106, 26, 189, 0.5)",
          "rgba(219, 14, 72, 0.5)",
          "rgba(219, 165, 14, 0.5)",
          "rgba(140, 219, 14, 0.5)",
          "rgba(72, 20, 125, 0.5)",
          "rgba(199, 153, 80, 0.5)",
          "rgba(14, 161, 22, 0.5)",
          "rgba(34, 212, 214, 0.5)",
          "rgba(15, 80, 232, 0.5)",
        ],
        hoverBackgroundColor: [
          "rgba(247, 70, 74, 1)",
          "rgba(70, 191, 189, 1)",
          "rgba(253, 180, 92, 1)",
          "rgba(148, 159, 177, 1)",
          "rgba(77, 83, 96, 1)",
          "rgba(139, 39, 91, 1)",
          "rgba(39, 140, 72, 1)",
          "rgba(106, 26, 189, 1)",
          "rgba(219, 14, 72, 1)",
          "rgba(219, 165, 14, 1)",
          "rgba(140, 219, 14, 1)",
          "rgba(72, 20, 125, 1)",
          "rgba(199, 153, 80, 1)",
          "rgba(14, 161, 22, 1)",
          "rgba(34, 212, 214, 1)",
          "rgba(15, 80, 232, 1)",
        ],
        data: [
          20307, 5030, 7652, 111, 6453, 11802, 25708, 336, 4502, 1571, 12685,
          14738, 3961, 2419, 11771, 4175,
        ],
      },
    ],
  },
};
