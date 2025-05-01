<template>
  <section class="resume-section" id="certifications">
    <div class="resume-section-content">
      <h2 class="mb-5">Certificados</h2>
      <ul class="mb-0">
        <ListItemComponent
          v-for="(item, index) in certificates"
          :key="index"
          :icon="icon"
          :title="item.title"
          :subtitle="item.subtitle"
          :duration="item.duration"
          :link="item.link"
        />
      </ul>
    </div>
  </section>
</template>

<script setup>
import ListItemComponent from "../components/ListItemComponent.vue";

const icon = ["fas", "medal"];

const certificates = [
  {
    title: "Go (Golang): Explorando a Linguagem do Google",
    subtitle: "Udemy",
    duration: "11,5 horas",
    link: "https://www.udemy.com/certificate/UC-5509bacf-d2f2-4f99-a3e8-5a2a2a42225f/",
  },
  {
    title: "Entendendo TypeScript",
    subtitle: "Udemy",
    duration: "11,5 horas",
    link: "https://www.udemy.com/certificate/UC-479f38be-f60f-454c-b12d-e990f2cbe237/",
  },
  {
    title: "Clean Code com Javascript - Escreva Código como um Mestre",
    subtitle: "Udemy",
    duration: "3,5 horas",
    link: "https://www.udemy.com/certificate/UC-487aa755-89e6-4a3b-8036-3cf8d51addea/",
  },
  {
    title: "Vue JS - Guia Completo (Vue CLI, Vue Router, Vuex e GraphQL)",
    subtitle: "Udemy",
    duration: "51 horas",
    link: "https://www.udemy.com/certificate/UC-06434894-5b7d-46ee-887c-2b15ba4b32e4/",
  },
  {
    title: "Formação Node.js",
    subtitle: "Udemy",
    duration: "50 horas",
    link: "https://www.udemy.com/certificate/UC-daee8e0a-3774-4350-b355-566d4b9e0454/",
  },
  {
    title: "JS Ninja",
    subtitle: "Dev Samurai",
    duration: "18 horas",
    link: "https://drive.google.com/file/d/1gPLjIn_36mPCXKakbAG0PA-ojPb1cCIk/view?usp=sharing",
  },
];
</script>

<style scoped>
ul {
  padding-left: 0 !important;
  text-align: justify;
}

.page-wrapper {
  min-height: 100vh;
  position: relative;
  padding: 2rem;
}
</style>
