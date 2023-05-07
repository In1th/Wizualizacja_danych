Dane z Baz Danych Lokalnych Głównego Urzędu statystycznego (na poziomie województw).

# Zawartość

Pobrane zostały następujące tematy (`jq -r '.subjects | .[] | {id,name,dimensionTypes}' gus_bdl.json`):

```json
{
  "id": "P1719",
  "name": "Zasoby mieszkaniowe wg form własności",
  "dimensionTypes": [
    "Formy własności",
    "Zasoby mieszkaniowe"
  ]
}
{
  "id": "P1727",
  "name": "Zasoby mieszkaniowe gminne sprzedane",
  "dimensionTypes": [
    "Rodzaje budynków",
    "Mieszkania"
  ]
}
{
  "id": "P1737",
  "name": "Mieszkania wg form własności i wyposażenia",
  "dimensionTypes": [
    "Formy własności",
    "Wyposażenie"
  ]
}
{
  "id": "P2166",
  "name": "Zasoby mieszkaniowe",
  "dimensionTypes": [
    "Lokalizacje",
    "Zasoby mieszkaniowe wszystkie"
  ]
}
{
  "id": "P2352",
  "name": "Ubytki w zasobach mieszkaniowych",
  "dimensionTypes": [
    "Wyszczególnienie"
  ]
}
{
  "id": "P2430",
  "name": "Zasoby mieszkaniowe - wskaźniki",
  "dimensionTypes": [
    "Wskaźniki"
  ]
}
{
  "id": "P2762",
  "name": "Zasoby mieszkaniowe gmin (komunalne)",
  "dimensionTypes": [
    "Rodzaje zasobów mieszkaniowych",
    "Zasoby mieszkaniowe"
  ]
}
{
  "id": "P3614",
  "name": "Remonty mieszkań (związane z podwyższeniem standardu mieszkania)",
  "dimensionTypes": [
    "Rodzaje instalacji",
    "Przedmiot remontów"
  ]
}
{
  "id": "P3777",
  "name": "Liczba transakcji kupna/sprzedaży lokali mieszkalnych (dane kwartalne)",
  "dimensionTypes": [
    "Rodzaje transakcji"
  ]
}
{
  "id": "P3778",
  "name": "Liczba sprzedanych lokali mieszkalnych (dane kwartalne)",
  "dimensionTypes": [
    "Rodzaje transakcji",
    "Lokale mieszkalne"
  ]
}
{
  "id": "P3779",
  "name": "Wartość sprzedanych lokali mieszkalnych (dane kwartalne)",
  "dimensionTypes": [
    "Rodzaje transakcji",
    "Lokale mieszkalne"
  ]
}
{
  "id": "P3780",
  "name": "Powierzchnia użytkowa sprzedanych lokali mieszkalnych (dane kwartalne)",
  "dimensionTypes": [
    "Rodzaje transakcji",
    "Lokale mieszkalne"
  ]
}
{
  "id": "P3781",
  "name": "Średnia cena za 1 m2 lokali mieszkalnych (dane kwartalne)",
  "dimensionTypes": [
    "Rodzaje transakcji",
    "Lokale mieszkalne"
  ]
}
{
  "id": "P3782",
  "name": "Średnia cena lokali mieszkalnych (dane kwartalne)",
  "dimensionTypes": [
    "Rodzaje transakcji",
    "Lokale mieszkalne"
  ]
}
{
  "id": "P3789",
  "name": "Liczba lokali mieszkalnych sprzedanych w ramach transakcji rynkowych (dane kwartalne)",
  "dimensionTypes": [
    "Transakcje rynkowe",
    "Powierzchnia użytkowa lokali mieszkalnych"
  ]
}
{
  "id": "P3790",
  "name": "Wartość lokali mieszkalnych sprzedanych w ramach transakcji rynkowych (dane kwartalne)",
  "dimensionTypes": [
    "Transakcje rynkowe",
    "Powierzchnia użytkowa lokali mieszkalnych"
  ]
}
{
  "id": "P3791",
  "name": "Powierzchnia użytkowa lokali mieszkalnych sprzedanych w ramach transakcji rynkowych (dane kwartalne)",
  "dimensionTypes": [
    "Transakcje rynkowe",
    "Powierzchnia użytkowa lokali mieszkalnych"
  ]
}
{
  "id": "P3792",
  "name": "Średnia cena lokali mieszkalnych sprzedanych w ramach transakcji rynkowych (dane kwartalne)",
  "dimensionTypes": [
    "Transakcje rynkowe",
    "Powierzchnia użytkowa lokali mieszkalnych"
  ]
}
{
  "id": "P3793",
  "name": "Mediana cen za 1 m2 lokali mieszkalnych sprzedanych w ramach transakcji rynkowych (dane kwartalne)",
  "dimensionTypes": [
    "Transakcje rynkowe",
    "Powierzchnia użytkowa lokali mieszkalnych"
  ]
}
{
  "id": "P3794",
  "name": "Średnia cena za 1 m2 lokali mieszkalnych sprzedanych w ramach transakcji rynkowych (dane kwartalne)",
  "dimensionTypes": [
    "Transakcje rynkowe",
    "Powierzchnia użytkowa lokali mieszkalnych"
  ]
}
{
  "id": "P3820",
  "name": "Budownictwo mieszkaniowe – wskaźniki",
  "dimensionTypes": [
    "Wskaźniki"
  ]
}
{
  "id": "P3822",
  "name": "Mieszkania, których budowę rozpoczęto (dane miesięczne)",
  "dimensionTypes": [
    "Formy budownictwa"
  ]
}
{
  "id": "P3823",
  "name": "Mieszkania oddane do użytkowania (dane miesięczne)",
  "dimensionTypes": [
    "Formy budownictwa",
    "Zakres przedmiotowy"
  ]
}
{
  "id": "P3824",
  "name": "Mieszkania oddane do użytkowania",
  "dimensionTypes": [
    "Formy budownictwa",
    "Zakres przedmiotowy"
  ]
}
{
  "id": "P3892",
  "name": "Mediana cen za 1 m2 lokali mieszkalnych (dane kwartalne)",
  "dimensionTypes": [
    "Rodzaje transakcji",
    "Lokale mieszkalne"
  ]
}
{
  "id": "P3950",
  "name": "Najem lokali z mieszkaniowego zasobu gmin oraz tymczasowych pomieszczeń",
  "dimensionTypes": [
    "Lokale mieszkalne",
    "Wyszczególnienie"
  ]
}
{
  "id": "P3952",
  "name": "Gospodarstwa domowe oczekujące na najem lokali mieszkalnych i tymczasowych pomieszczeń",
  "dimensionTypes": [
    "Gospodarstwa domowe",
    "Najem"
  ]
}
{
  "id": "P4088",
  "name": "Zapotrzebowanie na najem lokali z mieszkaniowego zasobu gmin",
  "dimensionTypes": [
    "Najem lokali"
  ]
}
{
  "id": "P4267",
  "name": "Zasoby mieszkaniowe gmin (komunalne) niespełniające standardów technicznych do zamieszkania",
  "dimensionTypes": [
    "Rodzaje zasobów mieszkaniowych",
    "Zasoby mieszkaniowe"
  ]
}
```

