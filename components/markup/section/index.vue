<template>
	<section class="markup-section">
		<div class="markup-section__header">
			<MarkupContainer
				:wide="headerWide"
				:tight="headerTight"
			>
				<component class="markup-section__title" :is="titleTag">
					<slot name="title" />
				</component>
			</MarkupContainer>
		</div>

		<div class="markup-section__body">
			<MarkupContainer
				:wide="bodyWide"
				:tight="bodyTight"
			>
				<slot />
			</MarkupContainer>
		</div>
	</section>
</template>

<script>
	import MarkupContainer from '/components/markup/container/index.vue';

	const titleTagsAvailable = [
		'h1',
		'h2',
		'h3',
		'p',
	];

	export default {
		name: 'MarkupSection',

		components: {
			MarkupContainer,
		},

		props: {
			bodyWide: {
				type: Boolean,
			},

			bodyTight: {
				type: Boolean,
			},

			headerWide: {
				type: Boolean,
			},

			headerTight: {
				type: Boolean,
			},

			titleTag: {
				type: String,
				default: titleTagsAvailable[0],

				validator(value) {
					return titleTagsAvailable.indexOf(value) >= 0;
				},
			},
		},
	}
</script>

<style lang="scss">
	.markup-section {
		&__header {
			margin-bottom: var(--gap);
		}
	}
</style>
