<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
	<div id="container">
		<nav class="nav nav-pills justify-content-center">

			<div class="nav-item">
				<RouterLink to="/">
					<button class="nav-link active" id="home-tab" data-bs-toggle="tab" type="button">Home</button>
				</RouterLink>
			</div>

			<div class="nav-item">
				<RouterLink to="/about">
					<button class="nav-link" id="profile-tab" data-bs-toggle="tab" type="button">About</button>
				</RouterLink>
			</div>

		</nav>

		<RouterView />

	</div>
</template>