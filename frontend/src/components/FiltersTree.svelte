<!-- svelte-ignore a11y-click-events-have-key-events -->
<script lang="ts">
	import type { FilterGroup } from '../interfaces/FilterGroup'
	import { onMount } from 'svelte'
	import { Collapse } from 'bootstrap'

	export let name: string
	export let tree: FilterGroup[]

	function buildTreeWithState(tree: FilterGroup[]) {
		const _tree = [];
		tree.forEach((group, index) => {
			const statefulGroup = {
				id: index,
				name: group.name,
				el: null,
				btCollapse: null,
				collapsed: false,
				filters: []
			};

			statefulGroup.filters = group.filters.map((filter, index) => {
				const _filter = {
					id: index,
					chosen: filter.default,
					...filter
				}
				return _filter
			})

			_tree.push(statefulGroup)
		})
		return _tree;
	}

	function toggle(groupId: number) {
		internalTree[groupId].collapsed = !internalTree[groupId].collapsed
		if (internalTree[groupId].collapsed) {
			internalTree[groupId].btCollapse.hide()
		} else {
			internalTree[groupId].btCollapse.show()
		}
	}

	function choose(groupId: number, filterId: number) {
		internalTree.forEach((_, gi) => {
			internalTree[gi].filters.forEach((_, fi) => {
				internalTree[gi].filters[fi].chosen = fi === filterId
			})
		})

		internalTree[groupId].filters[filterId].callback()
	}

	// Internal tree with additional data
	let internalTree = buildTreeWithState(tree);

	onMount(() => {
		internalTree.forEach((_, gi) => {
			internalTree[gi].btCollapse = new Collapse(internalTree[gi].el.querySelector(".filter-group-items-container"), { toggle: false })
		})
	})
</script>

<div class="filters-tree">
	<header>{name}</header>
	<ul class="filter-root">
		{#each internalTree as group}
			<li bind:this={group.el} class="filter-group">
				<header on:click={toggle.bind(null, group.id)}>
					<span class:bi-dash-square={!group.collapsed} class:bi-plus-square={group.collapsed}></span>
					<span class="filter-group-name">{group.name}</span>
					<span class="filter-group-count">{group.filters.length}</span>
				</header>
				<div class="filter-group-items-container collapse show">
					<ul>
						{#each group.filters as filter}
							<li class="filter-item" class:chosen={filter.chosen} on:click={choose.bind(null, group.id, filter.id)}>
								<span class:bi-arrow-right-short={filter.chosen}></span>
								{#if filter.name}
									<span class="filter-name">{filter.name}</span>
								{:else if filter.html}
									<span class="filter-name">{@html filter.html}</span>
								{:else}
									<span class="filter-name">[Missing filter name]</span>
								{/if}
							</li>
						{/each}
					</ul>
				</div>
			</li>
		{/each}
	</ul>
</div>

<style lang="scss">
.filters-tree {

	> header {
		font-size: 1.5rem;
		margin-bottom: 1rem;
	}
}

.filter-root {
	margin: 0;
	padding: 0;
}

.filter-group {
	list-style: none;
	margin-bottom: 1rem;
  width: fit-content;

	> header {
		margin-bottom: 0.5rem;
    user-select: none;
		cursor: pointer;
	}

	&-name {

	}

	&-count {

		&::before {
			content: '(';
		}

		&::after {
			content: ')';
		}
	}

	&-items-container {
		max-height: 300px;
    width: 20vw;
		overflow-y: auto;
    scroll-behavior: smooth;
    scrollbar-width: thin;
    scrollbar-color: #8c8c8c #ddd;
	}
}

.filter-item {
  width: fit-content;
	list-style: none;
	margin-bottom: 0.3rem;
  user-select: none;
  cursor: pointer;

	&:hover {

		.filter-name {
			font-weight: 550;
		}
	}

	&.chosen {

		.filter-name {
			font-weight: bold;
		}
	}
}
.filter-group-items-container {
	overflow: hidden;
}
</style>