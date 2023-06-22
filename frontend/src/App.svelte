<script lang="ts">
    import Map from './lib/Map.svelte';

    import Bar from './lib/BarChartAnimation.svelte';
    import Pie from './lib/PieChartAnimation.svelte';
    import Scatter from './lib/ScatterChartAnimation.svelte';

    import BarChart from './assets/charts/BarChart.svelte';

    let scatter = false;
    let bar = false
    $: trigger = scatter || bar;

  const onScatter = () => {
    scatter = !scatter;
    bar = false;
  }
  const onBar = () => {
    bar = !bar;
    scatter = false;
  }

  // ===================================================
    import { liczba_pokoi_dolnoslaskie } from './assets/charts/data/liczba_pokoi/liczba_pokoi_dolnoslaskie';
    import { liczba_pokoi_kujawsko_pomorskie } from './assets/charts/data/liczba_pokoi/liczba_pokoi_kujawsko_pomorskie';
    import { liczba_pokoi_lodzkie } from './assets/charts/data/liczba_pokoi/liczba_pokoi_lodzkie';
    import { liczba_pokoi_lubelskie } from './assets/charts/data/liczba_pokoi/liczba_pokoi_lubelskie';
    import { liczba_pokoi_lubuskie } from './assets/charts/data/liczba_pokoi/liczba_pokoi_lubuskie';
    import { liczba_pokoi_malopolskie } from './assets/charts/data/liczba_pokoi/liczba_pokoi_malopolskie';
    import { liczba_pokoi_mazowieckie } from './assets/charts/data/liczba_pokoi/liczba_pokoi_mazowieckie';
    import { liczba_pokoi_opolskie } from './assets/charts/data/liczba_pokoi/liczba_pokoi_opolskie';
    import { liczba_pokoi_podkarpackie } from './assets/charts/data/liczba_pokoi/liczba_pokoi_podkarpackie';
    import { liczba_pokoi_podlaskie } from './assets/charts/data/liczba_pokoi/liczba_pokoi_podlaskie';
    import { liczba_pokoi_pomorskie } from './assets/charts/data/liczba_pokoi/liczba_pokoi_pomorskie';
    import { liczba_pokoi_slaskie } from './assets/charts/data/liczba_pokoi/liczba_pokoi_slaskie';
    import { liczba_pokoi_swietokrzyskie } from './assets/charts/data/liczba_pokoi/liczba_pokoi_swietokrzyskie';
    import { liczba_pokoi_warminsko_mazurskie } from './assets/charts/data/liczba_pokoi/liczba_pokoi_warminsko_mazurskie';
    import { liczba_pokoi_wielkopolskie } from './assets/charts/data/liczba_pokoi/liczba_pokoi_wielkopolskie';
    import { liczba_pokoi_zachodniopomorskie } from './assets/charts/data/liczba_pokoi/liczba_pokoi_zachodniopomorskie';

    import { miasta_oferty_dolnoslaskie } from './assets/charts/data/miasta_oferty/miasta_oferty_dolnoslaskie';
    import { miasta_oferty_kujawsko_pomorskie } from './assets/charts/data/miasta_oferty/miasta_oferty_kujawsko_pomorskie';
    import { miasta_oferty_lodzkie } from './assets/charts/data/miasta_oferty/miasta_oferty_lodzkie';
    import { miasta_oferty_lubelskie } from './assets/charts/data/miasta_oferty/miasta_oferty_lubelskie';
    import { miasta_oferty_lubuskie } from './assets/charts/data/miasta_oferty/miasta_oferty_lubuskie';
    import { miasta_oferty_malopolskie } from './assets/charts/data/miasta_oferty/miasta_oferty_malopolskie';
    import { miasta_oferty_mazowieckie } from './assets/charts/data/miasta_oferty/miasta_oferty_mazowieckie';
    import { miasta_oferty_opolskie } from './assets/charts/data/miasta_oferty/miasta_oferty_opolskie';
    import { miasta_oferty_podkarpackie } from './assets/charts/data/miasta_oferty/miasta_oferty_podkarpackie';
    import { miasta_oferty_podlaskie } from './assets/charts/data/miasta_oferty/miasta_oferty_podlaskie';
    import { miasta_oferty_pomorskie } from './assets/charts/data/miasta_oferty/miasta_oferty_pomorskie';
    import { miasta_oferty_slaskie } from './assets/charts/data/miasta_oferty/miasta_oferty_slaskie';
    import { miasta_oferty_swietokrzyskie } from './assets/charts/data/miasta_oferty/miasta_oferty_swietokrzyskie';
    import { miasta_oferty_warminsko_mazurskie } from './assets/charts/data/miasta_oferty/miasta_oferty_warminsko_mazurskie';
    import { miasta_oferty_wielkopolskie } from './assets/charts/data/miasta_oferty/miasta_oferty_wielkopolskie';
    import { miasta_oferty_zachodniopomorskie } from './assets/charts/data/miasta_oferty/miasta_oferty_zachodniopomorskie';


  let charts = {
    "LiczbaPokoi_Dolnyslask" : false,
    "LiczbaPokoi_KujawskoPomorskie" : false,
    "LiczbaPokoi_Lodzkie" : false,
    "LiczbaPokoi_Lubelskie" : false,
    "LiczbaPokoi_Lubuskie" : false,
    "LiczbaPokoi_Malopolskie" : false,
    "LiczbaPokoi_Mazowieckie" : false,
    "LiczbaPokoi_Opolskie" : false,
    "LiczbaPokoi_Podkarpackie" : false,
    "LiczbaPokoi_Podlaskie" : false,
    "LiczbaPokoi_Pomorskie" : false,
    "LiczbaPokoi_Slaskie" : false,
    "LiczbaPokoi_Swietokrzyskie" : false,
    "LiczbaPokoi_WarminskoMazurskie" : false,
    "LiczbaPokoi_Wielkopolskie" : false,
    "LiczbaPokoi_Zachodniopomorskie" : false,

    "MiastaOferty_Dolnyslask" : false,
    "MiastaOferty_KujawskoPomorskie" : false,
    "MiastaOferty_Lodzkie" : false,
    "MiastaOferty_Lubelskie" : false,
    "MiastaOferty_Lubuskie" : false,
    "MiastaOferty_Malopolskie" : false,
    "MiastaOferty_Mazowieckie" : false,
    "MiastaOferty_Opolskie" : false,
    "MiastoOferty_Podkarpackie" : false,
    "MiastaOferty_Podlaskie" : false,
    "MiastaOferty_Pomorskie" : false,
    "MiastaOferty_Slaskie" : false,
    "MiastaOferty_Swietokrzyskie" : false,
    "MiastaOferty_WarminskoMazurskie" : false,
    "MiastaOferty_Wielkopolskie" : false,
    "MiastaOferty_Zachodniopomorskie" : false
  }

  const turnOffAllCharts = () => {
    for(let c in charts) {
        charts[c] = false;
    }
  }

  const toggleChart = (chart) => {
    if(!charts[chart]) 
        turnOffAllCharts()
    charts[chart] = !charts[chart];
  }

