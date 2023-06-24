import type { ChartDefinition } from "../../../../interfaces/ChartDefinition";
import { cena_na_pokoje_dolnoslaskie } from "./cena_na_pokoje_dolnoslaskie";
import { cena_na_pokoje_kujawsko_pomorskie } from "./cena_na_pokoje_kujawsko_pomorskie";
import { cena_na_pokoje_lodzkie } from "./cena_na_pokoje_lodzkie";
import { cena_na_pokoje_lubelskie } from "./cena_na_pokoje_lubelskie";
import { cena_na_pokoje_lubuskie } from "./cena_na_pokoje_lubuskie";
import { cena_na_pokoje_malopolskie } from "./cena_na_pokoje_malopolskie";
import { cena_na_pokoje_mazowieckie } from "./cena_na_pokoje_mazowieckie";
import { cena_na_pokoje_ogolnie } from "./cena_na_pokoje_ogolnie";
import { cena_na_pokoje_opolskie } from "./cena_na_pokoje_opolskie";
import { cena_na_pokoje_podkarpackie } from "./cena_na_pokoje_podkarpackie";
import { cena_na_pokoje_podlaskie } from "./cena_na_pokoje_podlaskie";
import { cena_na_pokoje_pomorskie } from "./cena_na_pokoje_pomorskie";
import { cena_na_pokoje_slaskie } from "./cena_na_pokoje_slaskie";
import { cena_na_pokoje_swietokrzyskie } from "./cena_na_pokoje_swietokrzyskie";
import { cena_na_pokoje_warminsko_mazurskie } from "./cena_na_pokoje_warminsko_mazurskie";
import { cena_na_pokoje_wielkopolskie } from "./cena_na_pokoje_wielkopolskie";
import { cena_na_pokoje_zachodniopomorskie } from "./cena_na_pokoje_zachodniopomorskie";

export const cenaNaPokoje: ChartDefinition<"bar", "chart_per_voivodeship"> = {
  title: "Cena grupowana według ilości pokoi",
  chartType: "bar",
  groupingType: "chart_per_voivodeship",
  unit: "zł",
  data: {
    dolnoslaskie: cena_na_pokoje_dolnoslaskie,
    kujawskopomorskie: cena_na_pokoje_kujawsko_pomorskie,
    lodzkie: cena_na_pokoje_lodzkie,
    lubelskie: cena_na_pokoje_lubelskie,
    lubuskie: cena_na_pokoje_lubuskie,
    malopolskie: cena_na_pokoje_malopolskie,
    mazowieckie: cena_na_pokoje_mazowieckie,
    opolskie: cena_na_pokoje_opolskie,
    podkarpackie: cena_na_pokoje_podkarpackie,
    podlaskie: cena_na_pokoje_podlaskie,
    pomorskie: cena_na_pokoje_pomorskie,
    slaskie: cena_na_pokoje_slaskie,
    swietokrzyskie: cena_na_pokoje_swietokrzyskie,
    warminskomazurskie: cena_na_pokoje_warminsko_mazurskie,
    wielkopolskie: cena_na_pokoje_wielkopolskie,
    zachodniopomorskie: cena_na_pokoje_zachodniopomorskie,
    ogolnie: cena_na_pokoje_ogolnie,
  },
};
