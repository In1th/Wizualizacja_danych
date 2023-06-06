import { derived, writable } from 'svelte/store'

export enum PlotType {
	scatter,
	bar,
	pie
}

export const plot = (() => {
	const { subscribe, set } = writable(PlotType.scatter);

	function toggle(plot: PlotType) {
		console.log('enabled', plot)
		set(plot);
	}

	return {
		subscribe,
		toggle,
	}
})();

export const scatterActive = derived(plot, $plot => $plot === PlotType.scatter)
export const barActive = derived(plot, $plot => $plot === PlotType.bar)
export const pieActive = derived(plot, $plot => $plot === PlotType.pie)