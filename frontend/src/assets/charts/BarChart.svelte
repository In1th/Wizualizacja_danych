<script lang="ts">
  import { Bar } from "svelte-chartjs";

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

<div class="chart-container">
  <Bar {data} options={{ responsive: true, maintainAspectRatio: false }} />
</div>

<style>
  .chart-container {
    position: relative;
    z-index: 100;
    flex: 0 0 75%;
    max-width: 75%;
    margin-left: auto;
    margin-right: auto;
    height: 80%;
  }
</style>
