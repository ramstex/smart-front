<template>
	<svg-icon class="base-icon"
		:name="icon"
	/>
</template>

<script>
	export default {
		name: 'BaseIcon',

		props: {
			icon: {
				type: String,
				required: true,
			},
		},
	};
</script>

<style lang="scss">
	.base-icon {
		display: block;
		width: 24px;
		height: 24px;
	}
</style>
