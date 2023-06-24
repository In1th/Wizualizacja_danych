import { get, writable } from "svelte/store";

export type Voivodeship =
  | "podkarpackie"
  | "malopolskie"
  | "slaskie"
  | "opolskie"
  | "dolnoslaskie"
  | "swietokrzyskie"
  | "lubelskie"
  | "lubelskie"
  | "lodzkie"
  | "mazowieckie"
  | "wielkopolskie"
  | "lubuskie"
  | "kujawskopomorskie"
  | "podlaskie"
  | "zachodniopomorskie"
  | "warminskomazurskie"
  | "pomorskie"
  | "ogolnie";

export type MapSelection =
  | { type: "single"; value: Omit<Voivodeship, "ogolnie"> }
  | { type: "multi"; value: Omit<Voivodeship, "ogolnie">[] }
  | { type: "none" };

export const mapStore = writable(<MapSelection>{
  type: "none",
});

export function isVoivodeshipSelected(
  v: Voivodeship,
  ms: MapSelection | null = null
) {
  const sel = ms || get(mapStore);

  switch (sel.type) {
    case "single":
      return sel.value === v;
    case "multi":
      return sel.value.includes(v);
    case "none":
      return v === "ogolnie";
  }
}
