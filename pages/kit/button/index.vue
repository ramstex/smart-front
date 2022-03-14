<template>
	<div class="page-kit-button">
		<MarkupSection>
			<template v-slot:title>Ui-Kit - Button</template>

			<template>
				<div class="page-kit-button__group">
					<h2 class="page-kit-button__subtitle">Скругленные кнопки</h2>

					<GridRow>
						<GridCol>
							<UiButton rounded>Кнопка</UiButton>
						</GridCol>

						<GridCol>
							<UiButton disabled rounded>Нерабочая кнопка</UiButton>
						</GridCol>

						<GridCol>
							<UiButton rounded @click="onClick">Кнопка со скриптом</UiButton>
						</GridCol>

						<GridCol>
							<UiButton rounded href="https://google.com">Кнопка с внешней ссылкой</UiButton>
						</GridCol>

						<GridCol>
							<UiButton rounded href="/kit/color">Кнопка с внутренней ссылкой</UiButton>
						</GridCol>

						<GridCol :col="1">
							<UiButton rounded full>Широкая кнопка</UiButton>
						</GridCol>

						<GridCol :col="1">
							<UiButton rounded full disabled>Широкая неактивная кнопка</UiButton>
						</GridCol>
					</GridRow>
				</div>


				<div class="page-kit-button__group">
					<h2 class="page-kit-button__subtitle">Кнопки с углами</h2>

					<GridRow>
						<GridCol>
							<UiButton>Кнопка</UiButton>
						</GridCol>

						<GridCol>
							<UiButton disabled>Нерабочая кнопка</UiButton>
						</GridCol>

						<GridCol>
							<UiButton @click="onClick">Кнопка со скриптом</UiButton>
						</GridCol>

						<GridCol>
							<UiButton href="https://google.com">Кнопка с внешней ссылкой</UiButton>
						</GridCol>

						<GridCol>
							<UiButton href="/kit/color">Кнопка с внутренней ссылкой</UiButton>
						</GridCol>

						<GridCol :col="1">
							<UiButton full>Широкая кнопка</UiButton>
						</GridCol>

						<GridCol :col="1">
							<UiButton full disabled>Широкая неактивная кнопка</UiButton>
						</GridCol>
					</GridRow>
				</div>
			</template>
		</MarkupSection>
	</div>
</template>

<script>
	import MarkupSection from '/components/markup/section/index.vue';
	import UiButton from '/components/ui/button/index.vue';
	import GridRow from '/components/grid/row/index.vue';
	import GridCol from '/components/grid/col/index.vue';

	export default {
		name: 'pageKitButton',

		components: {
			MarkupSection,
			UiButton,
			GridRow,
			GridCol,
		},

		methods: {
			onClick(event) {
				alert('CLICK! Watch console for details.');
				console.log(event)
			},
		},
	};
</script>

<style lang="scss">
	.page-kit-button {
		&__group {
			margin-bottom: calc(var(--gap) * 3);
		}

		&__subtitle {
			margin-bottom: var(--gap);
		}

		.ui-button {
			margin-bottom: var(--gap);
		}
	}
</style>
