<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
	<div id="container">
		<nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
			
			<a class="navbar-brand js-scroll-trigger">
				<span class="d-block d-lg-none">Luana Freitas</span>
				<span class="d-none d-lg-block"><img class="img-fluid img-profile rounded-circle mx-auto mb-2"
						src="./assets/cat.png" alt="..." /></span>
			</a>

			<link href="https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700" rel="stylesheet"
				type="text/css" />
			<link href="https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i" rel="stylesheet" type="text/css" />
			
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive"
				aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span
					class="navbar-toggler-icon"></span></button>

			<div class="collapse navbar-collapse" id="navbarResponsive">
				<ul class="navbar-nav">
					<li class="nav-item">
						<RouterLink to="/" class="nav-link js-scroll-trigger">
							Sobre
						</RouterLink>
					</li>
					<li class="nav-item">
						<RouterLink to="/experience" class="nav-link js-scroll-trigger">
							Experiência
						</RouterLink>
					</li>
					<li class="nav-item">
						<RouterLink to="/education" class="nav-link js-scroll-trigger">
							Educação
						</RouterLink>
					</li>
					<li class="nav-item">
						<RouterLink to="/skills" class="nav-link js-scroll-trigger">
							Habilidades
						</RouterLink>
					</li>
					<li class="nav-item">
						<RouterLink to="/certificates" class="nav-link js-scroll-trigger">
							Certificados
						</RouterLink>
					</li>
				</ul>
			</div>
		</nav>

		<RouterView />

	</div>
</template>

<script>
</script>
