import type { ChartDefinition } from "../../../../interfaces/ChartDefinition";
import { cena_za_m2_dolnoslaskie } from "./cena_za_m2_dolnoslaskie";
import { cena_za_m2_kujawskopomorskie } from "./cena_za_m2_kujawsko_pomorskie";
import { cena_za_m2_lodzkie } from "./cena_za_m2_lodzkie";
import { cena_za_m2_lubelskie } from "./cena_za_m2_lubelskie";
import { cena_za_m2_lubuskie } from "./cena_za_m2_lubuskie";
import { cena_za_m2_malopolskie } from "./cena_za_m2_malopolskie";
import { cena_za_m2_mazowieckie } from "./cena_za_m2_mazowieckie";
import { cena_za_m2_ogolnie } from "./cena_za_m2_ogolnie";
import { cena_za_m2_opolskie } from "./cena_za_m2_opolskie";
import { cena_za_m2_podkarpackie } from "./cena_za_m2_podkarpackie";
import { cena_za_m2_podlaskie } from "./cena_za_m2_podlaskie";
import { cena_za_m2_pomorskie } from "./cena_za_m2_pomorskie";
import { cena_za_m2_slaskie } from "./cena_za_m2_slaskie";
import { cena_za_m2_swietokrzyskie } from "./cena_za_m2_swietokrzyskie";
import { cena_za_m2_warminsko_mazurskie } from "./cena_za_m2_warminsko_mazurskie";
import { cena_za_m2_wielkopolskie } from "./cena_za_m2_wielkopolskie";
import { cena_za_m2_zachodniopomorskie } from "./cena_za_m2_zachodniopomorskie";

export const cenaZaM2: ChartDefinition<"polarArea", "chart_per_voivodeship"> = {
  title: "Cena za m² w zależności od ilości pokoi",
  dataType: "chart_per_voivodeship",
  chartType: "polarArea",
  unit: "zł",
  data: {
    dolnoslaskie: cena_za_m2_dolnoslaskie,
    kujawskopomorskie: cena_za_m2_kujawskopomorskie,
    lodzkie: cena_za_m2_lodzkie,
    lubelskie: cena_za_m2_lubelskie,
    lubuskie: cena_za_m2_lubuskie,
    malopolskie: cena_za_m2_malopolskie,
    mazowieckie: cena_za_m2_mazowieckie,
    opolskie: cena_za_m2_opolskie,
    podkarpackie: cena_za_m2_podkarpackie,
    podlaskie: cena_za_m2_podlaskie,
    pomorskie: cena_za_m2_pomorskie,
    slaskie: cena_za_m2_slaskie,
    swietokrzyskie: cena_za_m2_swietokrzyskie,
    warminskomazurskie: cena_za_m2_warminsko_mazurskie,
    wielkopolskie: cena_za_m2_wielkopolskie,
    zachodniopomorskie: cena_za_m2_zachodniopomorskie,
    ogolnie: cena_za_m2_ogolnie,
  },
};
