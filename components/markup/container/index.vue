<template>
	<div class="markup-container">
		<slot />
	</div>
</template>

<script>
	export default {
		name: 'MarkupContainer',

		props: {
			wide: {
				type: Boolean,
			},

			tight: {
				type: Boolean,
			},
		},

		computed: {
			rootClass() {
				return [
					{ '_wide': this.wide },
					{ '_tight': this.tight },
				]
			},
		},
	}
</script>

<style lang="scss">
	.markup-container {
		width: 100%;
		max-width: 640px;
		padding-left: var(--gap);
		padding-right: var(--gap);
		margin-left: auto;
		margin-right: auto;

		&._wide {
			max-width: none;
		}

		&._tight {
			padding-left: 0;
			padding-right: 0;
		}
	}
</style>
