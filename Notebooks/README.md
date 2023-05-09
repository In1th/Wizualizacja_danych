## Plot generator

Jeśli chcemy wygenerować `svg` dla poszczególnych województw to odpalamy `plot_generator.py` z argumentami:

* Jako pierwszy podajemy ścieżke do pliku `csv` który chcemy analizować
* Jako drugi podajemy folder wyjściowy w którym chcemy aby zapisały sie nasze wykresy (folder się automatycznie stworzy jeśli już go nie ma)


Na przykład:

```bash
py .\plot_generator.py "..\Data\BDL\csv\zasoby_mieszkaniowe\ogółem__mieszkania.csv" "zasoby_mieszkaniowe_ogolem_mieszkania"
```
