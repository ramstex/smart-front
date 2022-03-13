<template>
	<div class="grid-row">
		<slot />
	</div>
</template>

<script>
	export default {
		name: 'GridRow',

		props: {},
	};
</script>

<style lang="scss">
	.grid-row {
		display: flex;
		flex-wrap: wrap;
		margin-left: calc(-1 * var(--gap) / 2);
		margin-right: calc(-1 * var(--gap) / 2);
	}
</style>