</script>

<div id='bg'></div>
<div id='bg-overlay-1' data-active={trigger}></div>
<div id='bg-overlay-2' data-active={trigger}></div>
<main>
  <h1>Stan Rynku nieruchomości w Polsce</h1>
  <p>Stan na 05.2023</p>
  <section class="chartRender">
    <!-- Liczby pokoi -->
    <BarChart data={liczba_pokoi_dolnoslaskie} 
        visible={charts["LiczbaPokoi_Dolnyslask"]}/>
    <BarChart data={liczba_pokoi_kujawsko_pomorskie} 
        visible={charts["LiczbaPokoi_KujawskoPomorskie"]}/>
    <BarChart data={liczba_pokoi_lodzkie}
        visible={charts["LiczbaPokoi_Lodzkie"]}/>
    <BarChart data={liczba_pokoi_lubelskie}
        visible={charts["LiczbaPokoi_Lubelskie"]}/>
    <BarChart data={liczba_pokoi_lubuskie}
        visible={charts["LiczbaPokoi_Lubuskie"]}/>
    <BarChart data={liczba_pokoi_malopolskie}
        visible={charts["LiczbaPokoi_Malopolskie"]}/>
    <BarChart data={liczba_pokoi_mazowieckie}
        visible={charts["LiczbaPokoi_Mazowieckie"]}/>
    <BarChart data={liczba_pokoi_opolskie}
        visible={charts["LiczbaPokoi_Opolskie"]}/>
    <BarChart data={liczba_pokoi_podkarpackie}
        visible={charts["LiczbaPokoi_Podkarpackie"]}/>
    <BarChart data={liczba_pokoi_podlaskie}
        visible={charts["LiczbaPokoi_Podlaskie"]}/>
    <BarChart data={liczba_pokoi_pomorskie}
        visible={charts["LiczbaPokoi_Pomorskie"]}/>
    <BarChart data={liczba_pokoi_slaskie}
        visible={charts["LiczbaPokoi_Slaskie"]}/>
    <BarChart data={liczba_pokoi_swietokrzyskie}
        visible={charts["LiczbaPokoi_Swietokrzyskie"]}/>
    <BarChart data={liczba_pokoi_warminsko_mazurskie}
        visible={charts["LiczbaPokoi_WarminskoMazurskie"]}/>
    <BarChart data={liczba_pokoi_wielkopolskie}
        visible={charts["LiczbaPokoi_Wielkopolskie"]}/>
    <BarChart data={liczba_pokoi_zachodniopomorskie}
        visible={charts["LiczbaPokoi_Zachodniopomorskie"]}/>

    <!-- Oferty per miasta -->
    <BarChart data={miasta_oferty_dolnoslaskie}
        visible={charts["MiastaOferty_Dolnyslask"]}/>
    <BarChart data={miasta_oferty_kujawsko_pomorskie}
        visible={charts["MiastaOferty_KujawskoPomorskie"]}/>
    <BarChart data={miasta_oferty_lodzkie}
        visible={charts["MiastaOferty_Lodzkie"]}/>
    <BarChart data={miasta_oferty_lubelskie}
        visible={charts["MiastaOferty_Lubelskie"]}/>
    <BarChart data={miasta_oferty_lubuskie}
        visible={charts["MiastaOferty_Lubuskie"]}/>
    <BarChart data={miasta_oferty_malopolskie}
        visible={charts["MiastaOferty_Malopolskie"]}/>
    <BarChart data={miasta_oferty_mazowieckie}
        visible={charts["MiastaOferty_Mazowieckie"]}/>
    <BarChart data={miasta_oferty_opolskie}
        visible={charts["MiastaOferty_Opolskie"]}/>
    <BarChart data={miasta_oferty_podkarpackie}
        visible={charts["MiastaOferty_Podkarpackie"]}/>
    <BarChart data={miasta_oferty_podlaskie}
        visible={charts["MiastaOferty_Podlaskie"]}/>
    <BarChart data={miasta_oferty_pomorskie}
        visible={charts["MiastaOferty_Pomorskie"]}/>
    <BarChart data={miasta_oferty_slaskie}  
        visible={charts["MiastaOferty_Slaskie"]}/>
    <BarChart data={miasta_oferty_swietokrzyskie}   
        visible={charts["MiastaOferty_Swietokrzyskie"]}/>
    <BarChart data={miasta_oferty_warminsko_mazurskie} 
        visible={charts["MiastaOferty_WarminskoMazurskie"]}/>
    <BarChart data={miasta_oferty_wielkopolskie}
        visible={charts["MiastaOferty_Wielkopolskie"]}/>
    <BarChart data={miasta_oferty_zachodniopomorskie}  
        visible={charts["MiastaOferty_Zachodniopomorskie"]}/>