# Format danych

## Słowniki

Główny obiekt JSON zawiera obiekty attributes, measureUnits, territorialUnitNames, w których kluczami są kody jednostek miar, atrybutów i jednostek terytorialnych. Właściwe dane zawierają odwołania do tych słowników po kodzie.

## Tematy

W obiekcie subjects kluczami są kody tematów z BDL, a wartościami sa obiekty o następującej strukturze:

- id - id tematu
- name - nazwa tematu
- kind - typ tematu: Yearly, Quarterly, Monthly
- description - opis tematu
- dimensionTypes - tablica zawierająca nazwy wymiarów (kategorie danych w temacie) \
  Przykładowo: `["Formy własności", "Zasoby mieszkaniowe"]`
- dimensions - słownik, w którym kluczami są kombinacje wartości wymiarów oddzielone znakiem '\n', a wartościami są obiekty zawierające właściwe dane \
  Przykładowy klucz, jaki może istnieć dla powyższego przykładu wymiarów: `"zasoby gminne (komunalne)\nizby"` \
  Przykładowe dane - kluczem rekordu jest kod jednostki terytorialnej:
  ```
  "zasoby gminne (komunalne)\nizby": {
      "measureUnit": 1,
      "records": {
          "011200000000": [
              {
                  "attributeId": 11,
                  "dateRange": {
                      "tag": "YearRange",
                      "contents": 1995
                  },
                  "value": 216177.0
              },
  ```

## Struktura rekordu

Pojedynczy rekord zawiera następujące pola

- attributeId - ID atrybutu
- dateRange - zakres czasowy, dla którego obowiązuje rekord. Może być wartością typu YearRange, QuarterRange, MonthRange
  - Przykład YearRange:
    ```
    "dateRange": {
        "tag": "YearRange",
        "contents": 1995
    },
    ```
  - Przykład MonthRange (miesiąc od, miesiąc do):
    ```
    "dateRange": {
        "tag": "MonthRange",
        "contents": [
            "2005-05",
            "2005-05"
        ]
    },
    ```
  - Przykład QuarterRange (rok-qN):
    ```
    "dateRange": {
        "tag": "QuarterRange",
        "contents": "2010-q2"
    },
    ```

# Sposób pobrania

Dane na poziomie województw pobrano programem znajdującym się w katalogu Scrapers/bdl-downloader.

```
> cabal run . -- download-subs P3824 P3823 P3822 P3820 P3789 P3793 P3791 P3792 P3794 P3790 P3778 P3777 P3892 P3780 P3782 P3781 P3779 P3614 P1737 P2352 P3952 P3950 P4088 P2166 P2762 P2430 P4267 P1727 P1719 -l 2
```

Sprawdzono atrybuty pojawiające się w zestawie danych.

```
> cabal -v0 run . -- inspect-attr download_2023-05-06T02:05:0…
1: wartość [ ];
4: . lub 0 [x]; Brak informacji, konieczność zachowania tajemnicy statystycznej lub wypełnienie pozycji jest niemożliwe albo niecelowe
0: 0 [ ];
11: wartość [M]; Zmiany metodologiczne
91: . lub 0 [x]; Brak informacji, konieczność zachowania tajemnicy statystycznej lub wypełnienie pozycji jest niemożliwe albo niecelowe
50: - lub 0 [n]; Dana jeszcze niedostępna, będzie dostępna
```

Następnie pobrane rekordy w formie NDJSON zostały zebrane do jednego obiektu, z wykluczeniem tych o atrybutach 4, 91 lub 50.

```
> cabal -v0 run . -- consolidate-data download_2023-05-06T02:05:0… -n 4 -n 91 -n 50 > ../../Data/gus_bdl.json
```
