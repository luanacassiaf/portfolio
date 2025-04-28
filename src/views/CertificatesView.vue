<template>
  <hr class="m-0" />
  <section class="resume-section" id="certifications">
    <div class="resume-section-content">
      <h2 class="mb-5">Certificados</h2>

      <ul class="fa-ul mb-0">
        <ListItemComponent
          :icon="icon"
          title="Go (Golang): Explorando a Linguagem do Google"
          secondTitle="Udemy"
          link="https://www.udemy.com/certificate/UC-5509bacf-d2f2-4f99-a3e8-5a2a2a42225f/"
        />

        <ListItemComponent
          :icon="icon"
          title="Entendendo TypeScript"
          secondTitle="Udemy"
          link="https://www.udemy.com/certificate/UC-479f38be-f60f-454c-b12d-e990f2cbe237/"
        />

        <ListItemComponent
          :icon="icon"
          title="Clean Code com Javascript - Escreva Código como um Mestre"
          secondTitle="Udemy"
          link="https://www.udemy.com/certificate/UC-487aa755-89e6-4a3b-8036-3cf8d51addea/"
        />

        <ListItemComponent
          :icon="icon"
          title="Vue JS - Guia Completo (Vue CLI, Vue Router, Vuex e GraphQL)"
          secondTitle="Udemy"
          link="https://www.udemy.com/certificate/UC-06434894-5b7d-46ee-887c-2b15ba4b32e4/"
        />

        <ListItemComponent
          :icon="icon"
          title="Formação Node.js"
          secondTitle="Udemy"
          link="https://www.udemy.com/certificate/UC-daee8e0a-3774-4350-b355-566d4b9e0454/"
        />

        <ListItemComponent
          :icon="icon"
          title="JS Ninja"
          secondTitle="Dev Samurai"
          link="https://drive.google.com/file/d/1gPLjIn_36mPCXKakbAG0PA-ojPb1cCIk/view?usp=sharing"
        />
      </ul>
    </div>
  </section>
</template>

<script setup>
import ListItemComponent from "../components/ListItemComponent.vue";

const icon = ["fas", "trophy"];
</script>