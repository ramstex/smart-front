color<template>
	<div class="page-kit-color-item" :class="rootClass">
		<div class="page-kit-color-item__color" :style="colorStyle"></div>

		<div class="page-kit-color-item__description">
			<p v-if="name" class="page-kit-color-item__name" v-html="name"></p>
			<p v-if="code" class="page-kit-color-item__code" v-html="code"></p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'PageKitColorItem',

		props: {
			name: {
				type: String,
			},

			code: {
				type: String,
				required: true,
			},

			border: {
				type: Boolean,
			},
		},

		computed: {
			rootClass() {
				return [
					{ '_border': this.border },
				]
			},

			colorStyle() {
				return {
					'background-color': this.code,
				}
			},
		},
	}
</script>

<style lang="scss">
	.page-kit-color-item {
		&__color {
			padding-top: 100%;
			margin-bottom: calc(var(--gap) / 4);
		}

		&__name + &__code {
			margin-top: calc(var(--gap) / 8);
		}

		&._border &__color {
			box-shadow: 0 0 1px black;
		}
	}
</style>
