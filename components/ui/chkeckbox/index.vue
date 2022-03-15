<template>
	<label class="ui-checkbox" :class="rootClass">
		<input
			class="ui-checkbox__checkbox"
			ref="input"
			type="checkbox"
			v-bind="$attrs"
			v-model="isChecked"
			:disabled="disabled"
		/>

		<div class="ui-checkbox__icon">
			<BaseIcon v-if="isChecked" class="ui-checkbox__check" icon="checkbox" />
		</div>

		<p class="ui-checkbox__caption">
			<slot />
		</p>
	</label>
</template>

<script>
	import BaseIcon from '/components/base/icon/index.vue';

	export default {
		name: 'UiCheckbox',

		inheritAttrs: false,

		components: {
			BaseIcon,
		},

		model: {
			prop: 'checked',
			event: 'update',
		},

		props: {
			checked: {
				type: Boolean,
			},

			disabled: {
				type: Boolean,
			},
		},

		data() {
			return {
				isChecked: this.checked || false,
			};
		},

		computed: {
			rootClass() {
				return [
					{ '_checked': this.isChecked },
					{ '_disabled': this.disabled },
				]
			},
		},

		watch: {
			isChecked(value) {
				this.$emit('update', value);
			},

			checked(value) {
				this.isChecked = value;
			},
		},
	};
</script>

<style lang="scss">
	.ui-checkbox {
		display: flex;
		width: fit-content;
		cursor: pointer;

		&__checkbox {
			position: absolute;
			opacity: 0;
		}

		&__icon {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 20px;
			height: 20px;
			border: 1px solid var(--color-grey);
			border-radius: 3px;
		}

		&__check {
			width: 10px;
			height: auto;
			stroke: var(--color-grey);
		}

		&__caption {
			margin-left: var(--gap);
		}

		&:hover &__icon {
			border-color: var(--color-graphite);
		}

		&._checked &__icon {
			border-color: var(--color-graphite);
		}

		&._checked &__check {
			stroke: var(--color-graphite);
		}

		&._disabled {
			pointer-events: none;

			a {
				pointer-events: auto;
			}
		}

		&._disabled &__icon {
			border-color: var(--color-grey);
			background-color: var(--color-light-grey);
		}

		&._disabled &__check {
			stroke: var(--color-grey);
		}
	}
</style>
