<script lang="ts">
  import { onMount, type ComponentProps } from "svelte";
  import { Line } from "svelte-chartjs";
  import { chart_css } from "./chart_css.js";
  import autocolors from "chartjs-plugin-autocolors";

  export let data;
  export let visibleDatasets: number[];

  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale,
  } from "chart.js";

  ChartJS.register(
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale,
    autocolors
  );

  let chart: ComponentProps<Line>["chart"];

  const updateVisibility = (ch: typeof chart) => {
    if (!ch) return;
    for (const k of ch.data.datasets.keys()) {
      ch.setDatasetVisibility(k, visibleDatasets.includes(k));
    }
    ch.update();
  };

  $: updateVisibility(chart);
  onMount(() => updateVisibility(chart));
</script>

<div class="chart-container" style="width: {chart_css.width};">
  <Line
    {data}
    bind:chart
    options={{
      responsive: true,
      plugins: {
        legend: {
          labels: {
            filter: (item, _) => visibleDatasets.includes(item.datasetIndex),
          },
          onClick: (e) => e.native.stopPropagation(),
        },
      },
    }}
  />
</div>

<style>
  .chart-container {
    position: relative;
    z-index: 100;
    display: flex !important;
    background-color: #ddd;
  }
</style>
