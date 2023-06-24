export type Filter = {
	default: boolean
	callback: (any) => void
} & ({ name: string } | { html: string })

export interface FilterGroup {
	name: string
	filters: Filter[]
}