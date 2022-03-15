<template>
	<div class="markup-layout">
		<Header />

		<div class="markup-layout__content">
			<slot />
		</div>

		<Footer />
	</div>
</template>

<script>
import Header from '/components/header/index.vue';
import Footer from '/components/footer/index.vue';

export default {
	name: 'MarkupLayout',

	components: {
		Header,
		Footer,
	},
}
</script>

<style lang="scss">
.markup-layout {
	display: flex;
	flex-direction: column;
	flex-grow: 1;

	&__content {
		flex-grow: 1;
	}
}
</style>
