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
    currentChartOptions,
  } from "../store/chartStore";
  import { barActive, resetActive, scatterActive } from "../store/store";
  import FiltersTree from "../components/FiltersTree.svelte";
  import type { FilterGroup } from "../interfaces/FilterGroup";
  import { onMount } from "svelte";
  import { Modal } from "bootstrap";
  import * as pkg from "../../package-lock.json";

  function showAbout(): void {
    btModal.show();
  }

  function hideAbout(): void {
    btModal.hide();
  }

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
          name: "Cena w zależności od liczby pokoi",
          callback: () => changeChart("cena za pokoje", "scatter"),
        },
      ],
    },
    {
      name: "BDL",
      filters: [
        {
          default: false,
          name: "Średnia cen rynkowych za m², ogólnie",
          callback: () => changeChart("srednia cen rynkowych za m2", "reset"),
        },
        {
          default: false,
          name: "Średnia cen rynkowych za m², <40 m²",
          callback: () =>
            changeChart("srednia cen rynkowych za m2 do 40", "reset"),
        },
        {
          default: false,
          name: "Średnia cen rynkowych za m², 40,1 - 60 m²",
          callback: () =>
            changeChart("srednia cen rynkowych za m2 od 40 do 60", "reset"),
        },
        {
          default: false,
          name: "Średnia cen rynkowych za m², 60,1 - 80 m²",
          callback: () =>
            changeChart("srednia cen rynkowych za m2 od 60 do 80", "reset"),
        },
        {
          default: false,
          name: "Średnia cen rynkowych za m², >80 m²",
          callback: () =>
            changeChart("srednia cen rynkowych za m2 od 80", "reset"),
        },
        {
          default: false,
          name: "Liczba mieszkań oddanych do użytkowania (ogółem)",
          callback: () =>
            changeChart("mieszkania oddane do uzytkowania ogolem", "reset"),
        },
        {
          default: false,
          name: "Liczba mieszkań oddanych do użytkowania (komunalne)",
          callback: () =>
            changeChart("mieszkania oddane do uzytkowania komunalne", "reset"),
        },
        {
          default: false,
          name: "Liczba mieszkań oddanych do użytkowania (sprzedaż / wynajem)",
          callback: () =>
            changeChart(
              "mieszkania oddane do uzytkowania sprzedaz wynajem",
              "reset"
            ),
        },
        {
          default: false,
          name: "Liczba mieszkań oddanych do użytkowania (wynajem)",
          callback: () =>
            changeChart("mieszkania oddane do uzytkowania wynajem", "reset"),
        },
        {
          default: false,
          name: "Liczba mieszkań oddanych do użytkowania (spółdzielcze)",
          callback: () =>
            changeChart(
              "mieszkania oddane do uzytkowania spoldzielcze",
              "reset"
            ),
        },
        {
          default: false,
          name: "Liczba mieszkań oddanych do użytkowania (społeczne czynszowe)",
          callback: () =>
            changeChart(
              "mieszkania oddane do uzytkowania spoleczne czynszowe",
              "reset"
            ),
        },
        {
          default: false,
          name: "Średnia cena lokali (ogółem)",
          callback: () => changeChart("srednia cena lokali ogolem", "reset"),
        },
        {
          default: false,
          name: "Średnia cena lokali (1 izbowe)",
          callback: () => changeChart("srednia cena lokali 1 izbowe", "reset"),
        },
        {
          default: false,
          name: "Średnia cena lokali (2 izbowe)",
          callback: () => changeChart("srednia cena lokali 2 izbowe", "reset"),
        },
        {
          default: false,
          name: "Średnia cena lokali (3 izbowe)",
          callback: () => changeChart("srednia cena lokali 3 izbowe", "reset"),
        },
        {
          default: false,
          name: "Średnia cena lokali (≥4 izbowe)",
          callback: () =>
            changeChart("srednia cena lokali 4 izbowe i wieksze", "reset"),
        },
        {
          default: false,
          name: "Liczba sprzedanych lokali (ogółem)",
          callback: () =>
            changeChart("liczba sprzedanych lokali ogolem", "reset"),
        },
        {
          default: false,
          name: "Liczba sprzedanych lokali (1 izbowe)",
          callback: () =>
            changeChart("liczba sprzedanych lokali 1 izbowe", "reset"),
        },
        {
          default: false,
          name: "Liczba sprzedanych lokali (2 izbowe)",
          callback: () =>
            changeChart("liczba sprzedanych lokali 2 izbowe", "reset"),
        },
        {
          default: false,
          name: "Liczba sprzedanych lokali (3 izbowe)",
          callback: () =>
            changeChart("liczba sprzedanych lokali 3 izbowe", "reset"),
        },
        {
          default: false,
          name: "Liczba sprzedanych lokali (≥4 izbowe)",
          callback: () =>
            changeChart(
              "liczba sprzedanych lokali 4 izbowe i wieksze",
              "reset"
            ),
        },
      ],
    },
  ];

  let modalEl: HTMLDivElement;
  let btModal: Modal;

  const modalData = [
    {
      name: "Stack technologiczny",
      items: [
        {
          name: "Svelte",
          path: "node_modules/svelte",
          version: null,
          link: "https://svelte.dev/",
        },
        {
          name: "TypeScript",
          path: "node_modules/typescript",
          version: null,
          link: "https://www.typescriptlang.org/",
        },
        {
          name: "Sass",
          path: "node_modules/sass",
          version: null,
          link: "https://sass-lang.com/",
        },
        {
          name: "Bootstrap",
          path: "node_modules/bootstrap",
          version: null,
          link: "https://getbootstrap.com/",
        },
        {
          name: "Bootstrap Icons",
          path: "node_modules/bootstrap-icons",
          version: null,
          link: "https://icons.getbootstrap.com/",
        },
        {
          name: "Chart.js",
          path: "node_modules/chart.js",
          version: null,
          link: "https://www.chartjs.org/",
        },
        {
          name: "Vercel",
          path: null,
          version: null,
          link: "https://vercel.com/",
        },
      ],
    },
    {
      name: "Źródła danych",
      items: [
        {
          name: "Otodom",
          path: null,
          version: null,
          link: "https://www.otodom.pl/",
        },
        {
          name: "BDL",
          path: null,
          version: null,
          link: "https://bdl.stat.gov.pl/bdl/start",
        },
      ],
    },
  ];

  if (pkg) {
    modalData.forEach((section) =>
      section.items.forEach((item) => {
        if (item.path) {
          item.version = pkg.packages[item.path].version;
        }
      })
    );
  }

  onMount(() => {
    btModal = new Modal(modalEl, {
      backdrop: true,
    });
  });
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
          options={$currentChartOptions}
        />
      {/if}
    </div>
    <div class="d-flex flex-row justify-content-end">
      <h6 style="opacity: 0.5;">
        Made with ❤️ by Mateusz Kruk, Seweryn Jarco, Dawid Goc and, Kacper
        Koniuszy
      </h6>
      <button
        class="btn bi-question-square"
        style="--bs-btn-active-border-color: transparent;"
        on:click={showAbout}
      />
    </div>
  </div>
