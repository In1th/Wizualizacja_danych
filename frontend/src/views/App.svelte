<script lang="ts">
import MapMenu from '../components/MapMenu.svelte'
import Scatter from '../lib/Scatter.svelte'
import { scatterActive } from '../store/store.js'
import Synopsis from '../components/Synopsis.svelte'
</script>

<MapMenu classes="tl-cell" />
<Synopsis classes="tr-cell" />
<div class="vertical-ruler"></div>
<div class="horizontal-ruler"></div>

<Scatter active={$scatterActive} classes="b-row"/>

<style lang="scss">
	@import "../assets/style/vars";

	:global {
    #app {
      display: grid;
      grid-template-columns: 1fr 1fr 20px;
      grid-template-rows: 1fr 1fr 20px;
      background: $main-bg-colour;
      height: 100%;
    }

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
    background-color: #7FB285;
  }

  .horizontal-ruler {
    grid-row: 3 / 4;
    grid-column: 1 / 3;
    background-color: #7FB285;
  }
</style>