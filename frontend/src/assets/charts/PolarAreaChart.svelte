<script>
    import { PolarArea } from 'svelte-chartjs';
    import { chart_css } from './chart_css.js';

    export let visible;
    export let data;

    import {
        Chart as ChartJS,
        Title,
        Tooltip,
        Legend,
        ArcElement,
        RadialLinearScale,
  } from 'chart.js';

  ChartJS.register(Title, Tooltip, Legend, ArcElement, RadialLinearScale);

</script>

<div class="chart-container"
    class:visible={visible}
    style = 
        "width: {chart_css.width};">
    <PolarArea {data} options={{ responsive: true }} />
</div>

<style>
    .chart-container {
        display: none;
    }

    .visible {
        display: flex !important;
    }
</style> 
