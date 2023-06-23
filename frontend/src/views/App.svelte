<script lang="ts">
    import BarChart from '../assets/charts/BarChart.svelte';
    import PieChart from '../assets/charts/PieChart.svelte';
    import PolarAreaChart from '../assets/charts/PolarAreaChart.svelte';
import MapMenu from '../components/MapMenu.svelte'
import Synopsis from '../components/Synopsis.svelte'
    import BarChartAnimation from '../lib/BarChartAnimation.svelte';
    import ChartList from '../lib/ChartList.svelte';
    import PaperChartAnimation from '../lib/PaperChartAnimation.svelte';
    import ScatterChartAnimation from '../lib/ScatterChartAnimation.svelte';
    import { chartData, currentChart, currentType } from '../store/chartStore';
    import { barActive, resetActive, scatterActive } from '../store/store';
</script>

<div class="main-container">
  <div id="main-left">
    <MapMenu/>
    <ChartList/>
  </div>
  <div id="main-right">
    <Synopsis/>
    <div>
      {#if $currentType === 'bar'}
          <BarChart data={$chartData}/>
        {/if}
        {#if $currentType === 'pie'}
          <PieChart data={$chartData}/>
        {/if}
        {#if $currentType === 'polar area'}
          <PolarAreaChart data={$chartData}/>
      {/if}
    </div>
  </div>
</div>

<div class="visualization-container" style="position: absolute;top: 0;left: 0;z-index: 1;width: 100vw;height: 100vh;pointer-events: none;">
	<ScatterChartAnimation active={$scatterActive}/>
	<BarChartAnimation active={$barActive}/>
	<PaperChartAnimation active={$resetActive}/>
</div>

<style lang="scss">
  .main-container {
    display: flex;
    background: #ddd;
    height: 100vh;

    & > * {
      display: flex;
      flex-direction: column;
      width: 50%;
    }
  }
  #main-left {
    align-items: center;
  }
</style>