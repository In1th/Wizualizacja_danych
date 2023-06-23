<script>
    import { Line } from 'svelte-chartjs';
    import { chart_css } from './chart_css.js';

    export let data;

    import {
        Chart as ChartJS,
        Title,
        Tooltip,
        Legend,
        LineElement,
        LinearScale,
        PointElement,
        CategoryScale,
    } from 'chart.js';

    ChartJS.register(
        Title,
        Tooltip,
        Legend,
        LineElement,
        LinearScale,
        PointElement,
        CategoryScale
    );

</script>

<div class="chart-container"
    style = 
        "width: {chart_css.width};">
    <Line {data} options={{ responsive: true }} />
</div>

<style>
    .chart-container {
        position: relative;
        z-index: 100;
        display: flex !important;
    }
</style> 
