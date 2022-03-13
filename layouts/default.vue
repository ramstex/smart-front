<template>
	<div class="layout-default">
		<Header />

		<div class="layout-default__content">
			<nuxt />
		</div>

		<Footer />
	</div>
</template>

<script>
	import Header from '/components/header/index.vue';
	import Footer from '/components/footer/index.vue';

	export default {
		components: {
			Header,
			Footer,
		},
	}
</script>

<style lang="scss">
	.layout-default {
		display: flex;
		flex-direction: column;
		flex-grow: 1;

		.header {

		}

		&__content {
			flex-grow: 1;
		}
	}
</style>
