<script lang="ts">
  import { Bar } from "svelte-chartjs";
  import { chart_css } from "./chart_css.js";

  import {
    Chart,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
  } from "chart.js";

  export let data;

  Chart.register(
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
  );
</script>

<div class="chart-container" style="width: {chart_css.width};">
  <Bar {data} options={{ responsive: true }} />
</div>

<style>
  .chart-container {
    position: relative;
    z-index: 80;
    display: flex !important;
    background-color: #ddd;
  }
</style>
