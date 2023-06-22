<script>
    import { Pie } from 'svelte-chartjs';
    import { chart_css } from './chart_css.js';

    export let visible;
    export let data;


    import {
        Chart as ChartJS,
        Title,
        Tooltip,
        Legend,
        ArcElement,
        CategoryScale,
    } from 'chart.js';

  ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);
</script>

<div class="chart-container"
    class:visible={visible}
    style = 
        "width: {chart_css.width};">
    <Pie {data} options={{ responsive: true }} />
</div>

<style>
    .chart-container {
        display: none;
    }

    .visible {
        display: flex !important;
    }
</style> 
