<script lang="ts">
	import type { FilterGroup } from '../interfaces/FilterGroup'

	export let name: string
	export let tree: FilterGroup[]

	function buildTreeWithState(tree: FilterGroup[]) {
		const _tree = [];
		tree.forEach((group, index) => {
			const statefulGroup = {
				id: index,
				name: group.name,
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

	// Internal tree with additional data
	let internalTree = buildTreeWithState(tree);

	function toggle(groupId: number) {
		internalTree[groupId].collapsed = !internalTree[groupId].collapsed
	}

	function choose(groupId: number, filterId: number) {
		internalTree.forEach((_, gi) => {
			internalTree[gi].filters.forEach((_, fi) => {
				internalTree[gi].filters[fi].chosen = fi === filterId
			})
		})

		internalTree[groupId].filters[filterId].callback()
	}
</script>

<div class="filters-tree">
	<header>{name}</header>
	<ul class="filter-root">
		{#each internalTree as group}
			<li class="filter-group">
				<header on:click={toggle.bind(null, group.id)}>
					<span class:bi-dash-square={!group.collapsed} class:bi-plus-square={group.collapsed}></span>
					<span class="filter-group-name">{group.name}</span>
					<span class="filter-group-count">{group.filters.length}</span>
				</header>
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
</style>