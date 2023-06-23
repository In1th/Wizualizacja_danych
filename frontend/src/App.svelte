<script lang="ts">
    import Bar from './lib/Bar.svelte';
import Map from './lib/Map.svelte';
    import Pie from './lib/Pie.svelte';
    import Scatter from './lib/Scatter.svelte';

    let scatter = false;
    let bar = false
    $: trigger = scatter || bar;

  const onScatter = () => {
    scatter = !scatter;
    bar = false;
  }
  const onBar = () => {
    bar = !bar;
    scatter = false;
  }
</script>

<!--<div id='bg'></div>
<div id='bg-overlay-1' data-active={trigger}></div>
<div id='bg-overlay-2' data-active={trigger}></div>
<main>
  <h1>Stan Rynku nieruchomości w Polsce</h1>
  <p>Stan na 05.2023</p>
  <section>
    <Map/>
    <div id="charts">
      <button on:click={onScatter}>scatter connected</button>
      <button on:click={onBar}>bar</button>
    </div>
  </section>
  <footer>
    <b>2023, made by Mateusz Kruk</b>
  </footer>
</main>-->

<!--<Scatter active={scatter}/>-->
<!--<Bar active={bar}/>-->
<!-- <Pie/> -->

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
  }
  footer {
    height: fit-content;
    margin-top: auto;
    margin: .5rem;
    z-index: 1;
  }
  section{
    flex-grow: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 2rem;
  }
  h1{
    margin: 0;
    margin-top: 1rem;
  }
  #bg {
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: #242424;
    opacity: 0.8;
    background-image:  linear-gradient(#ffffff 5.2px, transparent 5.2px), linear-gradient(90deg, #ffffff 5.2px, transparent 5.2px), linear-gradient(#ffffff 2.6px, transparent 2.6px), linear-gradient(90deg, #ffffff 2.6px, #323232 2.6px);
    background-size: 130px 130px, 130px 130px, 26px 26px, 26px 26px;
    background-position: -5.2px -5.2px, -5.2px -5.2px, -2.6px -2.6px, -2.6px -2.6px;
    z-index: -3;
  }
  #bg-overlay-1,  #bg-overlay-2{
    position: absolute;
    z-index: -2;
    transition: all .5s ease-in;
  }
  #bg-overlay-1{
    transform: translateX(-100vw);
    width: 200vw;
    height: 100vh;
    background: linear-gradient(90deg, #242424 60%, rgba(36, 36, 36, .7) 80%, rgba(0,0,0,0) 100%);
  }
  #bg-overlay-1[data-active="true"]{
    transform: translateX(-20vw);
  }
  #bg-overlay-2{
    width: 100vw;
    height: 200vh;
    transform: translateY(-100vh);
    background: linear-gradient(180deg, #242424 60%, rgba(36, 36, 36, .7) 80%, rgba(0,0,0,0) 100%);
  }
  #bg-overlay-2[data-active="true"]{
    transform: translateY(-20vh);
  }
  #charts{
    margin: 4rem 2rem;
    background-color: rgba(255,255,255,.2);
    height: calc(100% - 8rem);
    min-width: 600px;
  }
</style>