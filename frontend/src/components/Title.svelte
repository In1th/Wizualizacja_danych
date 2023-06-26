<script>
  import { chartData, currentChart } from "../store/chartStore";

    $: data = $chartData.datasets[0].data;
    $: text = $currentChart === 'cena za m2'? `Średnia: ${data.reduce((a,b)=> a + b/data.length, 0).toFixed(2)} zł`: '';
</script>

<h4>{text}</h4>

<style>
    h4 {
        text-align: center;
    }
</style>