<script lang="ts">
  import { Bubble } from "svelte-chartjs";

  export let data;

  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LinearScale,
  } from "chart.js";

  ChartJS.register(Title, Tooltip, Legend, PointElement, LinearScale);
</script>

<div class="chart-container">
  <Bubble {data} options={{ responsive: true, maintainAspectRatio: false }} />
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
