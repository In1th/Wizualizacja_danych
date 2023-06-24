<script>
  export let active;
</script>

<div id="bar" class:active>
  <svg height="auto" viewBox="0 0 2000 500" xmlns="http://www.w3.org/2000/svg">
    <path
      style="--no: {1}"
      d="M0 500h80V131.494q0-4-4-4H4q-4 0-4"
      fill="#ffffff"
    />
    <path
      style="--no: {2}"
      d="M0 4ZM100 500h80V392.702q0-4-4-4h-72q-4 0-4"
      fill="#ffffff"
    />
    <path
      style="--no: {3}"
      d="M0 4ZM200 500h80V103.324q0-4-4-4h-72q-4 0-4"
      fill="#ffffff"
    />
    <path
      style="--no: {4}"
      d="M0 4ZM300 500h80V307.242q0-4-4-4h-72q-4 0-4"
      fill="#ffffff"
    />
    <path
      style="--no: {5}"
      d="M0 4ZM400 500h80V218.233q0-4-4-4h-72q-4 0-4"
      fill="#ffffff"
    />
    <path
      style="--no: {6}"
      d="M0 4ZM500 500h80V171.397q0-4-4-4h-72q-4 0-4"
      fill="#ffffff"
    />
    <path
      style="--no: {7}"
      d="M0 4ZM600 500h80V75.878q0-4-4-4h-72q-4 0-4"
      fill="#ffffff"
    />
    <path
      style="--no: {8}"
      d="M0 4ZM700 500h80V64.488q0-4-4-4h-72q-4 0-4"
      fill="#ffffff"
    />
    <path
      style="--no: {9}"
      d="M0 4ZM800 500h80V228.887q0-4-4-4h-72q-4 0-4"
      fill="#ffffff"
    />
    <path
      style="--no: {10}"
      d="M0 4ZM900 500h80V278.779q0-4-4-4h-72q-4 0-4"
      fill="#ffffff"
    />
    <path
      style="--no: {11}"
      d="M0 4ZM1000 500h80V373.068q0-4-4-4h-72q-4 0-4"
      fill="#ffffff"
    />
    <path
      style="--no: {12}"
      d="M0 4ZM1100 500h80V138.358q0-4-4-4h-72q-4 0-4"
      fill="#ffffff"
    />
    <path
      style="--no: {13}"
      d="M0 4ZM1200 500h80V64.194q0-4-4-4h-72q-4 0-4"
      fill="#ffffff"
    />
    <path
      style="--no: {14}"
      d="M0 4ZM1300 500h80V176.646q0-4-4-4h-72q-4 0-4"
      fill="#ffffff"
    />
    <path
      style="--no: {15}"
      d="M0 4ZM1400 500h80V289.872q0-4-4-4h-72q-4 0-4"
      fill="#ffffff"
    />
    <path
      style="--no: {16}"
      d="M0 4ZM1500 500h80V375.043q0-4-4-4h-72q-4 0-4"
      fill="#ffffff"
    />
    <path
      style="--no: {17}"
      d="M0 4ZM1600 500h80V289.858q0-4-4-4h-72q-4 0-4"
      fill="#ffffff"
    />
    <path
      style="--no: {18}"
      d="M0 4ZM1700 500h80V376.313q0-4-4-4h-72q-4 0-4"
      fill="#ffffff"
    />
    <path
      style="--no: {19}"
      d="M0 4ZM1800 500h80V71.82q0-4-4-4h-72q-4 0-4"
      fill="#ffffff"
    />
    <path
      style="--no: {20}"
      d="M0 4ZM1900 500h80V157.97q0-4-4-4h-72q-4 0-4 4Z"
      fill="#ffffff"
    />
  </svg>
</div>

<style lang="scss">
  #bar {
    position: absolute;
    bottom: 0;
    width: 100vw;
    z-index: 7;
    opacity: 0.4;

    svg {
      pointer-events: all;
    }

    &.active {
      z-index: 10;
    }
  }
  path {
    transform: translateY(500px);
    transition: all 1s ease-out;
    fill: #9181ff;
    filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.5));
    cursor: pointer;

    &:hover {
      fill: #5137ff;
    }
  }
  .active path {
    transform: translateY(0px);
    transition-delay: 0.5s;
    transition: all calc(0.05s + var(--no) * 0.05s) ease-out;
  }
</style>
