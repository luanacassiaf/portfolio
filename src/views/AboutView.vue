<template>
	<h1 id="about-title">About</h1>
</template>

<style scoped>
#about-title {
	color: blue;
}
</style>

<script>
export default {
	created() {
		document.body.style.background = this.$route.meta.backgroundColor;
	}
}
</script>