</div>

<div class="visualization-container">
  <ScatterChartAnimation active={$scatterActive} />
  <BarChartAnimation active={$barActive} />
  <PaperChartAnimation active={$resetActive} />
</div>

<div bind:this={modalEl} class="modal fade show">
  <div class="modal-dialog">
    <div class="modal-content" style="--bs-modal-bg: #ddd;">
      <header class="d-flex justify-content-between align-items-center p-3">
        <div
          class="d-flex w-100 justify-content-center"
          style="margin-left: 2.5rem;"
        >
          <h4 class="m-0">Meta</h4>
        </div>
        <button class="btn bi-x-square" on:click={hideAbout} />
      </header>
      <div class="p-3 d-flex flex-row justify-content-around pt-0">
        {#each modalData as section}
          <div>
            <div>
              <header>
                <h5>{section.name}</h5>
              </header>
            </div>
            <ul class="p-0 m-0 ps-3">
              {#each section.items as item}
                <li
                  class="d-flex gap-2"
                  style="list-style: none;margin-bottom: 0.3rem;"
                >
                  <span>{item.name}</span>
                  {#if item.version} <span>{item.version}</span> {/if}
                  {#if item.link}
                    <a
                      href={item.link}
                      class="bi-box-arrow-up-right btn-link btn btn-sm p-0"
                    />
                  {/if}
                </li>
              {/each}
            </ul>
          </div>
        {/each}
      </div>
    </div>
  </div>
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
    height: 100%;
  }

  h6 {
    margin-top: auto;
    text-align: right;
  }
</style>