</section>
  <section>
    <Map/>
    <div id="charts">
      <button on:click={onScatter}>scatter connected</button>
      <button on:click={onBar}>bar</button>
    </div>
    <div>
        <h3>Liczba pokoi</h3>
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

        <h3>Oferty w miastach</h3>
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
  </section>
  <footer>
    <b>2023, made by Mateusz Kruk</b>
  </footer>
</main>


<Scatter active={scatter}/>
<Bar active={bar}/>
<!-- <Pie/> -->

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
  }
  footer {
    height: fit-content;
    margin-top: auto;
    margin: .5rem;
    z-index: 1;
  }
  section{
    flex-grow: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 2rem;
  }

  .chartRender {
    position: absolute;
    right: 0;
    z-index: 8;
    background-color: rgba(255, 255, 255, 1);
    
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h1{
    margin: 0;
    margin-top: 1rem;
  }
  #bg {
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: #242424;
    opacity: 0.8;
    background-image:  linear-gradient(#ffffff 5.2px, transparent 5.2px), linear-gradient(90deg, #ffffff 5.2px, transparent 5.2px), linear-gradient(#ffffff 2.6px, transparent 2.6px), linear-gradient(90deg, #ffffff 2.6px, #323232 2.6px);
    background-size: 130px 130px, 130px 130px, 26px 26px, 26px 26px;
    background-position: -5.2px -5.2px, -5.2px -5.2px, -2.6px -2.6px, -2.6px -2.6px;
    z-index: -3;
  }
  #bg-overlay-1,  #bg-overlay-2{
    position: absolute;
    z-index: -2;
    transition: all .5s ease-in;
  }
  #bg-overlay-1{
    transform: translateX(-100vw);
    width: 200vw;
    height: 100vh;
    background: linear-gradient(90deg, #242424 60%, rgba(36, 36, 36, .7) 80%, rgba(0,0,0,0) 100%);
  }
  #bg-overlay-1[data-active="true"]{
    transform: translateX(-20vw);
  }
  #bg-overlay-2{
    width: 100vw;
    height: 200vh;
    transform: translateY(-100vh);
    background: linear-gradient(180deg, #242424 60%, rgba(36, 36, 36, .7) 80%, rgba(0,0,0,0) 100%);
  }
  #bg-overlay-2[data-active="true"]{
    transform: translateY(-20vh);
  }
  #charts{
    margin: 4rem 2rem;
    background-color: rgba(255,255,255,.2);
    height: calc(100% - 8rem);
    min-width: 600px;
  }
</style>