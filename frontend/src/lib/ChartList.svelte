<script lang="ts">
    import { currentChart, type ChartVisible } from "../store/chartStore";
    import { plot, type PlotType } from "../store/store";

    const changeChart = (ch: ChartVisible, anim: PlotType) => {
        $currentChart = ch;
        plot.toggle(anim);
    }
</script>

<div class="charts-buttons">
    <h2>Otodom</h2>
    <div class="btn-wrapper">
        <button on:click={() => changeChart('liczba pokoi', 'bar')}>Liczba Pokoi</button>
        <button on:click={() => changeChart('miasta oferty', 'bar')}>Oferty w miastach</button>
        <button on:click={() => changeChart('cena za m2', 'scatter')}>Cena za m2</button>
        <button on:click={() => changeChart('cena za pokoje', 'scatter')}>Cena na pokoje</button>
        <button on:click={() => changeChart('liczba ofert per wojewodztwo', 'reset')}>Liczba ofert per wojewodztwo</button>
        <button on:click={() => changeChart('liczba pokoi ogolnie', 'reset')}>Liczba Pokoi - Ogolnie</button>
        <button on:click={() => changeChart('cena za m2 ogolnie', 'reset')}>Cena za m2 - Ogolnie</button>
        <button on:click={() => changeChart('cena za pokoje ogolnie', 'reset')}>Cena na pokoje - Ogolnie</button>
    </div>

    <h2>BDL</h2>
    <!-- <p>Liczba pokoi</p>
    <div>
        <button on:click={() => toggleChart("LiczbaPokoi_Dolnyslask")}>Dolny slask</button>
        <button on:click={() => toggleChart("LiczbaPokoi_KujawskoPomorskie")}>Kujawsko Pomorskie</button>
        <button on:click={() => toggleChart("LiczbaPokoi_Lodzkie")}>Lodzkie</button>
        <button on:click={() => toggleChart("LiczbaPokoi_Lubelskie")}>Lubelskie</button>
        <button on:click={() => toggleChart("LiczbaPokoi_Lubuskie")}>Lubuskie</button>
        <button on:click={() => toggleChart("LiczbaPokoi_Malopolskie")}>Malopolskie</button>
        <button on:click={() => toggleChart("LiczbaPokoi_Mazowieckie")}>Mazowieckie</button>
        <button on:click={() => toggleChart("LiczbaPokoi_Opolskie")}>Opolskie</button>
        <button on:click={() => toggleChart("LiczbaPokoi_Podkarpackie")}>Podkarpackie</button>
        <button on:click={() => toggleChart("LiczbaPokoi_Podlaskie")}>Podlaskie</button>
        <button on:click={() => toggleChart("LiczbaPokoi_Pomorskie")}>Pomorskie</button>
        <button on:click={() => toggleChart("LiczbaPokoi_Slaskie")}>Slaskie</button>
        <button on:click={() => toggleChart("LiczbaPokoi_Swietokrzyskie")}>Swietokrzyskie</button>
        <button on:click={() => toggleChart("LiczbaPokoi_WarminskoMazurskie")}>Warminsko Mazurskie</button>
        <button on:click={() => toggleChart("LiczbaPokoi_Wielkopolskie")}>Wielkopolskie</button>
        <button on:click={() => toggleChart("LiczbaPokoi_Zachodniopomorskie")}>Zachodniopomorskie</button>
    </div>

    <p>Oferty w miastach</p>
    <div>
        <button on:click={() => toggleChart("MiastaOferty_Dolnyslask")}>Dolny slask</button>
        <button on:click={() => toggleChart("MiastaOferty_KujawskoPomorskie")}>Kujawsko Pomorskie</button>
        <button on:click={() => toggleChart("MiastaOferty_Lodzkie")}>Lodzkie</button>
        <button on:click={() => toggleChart("MiastaOferty_Lubelskie")}>Lubelskie</button>
        <button on:click={() => toggleChart("MiastaOferty_Lubuskie")}>Lubuskie</button>
        <button on:click={() => toggleChart("MiastaOferty_Malopolskie")}>Malopolskie</button>
        <button on:click={() => toggleChart("MiastaOferty_Mazowieckie")}>Mazowieckie</button>
        <button on:click={() => toggleChart("MiastaOferty_Opolskie")}>Opolskie</button>
        <button on:click={() => toggleChart("MiastaOferty_Podkarpackie")}>Podkarpackie</button>
        <button on:click={() => toggleChart("MiastaOferty_Podlaskie")}>Podlaskie</button>
        <button on:click={() => toggleChart("MiastaOferty_Pomorskie")}>Pomorskie</button>
        <button on:click={() => toggleChart("MiastaOferty_Slaskie")}>Slaskie</button>
        <button on:click={() => toggleChart("MiastaOferty_Swietokrzyskie")}>Swietokrzyskie</button>
        <button on:click={() => toggleChart("MiastaOferty_WarminskoMazurskie")}>Warminsko Mazurskie</button>
        <button on:click={() => toggleChart("MiastaOferty_Wielkopolskie")}>Wielkopolskie</button>
        <button on:click={() => toggleChart("MiastaOferty_Zachodniopomorskie")}>Zachodniopomorskie</button>
    </div>

    <p>Cena za m2 per pokoje</p>
    <div>
        <button on:click={() => toggleChart("CenaZaM2_Dolnyslask")}>Dolny slask</button>
        <button on:click={() => toggleChart("CenaZaM2_KujawskoPomorskie")}>Kujawsko Pomorskie</button>
        <button on:click={() => toggleChart("CenaZaM2_Lodzkie")}>Lodzkie</button>
        <button on:click={() => toggleChart("CenaZaM2_Lubelskie")}>Lubelskie</button>
        <button on:click={() => toggleChart("CenaZaM2_Lubuskie")}>Lubuskie</button>
        <button on:click={() => toggleChart("CenaZaM2_Malopolskie")}>Malopolskie</button>
        <button on:click={() => toggleChart("CenaZaM2_Mazowieckie")}>Mazowieckie</button>
        <button on:click={() => toggleChart("CenaZaM2_Opolskie")}>Opolskie</button>
        <button on:click={() => toggleChart("CenaZaM2_Podkarpackie")}>Podkarpackie</button>
        <button on:click={() => toggleChart("CenaZaM2_Podlaskie")}>Podlaskie</button>
        <button on:click={() => toggleChart("CenaZaM2_Pomorskie")}>Pomorskie</button>
        <button on:click={() => toggleChart("CenaZaM2_Slaskie")}>Slaskie</button>
        <button on:click={() => toggleChart("CenaZaM2_Swietokrzyskie")}>Swietokrzyskie</button>
        <button on:click={() => toggleChart("CenaZaM2_WarminskoMazurskie")}>Warminsko Mazurskie</button>
        <button on:click={() => toggleChart("CenaZaM2_Wielkopolskie")}>Wielkopolskie</button>
        <button on:click={() => toggleChart("CenaZaM2_Zachodniopomorskie")}>Zachodniopomorskie</button>
    </div>

    <p>Cena na pokoje</p>
    <div>
        <button on:click={() => toggleChart("CenaNaPokoje_Dolnyslask")}>Dolny slask</button>
        <button on:click={() => toggleChart("CenaNaPokoje_KujawskoPomorskie")}>Kujawsko Pomorskie</button>
        <button on:click={() => toggleChart("CenaNaPokoje_Lodzkie")}>Lodzkie</button>
        <button on:click={() => toggleChart("CenaNaPokoje_Lubelskie")}>Lubelskie</button>
        <button on:click={() => toggleChart("CenaNaPokoje_Lubuskie")}>Lubuskie</button>
        <button on:click={() => toggleChart("CenaNaPokoje_Malopolskie")}>Malopolskie</button>
        <button on:click={() => toggleChart("CenaNaPokoje_Mazowieckie")}>Mazowieckie</button>
        <button on:click={() => toggleChart("CenaNaPokoje_Opolskie")}>Opolskie</button>
        <button on:click={() => toggleChart("CenaNaPokoje_Podkarpackie")}>Podkarpackie</button>
        <button on:click={() => toggleChart("CenaNaPokoje_Podlaskie")}>Podlaskie</button>
        <button on:click={() => toggleChart("CenaNaPokoje_Pomorskie")}>Pomorskie</button>
        <button on:click={() => toggleChart("CenaNaPokoje_Slaskie")}>Slaskie</button>
        <button on:click={() => toggleChart("CenaNaPokoje_Swietokrzyskie")}>Swietokrzyskie</button>
        <button on:click={() => toggleChart("CenaNaPokoje_WarminskoMazurskie")}>Warminsko Mazurskie</button>
        <button on:click={() => toggleChart("CenaNaPokoje_Wielkopolskie")}>Wielkopolskie</button>
        <button on:click={() => toggleChart("CenaNaPokoje_Zachodniopomorskie")}>Zachodniopomorskie</button>
    </div>

    <p>Inne</p>
    <div>
        <button on:click={() => toggleChart("LiczbaOfertPerWojewodztwo")}>Liczba ofert per wojewodztwo</button>
    </div> -->
</div>

<style>
    .charts-buttons {
        z-index: 60;
        padding: 3rem;
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: center;
    }
    .btn-wrapper {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        width: 80%;
    }
</style>