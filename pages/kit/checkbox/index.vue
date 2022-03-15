<template>
	<div class="page-kit-checkbox">
		<MarkupSection>
			<template v-slot:title>Ui-Kit - Checkbox</template>

			<GridRow align="center">
				<GridCol col="6">
					<UiCheckbox v-model="checked">
						Текст <BaseLink href="https://google.com">со ссылкой</BaseLink>
					</UiCheckbox>
				</GridCol>

				<GridCol col="3">
					<UiButton @click="checked = !checked">Check</UiButton>
				</GridCol>

				<GridCol col="3">
					<h3 v-if="checked">Checked</h3>
					<h3 v-else>Not Checked</h3>
				</GridCol>
			</GridRow>

			<GridRow align="center">
				<GridCol col="6">
					<UiCheckbox v-model="checked2">
						Текст <BaseLink href="https://google.com">со ссылкой</BaseLink>
					</UiCheckbox>
				</GridCol>

				<GridCol col="3">
					<UiButton @click="checked2 = !checked2">Check</UiButton>
				</GridCol>

				<GridCol col="3">
					<h3 v-if="checked2">Checked</h3>
					<h3 v-else>Not Checked</h3>
				</GridCol>
			</GridRow>

			<GridRow align="center">
				<GridCol col="6">
					<UiCheckbox disabled v-model="checked3">
						Текст <BaseLink href="https://google.com">со ссылкой</BaseLink>
					</UiCheckbox>
				</GridCol>

				<GridCol col="3">
					<UiButton @click="checked3 = !checked3">Check</UiButton>
				</GridCol>

				<GridCol col="3">
					<h3 v-if="checked3">Checked</h3>
					<h3 v-else>Not Checked</h3>
				</GridCol>
			</GridRow>
		</MarkupSection>
	</div>
</template>

<script>
	import BaseLink from '/components/base/link/index.vue';
	import MarkupSection from '/components/markup/section/index.vue';
	import GridRow from '/components/grid/row/index.vue';
	import GridCol from '/components/grid/col/index.vue';
	import UiButton from '/components/ui/button/index.vue';
	import UiCheckbox from '/components/ui/chkeckbox/index.vue';

	export default {
		name: 'PageKitCheckbox',

		layout: 'kit',

		components: {
			BaseLink,
			GridRow,
			GridCol,
			MarkupSection,
			UiButton,
			UiCheckbox,
		},

		data() {
			return {
				checked: true,
				checked2: false,
				checked3: true,
				checked4: false,
			}
		},
	}
</script>

<style lang="scss">
	.page-kit-checkbox {

	}
</style>
