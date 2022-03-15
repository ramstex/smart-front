<template>
	<MarkupLayout class="layout-kit">
		<template>
			<MarkupSection>
				<template v-slot:title>UI-KIT</template>

				<GridRow class="layout-kit__nav">
					<GridCol
						v-for="item in nav"
						:key="item.title"
					>
						<p>
							<template v-if="item.current">{{ item.title }}</template>
							<BaseLink v-else :href="item.href">{{ item.title }}</BaseLink>
						</p>
					</GridCol>
				</GridRow>
			</MarkupSection>

			<nuxt />
		</template>
	</MarkupLayout>
</template>

<script>
import BaseLink from '/components/base/link/index.vue';
import MarkupLayout from '/components/markup/layout/index.vue';
import MarkupSection from '/components/markup/section/index.vue';
import GridRow from '/components/grid/row/index.vue';
import GridCol from '/components/grid/col/index.vue';

export default {
	name: 'LayoutKit',

	components: {
		BaseLink,
		MarkupLayout,
		MarkupSection,
		GridRow,
		GridCol,
	},

	data() {
		return {
			navItems: [
				{
					title: 'Button',
					href: '/kit/button',
				},

				{
					title: 'Color',
					href: '/kit/color',
				},

				{
					title: 'Typography',
					href: '/kit/typography',
				},
			],
		};
	},

	computed: {
		nav() {
			return this.navItems.map((item) => {
				return {
					...item,
					current: item.href === this.$route.path,
				}
			});
		},
	},
}
</script>

<style lang="scss">
	.layout-kit {
		&__nav {
			margin-bottom: calc(var(--gap) * 2);
		}
	}
</style>
