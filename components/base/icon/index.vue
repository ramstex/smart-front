<template>
	<svg-icon class="base-icon"
		:name="icon"
	/>
</template>

<script>
	import '/assets/icons/arrow-down.svg';
	import '/assets/icons/arrow-up.svg';
	import '/assets/icons/burger.svg';
	import '/assets/icons/like-empty.svg';
	import '/assets/icons/like-filled.svg';
	import '/assets/icons/logo.svg';

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
