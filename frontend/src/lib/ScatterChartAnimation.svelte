<script lang="ts">
  export let active;
</script>

<div id="waves" class:active>
  <svg
    preserveAspectRatio="xMaxYMax meet"
    style="width: 100%;height: 100vh;background: none;"
    viewBox="0 0 2000 500"
  >
    <path
      class="line"
      d="M0 493.793c21-1.738 63-.302 105-8.69 42-8.39 63-21.33 105-33.253 42-11.923 63-25.347 105-26.362 42-1.015 63 25.915 105 21.287s63-27.028 105-44.427c42-17.398 63-27.114 105-42.565 42-15.451 63-36.05 105-34.69 42 1.358 63 50.585 105 41.484 42-9.1 63-81.643 105-86.988 42-5.346 63 45.537 105 60.262 42 14.726 63 23.632 105 13.365 42-10.267 63-41.685 105-64.701 42-23.016 63-50.371 105-50.38 42-.009 63 73.64 105 50.336 42-23.304 63-134.316 105-166.855 42-32.54 63-3.822 105 4.16s63 38.225 105 35.75c42-2.474 63-25.78 105-48.122 42-22.343 84-50.872 105-63.59"
      fill="none"
    />
    <path
      class="line"
      d="M0 493.793c21-1.738 63-.302 105-8.69 42-8.39 63-21.33 105-33.253 42-11.923 63-25.347 105-26.362 42-1.015 63 25.915 105 21.287s63-27.028 105-44.427c42-17.398 63-27.114 105-42.565 42-15.451 63-36.05 105-34.69 42 1.358 63 50.585 105 41.484 42-9.1 63-81.643 105-86.988 42-5.346 63 45.537 105 60.262 42 14.726 63 23.632 105 13.365 42-10.267 63-41.685 105-64.701 42-23.016 63-50.371 105-50.38 42-.009 63 73.64 105 50.336 42-23.304 63-134.316 105-166.855 42-32.54 63-3.822 105 4.16s63 38.225 105 35.75c42-2.474 63-25.78 105-48.122 42-22.343 84-50.872 105-63.59"
      fill="none"
      stroke-width="2"
    />
    <g class="points">
      <circle style="--no: {1}" cy="493.793" r="6" />,
      <circle style="--no: {2}" cx="105" cy="485.102" r="6" />,
      <circle style="--no: {3}" cx="210" cy="451.85" r="6" />,
      <circle style="--no: {4}" cx="315" cy="425.488" r="6" />,
      <circle style="--no: {5}" cx="420" cy="446.775" r="6" />,
      <circle style="--no: {6}" cx="525" cy="402.348" r="6" />,
      <circle style="--no: {7}" cx="630" cy="359.783" r="6" />,
      <circle style="--no: {8}" cx="735" cy="325.092" r="6" />,
      <circle style="--no: {9}" cx="840" cy="366.577" r="6" />,
      <circle style="--no: {10}" cx="945" cy="279.589" r="6" />,
      <circle style="--no: {11}" cx="1050" cy="339.851" r="6" />,
      <circle style="--no: {12}" cx="1155" cy="353.216" r="6" />,
      <circle style="--no: {13}" cx="1260" cy="288.515" r="6" />,
      <circle style="--no: {14}" cx="1365" cy="238.135" r="6" />,
      <circle style="--no: {15}" cx="1470" cy="288.471" r="6" />,
      <circle style="--no: {16}" cx="1575" cy="121.616" r="6" />,
      <circle style="--no: {17}" cx="1680" cy="125.776" r="6" />,
      <circle style="--no: {18}" cx="1785" cy="161.527" r="6" />,
      <circle style="--no: {19}" cx="1890" cy="113.404" r="6" />,
      <circle style="--no: {20}" cx="1995" cy="49.814" r="6" />
    </g>
  </svg>
</div>

<style lang="scss">
  #waves {
    position: absolute;
    bottom: 0;
    width: 100vw;
    z-index: 7;
    opacity: 0.4;

    &.active {
      z-index: 10;
    }
  }

  .points {
    pointer-events: all;
  }

  circle {
    fill: #5239ff;
    transform: translateY(2000px);
    transition: all 1s ease-out;
    filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.5));
    cursor: pointer;

    &:hover {
      r: 12px;
    }
  }

  .active circle {
    transform: translateY(0px);
    transition-delay: 0.5s;
    transition: all calc(0.05s + var(--no) * 0.05s) ease-out;
  }

  .line {
    stroke: #9181ff;
    opacity: 0;
    transition: all 0.1s ease-out;
  }

  .active .line {
    opacity: 1;
    transition-delay: calc(0.05s + 20 * 0.05s);
  }
</style>
