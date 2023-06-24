<script lang="ts">
    import { currentChart, type ChartVisible } from "../store/chartStore";
    import { mapStore } from "../store/mapStore";
    import { plot, type PlotType } from "../store/store";

    const changeChart = (ch: ChartVisible, anim: PlotType) => {
        $currentChart = ch;
        plot.toggle(anim);

        if(ch === 'liczba ofert per wojewodztwo'){
            $mapStore = 'ogolnie';
        }
        if (ch === 'miasta oferty') {
            $mapStore = 'malopolskie';
        }
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
    </div>

    <h2>BDL</h2>
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