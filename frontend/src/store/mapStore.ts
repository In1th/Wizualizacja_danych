import { writable } from "svelte/store";

export type Voivodeship = 
    'podkarpackie'
    | 'malopolskie'
    | 'slaskie'
    | 'opolskie'
    | 'dolnoslaskie'
    | 'swietokrzyskie'
    | 'lubelskie'
    | 'lubelskie'
    | 'lodzkie'
    | 'mazowieckie'
    | 'wielkopolskie'
    | 'lubuskie'
    | 'kujawskopomorskie'   
    | 'podlaskie'
    | 'zachodniopomorskie'
    | 'warminskomazurskie'
    | 'pomorskie'
    | 'ogolnie';

export const mapStore = writable('ogolnie' as Voivodeship)