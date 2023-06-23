<script>
    import { Bar } from 'svelte-chartjs';
    import { chart_css } from './chart_css.js';

    export let data;

    import {
    Chart,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
  } from 'chart.js';

  Chart.register(
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
  );
</script>

<div class="chart-container"
    style = 
        "width: {chart_css.width};">
    <Bar {data} options={{ responsive: true }} />
</div>

<style>
    .chart-container {
        position: relative;
        z-index: 80;
        display: flex !important;
    }
</style> 
