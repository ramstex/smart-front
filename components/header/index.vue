<template>
	<header class="header">
		<p>header</p>
		<BaseIcon icon="burger"></BaseIcon>
	</header>
</template>

<script>
	import BaseIcon from '/components/base/icon/index.vue';

	export default {
		name: 'Header',

		components: {
			BaseIcon,
		},
	}
</script>

<style lang="scss">
	.header {
		padding: var(--gap);
		background: var(--color-light-grey);
	}
</style>
