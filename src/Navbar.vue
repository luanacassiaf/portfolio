<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
    id="sideNav"
  >
    <a class="navbar-brand js-scroll-trigger">
      <span class="d-block d-lg-none">
        <RouterLink to="/" class="navbar-title" @click="closeMenu">
          Luana Freitas
        </RouterLink>
      </span>
      <span class="d-none d-lg-block">
        <img
          class="img-fluid img-profile rounded-circle mx-auto mb-2"
          src="./assets/img/Foto.jpg"
          alt="Foto"
        />
      </span>
    </a>

    <button
      class="navbar-toggler"
      type="button"
      @click="toggleMenu"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav">
        <li class="nav-item">
          <RouterLink
            to="/"
            class="nav-link js-scroll-trigger"
            active-class="active"
            @click="closeMenu"
            >Sobre
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink
            to="/experience"
            class="nav-link js-scroll-trigger"
            active-class="active"
            @click="closeMenu"
            >Experiência
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink
            to="/education"
            class="nav-link js-scroll-trigger"
            active-class="active"
            @click="closeMenu"
            >Educação
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink
            to="/skills"
            class="nav-link js-scroll-trigger"
            active-class="active"
            @click="closeMenu"
            >Habilidades
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink
            to="/certificates"
            class="nav-link js-scroll-trigger"
            active-class="active"
            @click="closeMenu"
            >Certificados
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { onMounted } from "vue";
import { RouterLink } from "vue-router";
import Collapse from "bootstrap/js/dist/collapse";

let collapseInstance;

onMounted(() => {
  const navbar = document.getElementById("navbarResponsive");
  if (navbar) {
    collapseInstance = new Collapse(navbar, {
      toggle: false,
    });
  }
});

const toggleMenu = () => {
  if (collapseInstance) {
    collapseInstance.toggle();
  }
};

const closeMenu = () => {
  if (collapseInstance) {
    collapseInstance.hide();
  }
};
</script>