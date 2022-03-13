<template>
	<div class="page-kit-typography">
		<MarkupSection>
			<template slot="title">Ui-Kit - Typography</template>

			<div class="page-kit-typography__group">
				<h1>Headline 1 (22PX)</h1>
				<h2>Headline 2 (18PX)</h2>
				<h3>Headline 3 (16PX)</h3>
			</div>

			<div class="page-kit-typography__group">
				<p>Paragraph default</p>
				<p>Lorem ipsum dolor sit amet, <nuxt-link to="/">consectetur adipiscing</nuxt-link> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			</div>

			<div class="page-kit-typography__group">
				<p class="_sm">Paragraph small</p>
				<p class="_sm">Lorem ipsum dolor sit amet, <nuxt-link to="/">consectetur adipiscing</nuxt-link> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			</div>

			<div class="page-kit-typography__group">
				<p class="_lg">Paragraph large</p>
				<p class="_lg">Lorem ipsum dolor sit amet, <nuxt-link to="/">consectetur adipiscing</nuxt-link> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			</div>

			<div class="page-kit-typography__group">
				<h6>Footnote</h6>
			</div>
		</MarkupSection>
	</div>
</template>

<script>
	import MarkupSection from '/components/markup/section/index.vue';
	import GridRow from '/components/grid/row/index.vue';
	import GridCol from '/components/grid/col/index.vue';

	export default {
		name: 'PageKitColor',

		components: {
			GridRow,
			GridCol,
			MarkupSection,
		},
	}
</script>

<style lang="scss">
	.page-kit-typography {
		&__group {
			margin-bottom: calc(var(--gap) * 2);
		}
	}
</style>
