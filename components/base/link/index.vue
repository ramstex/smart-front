<template>
	<a
		class="base-link"
		:class="rootClass"
		v-if="isExternal"
		:href="href"
		target="_blank"
		v-bind="$attrs"
	>
		<slot />
	</a>
	<nuxt-link
		class="base-link"
		:class="rootClass"
		v-else
		:to="href"
		v-bind="$attrs"
	>
		<slot />
	</nuxt-link>
</template>

<script>
	export default {
		name: 'BaseLink',

		inheritAttrs: false,

		props: {
			href: {
				type: String,
				required: true,
			},
		},

		computed: {
			rootClass() {
				return [
					{ '_external': this.isExternal },
					{ '_internal': !this.isExternal },
				]
			},

			isExternal() {
				const protocols = [
					'http://',
					'https://',
					'ssh://',
					'ftp://',
				];

				return !!protocols.find((protocol) => {
					return this.href.indexOf(protocol) === 0;
				});
			},
		},
	};
</script>

<style lang="scss">
	.base-link {}
</style>
