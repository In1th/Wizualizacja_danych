import type { ChartDefinition } from "../../../../interfaces/ChartDefinition";
import { miasta_oferty_dolnoslaskie } from "./miasta_oferty_dolnoslaskie";
import { miasta_oferty_kujawskopomorskie } from "./miasta_oferty_kujawsko_pomorskie";
import { miasta_oferty_lodzkie } from "./miasta_oferty_lodzkie";
import { miasta_oferty_lubelskie } from "./miasta_oferty_lubelskie";
import { miasta_oferty_lubuskie } from "./miasta_oferty_lubuskie";
import { miasta_oferty_malopolskie } from "./miasta_oferty_malopolskie";
import { miasta_oferty_mazowieckie } from "./miasta_oferty_mazowieckie";
import { miasta_oferty_ogolnie } from "./miasta_oferty_ogolnie";
import { miasta_oferty_opolskie } from "./miasta_oferty_opolskie";
import { miasta_oferty_podkarpackie } from "./miasta_oferty_podkarpackie";
import { miasta_oferty_podlaskie } from "./miasta_oferty_podlaskie";
import { miasta_oferty_pomorskie } from "./miasta_oferty_pomorskie";
import { miasta_oferty_slaskie } from "./miasta_oferty_slaskie";
import { miasta_oferty_swietokrzyskie } from "./miasta_oferty_swietokrzyskie";
import { miasta_oferty_warminskomazurskie } from "./miasta_oferty_warminsko_mazurskie";
import { miasta_oferty_wielkopolskie } from "./miasta_oferty_wielkopolskie";
import { miasta_oferty_zachodniopomorskie } from "./miasta_oferty_zachodniopomorskie";

export const miastaOferty: ChartDefinition<"bar", "chart_per_voivodeship"> = {
  title: "Ilość ofert w danym mieście",
  dataType: "chart_per_voivodeship",
  chartType: "bar",
  unit: "zł",
  data: {
    dolnoslaskie: miasta_oferty_dolnoslaskie,
    kujawskopomorskie: miasta_oferty_kujawskopomorskie,
    lodzkie: miasta_oferty_lodzkie,
    lubelskie: miasta_oferty_lubelskie,
    lubuskie: miasta_oferty_lubuskie,
    malopolskie: miasta_oferty_malopolskie,
    mazowieckie: miasta_oferty_mazowieckie,
    opolskie: miasta_oferty_opolskie,
    podkarpackie: miasta_oferty_podkarpackie,
    podlaskie: miasta_oferty_podlaskie,
    pomorskie: miasta_oferty_pomorskie,
    slaskie: miasta_oferty_slaskie,
    swietokrzyskie: miasta_oferty_swietokrzyskie,
    warminskomazurskie: miasta_oferty_warminskomazurskie,
    wielkopolskie: miasta_oferty_wielkopolskie,
    zachodniopomorskie: miasta_oferty_zachodniopomorskie,
    ogolnie: miasta_oferty_ogolnie,
  },
};
