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
    <RouterView />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./Navbar.vue";
</script>
