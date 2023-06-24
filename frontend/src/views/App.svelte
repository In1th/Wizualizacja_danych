<script lang="ts">
  import BarChart from "../assets/charts/BarChart.svelte";
  import ConnectedScatterChart from "../assets/charts/ConnectedScatterChart.svelte";
  import BubbleChart from "../assets/charts/BubbleChart.svelte";
  import PieChart from "../assets/charts/PieChart.svelte";
  import PolarAreaChart from "../assets/charts/PolarAreaChart.svelte";
  import MapMenu from "../components/MapMenu.svelte";
  import Synopsis from "../components/Synopsis.svelte";
  import BarChartAnimation from "../lib/BarChartAnimation.svelte";
  import PaperChartAnimation from "../lib/PaperChartAnimation.svelte";
  import ScatterChartAnimation from "../lib/ScatterChartAnimation.svelte";
  import {
    chartData,
    currentChartType,
    changeChart,
    currentVisibleDatasets,
  } from "../store/chartStore";
  import { barActive, resetActive, scatterActive } from "../store/store";
  import FiltersTree from "../components/FiltersTree.svelte";
  import type { FilterGroup } from "../interfaces/FilterGroup";
  import { LogarithmicScale } from "chart.js";

  const filtersTree: FilterGroup[] = [
    {
      name: "Otodom",
      filters: [
        {
          default: true,
          name: "Liczba ofert w każdym województwie",
          callback: () => changeChart("liczba ofert per wojewodztwo", "reset"),
        },
        {
          default: false,
          name: "Liczba ofert w zależności od liczby pokoi",
          callback: () => changeChart("liczba pokoi", "bar"),
        },
        {
          default: false,
          name: "Liczba ofert w danym mieście",
          callback: () => changeChart("miasta oferty", "bar"),
        },
        {
          default: false,
          html: "Cena za <math><msup><mi>m</mi><mn>2</mn></msup></math> w zależności od liczby pokoi",
          callback: () => changeChart("cena za m2", "scatter"),
        },
        {
          default: false,
          name: "Cena za pokój w zależności od liczby pokoi",
          callback: () => changeChart("cena za pokoje", "scatter"),
        },
      ],
    },
    {
      name: "Test",
      filters: [
        {
          default: false,
          name: "Demo",
          callback: () => changeChart("demo", "reset"),
        },
      ],
    },
    {
      name: "BDL",
      filters: [],
    },
  ];
</script>

<div class="main-container">
  <div id="main-left" class="ps-5">
    <MapMenu />
    <FiltersTree name="Filtry" tree={filtersTree} />
  </div>
  <div id="main-right">
    <Synopsis />
    <div id="chart-content">
      {#if $currentChartType === "bar"}
        <BarChart data={$chartData} />
      {/if}
      {#if $currentChartType === "pie"}
        <PieChart data={$chartData} />
      {/if}
      {#if $currentChartType === "polarArea"}
        <PolarAreaChart data={$chartData} />
      {/if}
      {#if $currentChartType === "bubble"}
        <BubbleChart data={$chartData} />
      {/if}
      {#if $currentChartType === "connectedScatter"}
        <ConnectedScatterChart
          data={$chartData}
          visibleDatasets={$currentVisibleDatasets}
        />
      {/if}
    </div>
    <h6 style="opacity: 0.5;">
      Made with ❤️ by Mateusz Kruk, Seweryn Jarco, Dawid Goc and, Kacper
      Koniuszy
    </h6>
  </div>
</div>

<div class="visualization-container">
  <ScatterChartAnimation active={$scatterActive} />
  <BarChartAnimation active={$barActive} />
  <PaperChartAnimation active={$resetActive} />
</div>

<style lang="scss">
  :global {
    #app {
      background: #ddd;
      position: relative;
      width: 100vw;
      height: 100vh;
    }
  }

  .main-container {
    display: flex;
    background: transparent;
    height: 100vh;
    width: 100vw;
    z-index: 1;
    position: absolute;

    & > * {
      display: flex;
      flex-direction: column;
      padding: 1rem;
    }
  }

  #main-left {
    width: 40%;
  }

  #main-right {
    flex: 1;
  }

  .visualization-container {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    opacity: 0.25;
  }

  #chart-content {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-block: auto;
  }

  h6 {
    margin-top: auto;
    text-align: right;
  }
</style>
