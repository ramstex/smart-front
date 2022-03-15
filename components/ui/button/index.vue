<template>
	<BaseLink
		class="ui-button"
		:class="rootClass"
		v-if="isLink"
		:href="href"
		v-bind="$attrs"
		v-on="$listeners"
	>
		<slot />
	</BaseLink>
	<button
		class="ui-button"
		:class="rootClass"
		v-else
		v-bind="$attrs"
		v-on="$listeners"
	>
		<slot />
	</button>
</template>

<script>
	import BaseLink from '/components/base/link/index.vue';

	export default {
		name: 'UiButton',

		inheritAttrs: false,

		components: {
			BaseLink,
		},

		props: {
			href: {
				type: String,
			},

			full: {
				type: Boolean,
			},

			disabled: {
				type: Boolean,
			},

			rounded: {
				type: Boolean,
			},

			invert: {
				type: Boolean,
			},

			small: {
				type: Boolean,
			}
		},

		computed: {
			rootClass() {
				return [
					{ '_full': this.full },
					{ '_disabled': this.disabled },
					{ '_rounded': this.rounded },
					{ '_invert': this.invert },
					{ '_small': this.small },
				];
			},

			isLink() {
				return !!this.href;
			},
		},
	};
</script>

<style lang="scss">
	.ui-button {
		display: flex;
		align-items: center;
		justify-content: center;
		width: fit-content;
		padding: calc(var(--gap) * 0.75 - 1px) calc(var(--gap) * 1.5);
		border: 1px solid transparent;
		border-radius: calc(var(--gap) / 4);
		font-family: var(--family-primary);
		font-weight: 700;
		font-size: 14px;
		line-height: 20px;
		text-align: center;
		letter-spacing: 1.25px;
		text-transform: uppercase;
		text-decoration: none;
		color: var(--color-white);
		background-color: var(--color-graphite);
		transition: var(--trans-all);
		cursor: pointer;
		-webkit-appearance: none;

		&:hover {
			background-color: var(--color-asphalt);
		}

		&._full {
			width: 100%;
		}

		&._small {
			line-height: 160%;
			padding: calc(var(--gap) / 2 - 1px) var(--gap);
		}

		&._rounded {
			border-radius: calc(var(--gap) * 3);
		}

		&._disabled {
			background-color: var(--color-grey);
			pointer-events: none;
			user-select: none;
		}

		&._invert {
			color: var(--color-graphite);
			background-color: var(--color-white);

			&:hover {
				border-color: var(--color-grey);
				background-color: var(--color-light-grey);
			}

			&._disabled {
				color: var(--color-dark-grey);
			}
		}
	}
</style>
