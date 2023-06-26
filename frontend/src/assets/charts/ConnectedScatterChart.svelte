<script lang="ts">
  import { onMount, type ComponentProps } from "svelte";
  import { Line } from "svelte-chartjs";
  import autocolors from "chartjs-plugin-autocolors";
  import "chartjs-adapter-date-fns";

  export let data;
  export let visibleDatasets: number[];
  export let options: ChartOptions<any>;

  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale,
    TimeScale,
    type ChartOptions,
  } from "chart.js";

  ChartJS.register(
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale,
    TimeScale,
    // fnsDateAdapter,
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

<div class="chart-container">
  <Line
    {data}
    bind:chart
    options={{
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            filter: (item, _) => visibleDatasets.includes(item.datasetIndex),
          },
          onClick: (e) => e.native.stopPropagation(),
        },
      },
      ...options,
    }}
  />
</div>

<style>
  .chart-container {
    position: relative;
    z-index: 100;
    background-color: #ddd;
    flex: 0 0 75%;
    max-width: 75%;
    margin-left: auto;
    margin-right: auto;
    height: 80%;
  }
</style>
