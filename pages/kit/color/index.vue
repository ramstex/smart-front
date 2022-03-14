<template>
	<div class="page-kit-color">
		<MarkupSection>
			<template v-slot:title>Ui-Kit - Color</template>

			<GridRow
				class="page-kit-color__group"
				v-for="(group, index) in items"
				:key="index"
			>
				<GridCol
					class="page-kit-color__col"
					v-for="value in group"
					:key="value.name"
				>
					<LocalItem
						:name="value.name"
						:code="value.code"
						:border="value.border"
					/>
				</GridCol>
			</GridRow>
		</MarkupSection>
	</div>
</template>

<script>
	import MarkupSection from '/components/markup/section/index.vue';
	import GridRow from '/components/grid/row/index.vue';
	import GridCol from '/components/grid/col/index.vue';
	import LocalItem from './components/item.vue';

	export default {
		name: 'PageKitColor',

		components: {
			GridRow,
			GridCol,
			MarkupSection,
			LocalItem,
		},

		data() {
			return {
				items: [
					[
						{
							name: 'graphite',
							code: '#1F2026',
						},
						{
							name: 'asphalt-dark',
							code: '#323338',
						},
						{
							name: 'asphalt',
							code: '#484A54',
						},
						{
							name: 'dark-grey',
							code: '#7C7D88',
						},
						{
							name: 'grey',
							code: '#BCBDC5',
						},
						{
							name: 'light-grey',
							code: '#F5F5F5',
						},
						{
							name: 'white',
							code: '#FFFFFF',
							border: true,
						},
					],
					[
						{
							name: 'red',
							code: '#FF3B30',
						},
						{
							name: 'orange',
							code: '#FF9500',
						},
						{
							name: 'yellow',
							code: '#FFCC00',
						},
					],
					[
						{
							name: 'light-green',
							code: '#94EEAA',
						},
						{
							name: 'main-green',
							code: '#34C759',
						},
						{
							name: 'dark-green',
							code: '#21A342',
						},
					],
					[
						{
							name: 'main-blue',
							code: '#273270',
						},
						{
							name: 'dark-blue',
							code: '#1D254F',
						},
					],
				],
			}
		},
	}
</script>

<style lang="scss">
	.page-kit-color {
		&__group {
			display: flex;
			flex-wrap: wrap;
		}

		&__col {
			width: 110px;
		}

		.page-kit-color-item {
			margin-bottom: calc(var(--gap) * 2);
		}
	}
</style>
