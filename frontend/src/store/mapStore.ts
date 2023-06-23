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
    | 'pomorskie';

export const mapStore = writable('malopolskie' as Voivodeship)