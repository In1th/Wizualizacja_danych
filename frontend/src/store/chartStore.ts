import { writable, derived } from "svelte/store";
import { mapStore } from "./mapStore";

import { liczba_pokoi_dolnoslaskie } from '../assets/charts/data/liczba_pokoi/liczba_pokoi_dolnoslaskie';
import { liczba_pokoi_kujawskopomorskie } from '../assets/charts/data/liczba_pokoi/liczba_pokoi_kujawskopomorskie';
import { liczba_pokoi_lodzkie } from '../assets/charts/data/liczba_pokoi/liczba_pokoi_lodzkie';
import { liczba_pokoi_lubelskie } from '../assets/charts/data/liczba_pokoi/liczba_pokoi_lubelskie';
import { liczba_pokoi_lubuskie } from '../assets/charts/data/liczba_pokoi/liczba_pokoi_lubuskie';
import { liczba_pokoi_malopolskie } from '../assets/charts/data/liczba_pokoi/liczba_pokoi_malopolskie';
import { liczba_pokoi_mazowieckie } from '../assets/charts/data/liczba_pokoi/liczba_pokoi_mazowieckie';
import { liczba_pokoi_opolskie } from '../assets/charts/data/liczba_pokoi/liczba_pokoi_opolskie';
import { liczba_pokoi_podkarpackie } from '../assets/charts/data/liczba_pokoi/liczba_pokoi_podkarpackie';
import { liczba_pokoi_podlaskie } from '../assets/charts/data/liczba_pokoi/liczba_pokoi_podlaskie';
import { liczba_pokoi_pomorskie } from '../assets/charts/data/liczba_pokoi/liczba_pokoi_pomorskie';
import { liczba_pokoi_slaskie } from '../assets/charts/data/liczba_pokoi/liczba_pokoi_slaskie';
import { liczba_pokoi_swietokrzyskie } from '../assets/charts/data/liczba_pokoi/liczba_pokoi_swietokrzyskie';
import { liczba_pokoi_warminskomazurskie } from '../assets/charts/data/liczba_pokoi/liczba_pokoi_warminskomazurskie';
import { liczba_pokoi_wielkopolskie } from '../assets/charts/data/liczba_pokoi/liczba_pokoi_wielkopolskie';
import { liczba_pokoi_zachodniopomorskie } from '../assets/charts/data/liczba_pokoi/liczba_pokoi_zachodniopomorskie';
import { liczba_pokoi_ogolnie } from "../assets/charts/data/liczba_pokoi/liczba_pokoi_ogolnie";
import { miasta_oferty_dolnoslaskie } from '../assets/charts/data/miasta_oferty/miasta_oferty_dolnoslaskie';
import { miasta_oferty_kujawskopomorskie } from '../assets/charts/data/miasta_oferty/miasta_oferty_kujawsko_pomorskie';
import { miasta_oferty_lodzkie } from '../assets/charts/data/miasta_oferty/miasta_oferty_lodzkie';
import { miasta_oferty_lubelskie } from '../assets/charts/data/miasta_oferty/miasta_oferty_lubelskie';
import { miasta_oferty_lubuskie } from '../assets/charts/data/miasta_oferty/miasta_oferty_lubuskie';
import { miasta_oferty_malopolskie } from '../assets/charts/data/miasta_oferty/miasta_oferty_malopolskie';
import { miasta_oferty_mazowieckie } from '../assets/charts/data/miasta_oferty/miasta_oferty_mazowieckie';
import { miasta_oferty_opolskie } from '../assets/charts/data/miasta_oferty/miasta_oferty_opolskie';
import { miasta_oferty_podkarpackie } from '../assets/charts/data/miasta_oferty/miasta_oferty_podkarpackie';
import { miasta_oferty_podlaskie } from '../assets/charts/data/miasta_oferty/miasta_oferty_podlaskie';
import { miasta_oferty_pomorskie } from '../assets/charts/data/miasta_oferty/miasta_oferty_pomorskie';
import { miasta_oferty_slaskie } from '../assets/charts/data/miasta_oferty/miasta_oferty_slaskie';
import { miasta_oferty_swietokrzyskie } from '../assets/charts/data/miasta_oferty/miasta_oferty_swietokrzyskie';
import { miasta_oferty_warminskomazurskie } from '../assets/charts/data/miasta_oferty/miasta_oferty_warminsko_mazurskie';
import { miasta_oferty_wielkopolskie } from '../assets/charts/data/miasta_oferty/miasta_oferty_wielkopolskie';
import { miasta_oferty_zachodniopomorskie } from '../assets/charts/data/miasta_oferty/miasta_oferty_zachodniopomorskie';
import { cena_za_m2_dolnoslaskie } from '../assets/charts/data/cena_za_m2/cena_za_m2_dolnoslaskie';
import { cena_za_m2_kujawskopomorskie } from '../assets/charts/data/cena_za_m2/cena_za_m2_kujawsko_pomorskie';
import { cena_za_m2_lodzkie } from '../assets/charts/data/cena_za_m2/cena_za_m2_lodzkie';
import { cena_za_m2_lubelskie } from '../assets/charts/data/cena_za_m2/cena_za_m2_lubelskie';
import { cena_za_m2_lubuskie } from '../assets/charts/data/cena_za_m2/cena_za_m2_lubuskie';
import { cena_za_m2_malopolskie } from '../assets/charts/data/cena_za_m2/cena_za_m2_malopolskie';
import { cena_za_m2_mazowieckie } from '../assets/charts/data/cena_za_m2/cena_za_m2_mazowieckie';
import { cena_za_m2_opolskie } from '../assets/charts/data/cena_za_m2/cena_za_m2_opolskie';
import { cena_za_m2_podkarpackie } from '../assets/charts/data/cena_za_m2/cena_za_m2_podkarpackie';
import { cena_za_m2_podlaskie } from '../assets/charts/data/cena_za_m2/cena_za_m2_podlaskie';
import { cena_za_m2_pomorskie } from '../assets/charts/data/cena_za_m2/cena_za_m2_pomorskie';
import { cena_za_m2_slaskie } from '../assets/charts/data/cena_za_m2/cena_za_m2_slaskie';
import { cena_za_m2_swietokrzyskie } from '../assets/charts/data/cena_za_m2/cena_za_m2_swietokrzyskie';
import { cena_za_m2_warminsko_mazurskie } from '../assets/charts/data/cena_za_m2/cena_za_m2_warminsko_mazurskie';
import { cena_za_m2_wielkopolskie } from '../assets/charts/data/cena_za_m2/cena_za_m2_wielkopolskie';
import { cena_za_m2_zachodniopomorskie } from '../assets/charts/data/cena_za_m2/cena_za_m2_zachodniopomorskie';
import { cena_za_m2_ogolnie } from "../assets/charts/data/cena_za_m2/cena_za_m2_ogolnie";
import { cena_na_pokoje_dolnoslaskie } from '../assets/charts/data/cena_na_pokoje/cena_na_pokoje_dolnoslaskie';
import { cena_na_pokoje_kujawsko_pomorskie } from '../assets/charts/data/cena_na_pokoje/cena_na_pokoje_kujawsko_pomorskie';
import { cena_na_pokoje_lodzkie } from '../assets/charts/data/cena_na_pokoje/cena_na_pokoje_lodzkie';
import { cena_na_pokoje_lubelskie } from '../assets/charts/data/cena_na_pokoje/cena_na_pokoje_lubelskie';
import { cena_na_pokoje_lubuskie } from '../assets/charts/data/cena_na_pokoje/cena_na_pokoje_lubuskie';
import { cena_na_pokoje_malopolskie } from '../assets/charts/data/cena_na_pokoje/cena_na_pokoje_malopolskie';
import { cena_na_pokoje_mazowieckie } from '../assets/charts/data/cena_na_pokoje/cena_na_pokoje_mazowieckie';
import { cena_na_pokoje_opolskie } from '../assets/charts/data/cena_na_pokoje/cena_na_pokoje_opolskie';
import { cena_na_pokoje_podkarpackie } from '../assets/charts/data/cena_na_pokoje/cena_na_pokoje_podkarpackie';
import { cena_na_pokoje_podlaskie } from '../assets/charts/data/cena_na_pokoje/cena_na_pokoje_podlaskie';
import { cena_na_pokoje_pomorskie } from '../assets/charts/data/cena_na_pokoje/cena_na_pokoje_pomorskie';
import { cena_na_pokoje_slaskie } from '../assets/charts/data/cena_na_pokoje/cena_na_pokoje_slaskie';
import { cena_na_pokoje_swietokrzyskie } from '../assets/charts/data/cena_na_pokoje/cena_na_pokoje_swietokrzyskie';
import { cena_na_pokoje_warminsko_mazurskie } from '../assets/charts/data/cena_na_pokoje/cena_na_pokoje_warminsko_mazurskie';
import { cena_na_pokoje_wielkopolskie } from '../assets/charts/data/cena_na_pokoje/cena_na_pokoje_wielkopolskie';
import { cena_na_pokoje_zachodniopomorskie } from '../assets/charts/data/cena_na_pokoje/cena_na_pokoje_zachodniopomorskie';
import { cena_na_pokoje_ogolnie } from "../assets/charts/data/cena_na_pokoje/cena_na_pokoje_ogolnie";
import { liczba_ofert_per_wojewodztwo } from '../assets/charts/data/liczba_ofert/liczba_ofert_per_wojewodztwo';

