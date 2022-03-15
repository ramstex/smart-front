<template>
	<div class="grid-row" :class="rootClass">
		<slot />
	</div>
</template>

<script>
	const alignValues = [
		'start',
		'end',
		'center',
	];
	export default {
		name: 'GridRow',

		props: {
			align: {
				type: String,
				default: alignValues[0],

				validator(value) {
					return alignValues.indexOf(value) >= 0;
				},
			},
		},

		computed: {
			rootClass() {
				return [
					{ '_align_start': this.align === 'start' },
					{ '_align_end': this.align === 'end' },
					{ '_align_center': this.align === 'center' },
				]
			},
		},
	};
</script>

<style lang="scss">
	.grid-row {
		display: flex;
		flex-wrap: wrap;
		margin-left: calc(-1 * var(--gap) / 2);
		margin-right: calc(-1 * var(--gap) / 2);

		&._align_start {
			align-items: flex-start;
		}

		&._align_end {
			align-items: flex-end;
		}

		&._align_center {
			align-items: center;
		}
	}
</style>
