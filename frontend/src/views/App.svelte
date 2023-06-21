<script lang="ts">
import MapMenu from '../components/MapMenu.svelte'
import Scatter from '../lib/Scatter.svelte'
import { pieActive, barActive, scatterActive } from '../store/store.js'
import Synopsis from '../components/Synopsis.svelte'
import Bar from '../lib/Bar.svelte'
import Pie from '../lib/Pie.svelte'
</script>

<div class="main-container">
	<MapMenu classes="tl-cell" />
	<Synopsis classes="tr-cell" />
	<div class="vertical-ruler"></div>
	<div class="horizontal-ruler"></div>
</div>

<div class="visualization-container" style="position: absolute;top: 0;left: 0;z-index: 1;width: 100vw;height: 100vh;pointer-events: none;">
	<Scatter active={$scatterActive}/>
	<Bar active={$barActive}/>
	<Pie active={$pieActive}/>
</div>

<style lang="scss">
  .main-container {
    display: grid;
    grid-template-columns: 1fr 1fr 20px;
    grid-template-rows: 1fr 1fr 20px;
    background: #ddd;
    height: 100vh;

    .tl-cell {
      grid-row: 1 / 2;
      grid-column: 1 / 2;
    }

    .tr-cell {
      grid-row: 1 / 2;
      grid-column: 2 / 3;
    }

    .b-row {
      grid-row: 2 / 3;
      grid-column: 1 / 3;
    }
  }

  .vertical-ruler {
    grid-row: 1 / 3;
    grid-column: 3/ 4;
    background-color: transparent;
  }

  .horizontal-ruler {
    grid-row: 3 / 4;
    grid-column: 1 / 3;
    background-color: transparent;
  }
</style>