export type ChartVisible  =
  'liczba pokoi'
  | 'miasta oferty'
  | 'cena za m2'
  | 'cena za pokoje'
  | 'liczba ofert per wojewodztwo'
  | 'cena za pokoje ogolnie'
  | 'cena za m2 ogolnie'
  | 'liczba pokoi ogolnie'

export type ChartType = 
  'polar area'
  | 'bar'
  | 'pie'
  | 'bubble'
  | 'connected scatter'

const chartMap: {[key: string]: ChartType} = {
    'liczba pokoi' : 'bubble',
    'miasta oferty' : 'bar',
    'cena za m2' : 'polar area',
    'cena za pokoje' : 'connected scatter',
    'liczba ofert per wojewodztwo' : 'pie',
    'cena za pokoje ogolnie' : 'connected scatter',
    'cena za m2 ogolnie' : 'polar area',
    'liczba pokoi ogolnie' : 'bubble'
}

const dataMap = {
    'liczba pokoi podkarpackie': liczba_pokoi_podkarpackie,
    'liczba pokoi malopolskie': liczba_pokoi_malopolskie,
    'liczba pokoi slaskie': liczba_pokoi_slaskie,
    'liczba pokoi opolskie': liczba_pokoi_opolskie,
    'liczba pokoi dolnoslaskie': liczba_pokoi_dolnoslaskie,
    'liczba pokoi swietokrzyskie': liczba_pokoi_swietokrzyskie,
    'liczba pokoi lubelskie': liczba_pokoi_lubelskie,
    'liczba pokoi lodzkie': liczba_pokoi_lodzkie,
    'liczba pokoi mazowieckie': liczba_pokoi_mazowieckie,
    'liczba pokoi wielkopolskie': liczba_pokoi_wielkopolskie,
    'liczba pokoi lubuskie': liczba_pokoi_lubuskie,
    'liczba pokoi kujawskopomorskie': liczba_pokoi_kujawskopomorskie,
    'liczba pokoi podlaskie': liczba_pokoi_podlaskie,
    'liczba pokoi zachodniopomorskie': liczba_pokoi_zachodniopomorskie,
    'liczba pokoi warminskomazurskie': liczba_pokoi_warminskomazurskie,
    'liczba pokoi pomorskie': liczba_pokoi_pomorskie,
    'liczba pokoi ogolnie': liczba_pokoi_ogolnie,

    'miasta oferty podkarpackie': miasta_oferty_podkarpackie,
    'miasta oferty malopolskie': miasta_oferty_malopolskie,
    'miasta oferty slaskie': miasta_oferty_slaskie,
    'miasta oferty opolskie': miasta_oferty_opolskie,
    'miasta oferty dolnoslaskie': miasta_oferty_dolnoslaskie,
    'miasta oferty swietokrzyskie': miasta_oferty_swietokrzyskie,
    'miasta oferty lubelskie': miasta_oferty_lubelskie,
    'miasta oferty lodzkie': miasta_oferty_lodzkie,
    'miasta oferty mazowieckie': miasta_oferty_mazowieckie,
    'miasta oferty wielkopolskie': miasta_oferty_wielkopolskie,
    'miasta oferty lubuskie': miasta_oferty_lubuskie,
    'miasta oferty kujawskopomorskie': miasta_oferty_kujawskopomorskie,
    'miasta oferty podlaskie': miasta_oferty_podlaskie,
    'miasta oferty zachodniopomorskie': miasta_oferty_zachodniopomorskie,
    'miasta oferty warminskomazurskie': miasta_oferty_warminskomazurskie,
    'miasta oferty pomorskie': miasta_oferty_pomorskie,

    'cena za m2 podkarpackie': cena_za_m2_podkarpackie,
    'cena za m2 malopolskie': cena_za_m2_malopolskie,
    'cena za m2 slaskie': cena_za_m2_slaskie,
    'cena za m2 opolskie': cena_za_m2_opolskie,
    'cena za m2 dolnoslaskie': cena_za_m2_dolnoslaskie,
    'cena za m2 swietokrzyskie': cena_za_m2_swietokrzyskie,
    'cena za m2 lubelskie': cena_za_m2_lubelskie,
    'cena za m2 lodzkie': cena_za_m2_lodzkie,
    'cena za m2 mazowieckie': cena_za_m2_mazowieckie,
    'cena za m2 wielkopolskie': cena_za_m2_wielkopolskie,
    'cena za m2 lubuskie': cena_za_m2_lubuskie,
    'cena za m2 kujawskopomorskie': cena_za_m2_kujawskopomorskie,
    'cena za m2 podlaskie': cena_za_m2_podlaskie,
    'cena za m2 zachodniopomorskie': cena_za_m2_zachodniopomorskie,
    'cena za m2 warminskomazurskie': cena_za_m2_warminsko_mazurskie,
    'cena za m2 pomorskie': cena_za_m2_pomorskie,
    'cena za m2 ogolnie': cena_za_m2_ogolnie,

    'cena za pokoje podkarpackie': cena_na_pokoje_podkarpackie,
    'cena za pokoje malopolskie': cena_na_pokoje_malopolskie,
    'cena za pokoje slaskie': cena_na_pokoje_slaskie,
    'cena za pokoje opolskie': cena_na_pokoje_opolskie,
    'cena za pokoje dolnoslaskie': cena_na_pokoje_dolnoslaskie,
    'cena za pokoje swietokrzyskie': cena_na_pokoje_swietokrzyskie,
    'cena za pokoje lubelskie': cena_na_pokoje_lubelskie,
    'cena za pokoje lodzkie': cena_na_pokoje_lodzkie,
    'cena za pokoje mazowieckie': cena_na_pokoje_mazowieckie,
    'cena za pokoje wielkopolskie': cena_na_pokoje_wielkopolskie,
    'cena za pokoje lubuskie': cena_na_pokoje_lubuskie,
    'cena za pokoje kujawskopomorskie': cena_na_pokoje_kujawsko_pomorskie,
    'cena za pokoje podlaskie': cena_na_pokoje_podlaskie,
    'cena za pokoje zachodniopomorskie': cena_na_pokoje_zachodniopomorskie,
    'cena za pokoje warminskomazurskie': cena_na_pokoje_warminsko_mazurskie,
    'cena za pokoje pomorskie': cena_na_pokoje_pomorskie,
    'cena za pokoje ogolnie': cena_na_pokoje_ogolnie,
    
    'liczba ofert per wojewodztwo podkarpackie': liczba_ofert_per_wojewodztwo,
    'liczba ofert per wojewodztwo malopolskie': liczba_ofert_per_wojewodztwo,
    'liczba ofert per wojewodztwo slaskie': liczba_ofert_per_wojewodztwo,
    'liczba ofert per wojewodztwo opolskie': liczba_ofert_per_wojewodztwo,
    'liczba ofert per wojewodztwo dolnoslaskie': liczba_ofert_per_wojewodztwo,
    'liczba ofert per wojewodztwo swietokrzyskie': liczba_ofert_per_wojewodztwo,
    'liczba ofert per wojewodztwo lubelskie': liczba_ofert_per_wojewodztwo,
    'liczba ofert per wojewodztwo lodzkie': liczba_ofert_per_wojewodztwo,
    'liczba ofert per wojewodztwo mazowieckie': liczba_ofert_per_wojewodztwo,
    'liczba ofert per wojewodztwo wielkopolskie': liczba_ofert_per_wojewodztwo,
    'liczba ofert per wojewodztwo lubuskie': liczba_ofert_per_wojewodztwo,
    'liczba ofert per wojewodztwo kujawskopomorskie': liczba_ofert_per_wojewodztwo,
    'liczba ofert per wojewodztwo podlaskie': liczba_ofert_per_wojewodztwo,
    'liczba ofert per wojewodztwo zachodniopomorskie': liczba_ofert_per_wojewodztwo,
    'liczba ofert per wojewodztwo warminskomazurskie': liczba_ofert_per_wojewodztwo,
    'liczba ofert per wojewodztwo pomorskie': liczba_ofert_per_wojewodztwo,
}

export const currentChart = writable('liczba ofert per wojewodztwo' as ChartVisible)
export const currentType = derived(currentChart, $chrt => chartMap[$chrt]);

export const chartData = derived([currentChart, mapStore], ([$cc, $ms]) => dataMap[`${$cc} ${$ms}`])