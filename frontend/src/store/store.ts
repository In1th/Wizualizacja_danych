import { derived, writable } from "svelte/store";

export type PlotType = "scatter" | "bar" | "reset";

export const plot = (() => {
  const { subscribe, set } = writable("reset" as PlotType);

  function toggle(plot: PlotType) {
    console.log("enabled", plot);
    set(plot);
  }

  return {
    subscribe,
    toggle,
  };
})();

export const scatterActive = derived(plot, ($plot) => $plot === "scatter");
export const barActive = derived(plot, ($plot) => $plot === "bar");
export const resetActive = derived(plot, ($plot) => $plot === "reset");
