import type { ChartDefinition } from "../../../../interfaces/ChartDefinition";
import { liczba_pokoi_dolnoslaskie } from "./liczba_pokoi_dolnoslaskie";
import { liczba_pokoi_kujawskopomorskie } from "./liczba_pokoi_kujawskopomorskie";
import { liczba_pokoi_lodzkie } from "./liczba_pokoi_lodzkie";
import { liczba_pokoi_lubelskie } from "./liczba_pokoi_lubelskie";
import { liczba_pokoi_lubuskie } from "./liczba_pokoi_lubuskie";
import { liczba_pokoi_malopolskie } from "./liczba_pokoi_malopolskie";
import { liczba_pokoi_mazowieckie } from "./liczba_pokoi_mazowieckie";
import { liczba_pokoi_ogolnie } from "./liczba_pokoi_ogolnie";
import { liczba_pokoi_opolskie } from "./liczba_pokoi_opolskie";
import { liczba_pokoi_podkarpackie } from "./liczba_pokoi_podkarpackie";
import { liczba_pokoi_podlaskie } from "./liczba_pokoi_podlaskie";
import { liczba_pokoi_pomorskie } from "./liczba_pokoi_pomorskie";
import { liczba_pokoi_slaskie } from "./liczba_pokoi_slaskie";
import { liczba_pokoi_swietokrzyskie } from "./liczba_pokoi_swietokrzyskie";
import { liczba_pokoi_warminskomazurskie } from "./liczba_pokoi_warminskomazurskie";
import { liczba_pokoi_wielkopolskie } from "./liczba_pokoi_wielkopolskie";
import { liczba_pokoi_zachodniopomorskie } from "./liczba_pokoi_zachodniopomorskie";

export const liczbaPokoi: ChartDefinition<"bar", "chart_per_voivodeship"> = {
  title: "Ilość ofert w zależności od ilości pokoi",
  dataType: "chart_per_voivodeship",
  chartType: "bar",
  unit: "zł",
  data: {
    dolnoslaskie: liczba_pokoi_dolnoslaskie,
    kujawskopomorskie: liczba_pokoi_kujawskopomorskie,
    lodzkie: liczba_pokoi_lodzkie,
    lubelskie: liczba_pokoi_lubelskie,
    lubuskie: liczba_pokoi_lubuskie,
    malopolskie: liczba_pokoi_malopolskie,
    mazowieckie: liczba_pokoi_mazowieckie,
    opolskie: liczba_pokoi_opolskie,
    podkarpackie: liczba_pokoi_podkarpackie,
    podlaskie: liczba_pokoi_podlaskie,
    pomorskie: liczba_pokoi_pomorskie,
    slaskie: liczba_pokoi_slaskie,
    swietokrzyskie: liczba_pokoi_swietokrzyskie,
    warminskomazurskie: liczba_pokoi_warminskomazurskie,
    wielkopolskie: liczba_pokoi_wielkopolskie,
    zachodniopomorskie: liczba_pokoi_zachodniopomorskie,
    ogolnie: liczba_pokoi_ogolnie,
  },
};
