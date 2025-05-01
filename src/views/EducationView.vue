<template>
  <section class="resume-section" id="education">
    <div class="resume-section-content">
      <h2 class="mb-5">Educação</h2>

      <ActivityItemComponent
        title="Bacharelado em Ciência da Computação"
        subtitle="Universidade Federal de Itajubá"
        startedIn="Março 2019"
        finishedIn="Dezembro 2022"
      >
        <p>
          TCC: "Desenvolvimento de Testes Automatizados para API: Estudo de Caso
          em um Sistema de E-commerce".
        </p>
      </ActivityItemComponent>

      <ActivityItemComponent
        title="Técnico em Informática"
        subtitle="Instituto Federal de Educação, Ciência e Tecnologia do Sul de Minas
            Gerais"
        startedIn="Fevereiro 2015"
        finishedIn="Dezembro 2017"
      >
        <p>
          TCC: Site para o Núcleo de História Natural do IFSULDEMINAS - Campus
          Inconfidentes.
        </p>
      </ActivityItemComponent>
    </div>
  </section>
</template>

<script setup>
import ActivityItemComponent from "../components/ActivityItemComponent.vue";
</script>