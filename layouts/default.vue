<template>
	<MarkupLayout class="layout-default">
		<template>
			<nuxt />
		</template>
	</MarkupLayout>
</template>

<script>
	import MarkupLayout from '/components/markup/layout/index.vue';

	export default {
		name: 'LayoutDefault',

		components: {
			MarkupLayout,
		},
	}
</script>

<style lang="scss">
	.layout-default {}
</style>
