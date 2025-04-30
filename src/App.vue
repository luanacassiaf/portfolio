<template>
  <div id="container">
    <link
      href="https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700"
      rel="stylesheet"
      type="text/css"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i"
      rel="stylesheet"
      type="text/css"
    />

    <Navbar />
    <Transition name="fade" mode="out-in">
      <RouterView />
    </Transition>
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import Navbar from "./Navbar.vue";
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>