<template>
  <section class="resume-section" id="experience">
    <div class="resume-section-content">
      <h2 class="mb-5">Experiência</h2>

      <ActivityItemComponent
        title="Desenvolvedora Full Stack Júnior"
        subtitle="Bling - LWSA Company"
        startedIn="Janeiro 2023"
        finishedIn="Presente"
      >
        <p>Atuo como desenvolvedora na equipe de Fintech.</p>
        <p>
          Implemento e aprimoro funcionalidades na conta digital, faço análises
          técnicas, automatizo processos com scripts, mapeio ativamente débitos
          técnicos e resolvo bugs.
        </p>
        <p>
          Tecnologias incluem: PHP e MySQL no back-end; HTML, CSS, JavaScript,
          jQuery e Vue.js no front-end.
        </p>
        <p>
          Também elaboro testes de unidade e integração com PHPUnit, utilizo Git
          para versionamento e Docker para conteinerização.
        </p>
      </ActivityItemComponent>

      <ActivityItemComponent
        title="Estagiária em Desenvolvimento Back-end"
        subtitle="P.A. Construshop LTDA"
        startedIn="Fevereiro 2022"
        finishedIn="Dezembro 2022"
      >
        <p>
          Atuei no desenvolvimento de uma API REST construída com PHP 7, Slim
          Framework 4 e Microsoft SQL Server.
        </p>
        <p>Atividades realizadas:</p>
        <ul>
          <li>Integração de API com serviços de e-commerce;</li>
          <li>Refatoração de processos da antiga para a nova API;</li>
          <li>Testes de unidade e integração utilizando PHPUnit;</li>
          <li>Testes de carga e estresse em linguagem Python com Locust;</li>
          <li>Elaboração de expressões regulares</li>
        </ul>
      </ActivityItemComponent>
    </div>
  </section>
</template>

<script setup>
import ActivityItemComponent from "../components/ActivityItemComponent.vue";
</script>