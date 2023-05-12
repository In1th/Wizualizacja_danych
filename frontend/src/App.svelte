<script lang="ts">
  import Map from './lib/Map.svelte';
</script>

<main>
  <h1>Stan Rynku nieruchomości w Polsce</h1>
  <p>Stan na 05.2023</p>
  <section>
    <Map/>
  </section>
  <footer>
    <p>2023, made by Mateusz Kruk</p>
  </footer>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
  }
  footer {
    height: fit-content;
    margin-top: auto;
    margin: .5rem;
  }
  section{
    flex-grow: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 2rem;
  }
</style>