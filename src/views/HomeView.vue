<template>
	<!-- criar component para conteúdos com slot -->
	<h1 id="home-title">Home</h1>
</template>

<style scoped>
#home-title {
	color: red;
}
</style>

<script>
export default {
	created() {
		// usar vuex posteriormente
		document.body.style.background = this.$route.meta.backgroundColor;
	}
}
</script>