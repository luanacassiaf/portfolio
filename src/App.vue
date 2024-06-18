<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
	<nav class="nav nav-pills justify-content-center">

		<RouterLink to="/">
			<button class="nav-link active" id="home-tab" data-bs-toggle="tab" type="button">Home</button>
		</RouterLink>

		<RouterLink to="/about">
			<button class="nav-link" id="profile-tab" data-bs-toggle="tab" type="button">About</button>
		</RouterLink>

	</nav>

	<RouterView />
</template>

<style>
.nav-pills .nav-link.active {
	color: #fff;
	background-color: orange !important;
}

a,
.nav-link:not(.active) {
	color: black;
	text-decoration: none !important;
}

a:hover,
.nav-link:not(.active):hover {
	color: black;
}
</style>