<template>
  <section class="resume-section" id="skills">
    <div class="resume-section-content">
      <h2 class="mb-5">Habilidades</h2>
      <div class="subheading mb-3">Linguagens e Ferramentas de Programação</div>

      <ul class="list-inline dev-icons">
        <li class="list-inline-item">
          <font-awesome-icon
            :icon="['fab', 'php']"
            aria-label="PHP"
            title="PHP"
          />
        </li>
        <li class="list-inline-item">
          <font-awesome-icon
            :icon="['fab', 'square-js']"
            aria-label="PHP"
            title="JavaScript"
          />
        </li>
        <li class="list-inline-item">
          <font-awesome-icon
            :icon="['fab', 'vuejs']"
            aria-label="Vue.js"
            title="Vue.js"
          />
        </li>
        <li class="list-inline-item">
          <font-awesome-icon
            :icon="['fab', 'html5']"
            aria-label="HTML"
            title="HTML"
          />
        </li>
        <li class="list-inline-item">
          <font-awesome-icon
            :icon="['fab', 'css3-alt']"
            aria-label="CSS"
            title="CSS"
          />
        </li>
        <li class="w-100 break-line"></li>
        <li class="list-inline-item">
          <font-awesome-icon
            :icon="['fab', 'bootstrap']"
            aria-label="Bootstrap"
            title="Bootstrap"
          />
        </li>
        <li class="list-inline-item">
          <font-awesome-icon
            :icon="['fab', 'golang']"
            aria-label="Golang"
            title="Golang"
          />
        </li>
        <li class="list-inline-item">
          <font-awesome-icon
            :icon="['fab', 'node-js']"
            aria-label="Node.js"
            title="Node.js"
          />
        </li>
        <li class="list-inline-item">
          <font-awesome-icon
            :icon="['fab', 'python']"
            aria-label="Python"
            title="Python"
          />
        </li>
        <li class="list-inline-item">
          <font-awesome-icon
            :icon="['fab', 'linux']"
            aria-label="Linux"
            title="Linux"
          />
        </li>
      </ul>

      <div class="parent">
        <div class="child-1">
          <div class="subheading mt-3 mb-3">Outras habilidades técnicas</div>
          <ul class="mb-0">
            <ListItemComponent :icon="icon" title="MySQL" />
            <ListItemComponent :icon="icon" title="MongoDB" />
            <ListItemComponent :icon="icon" title="Testes de software" />
            <ListItemComponent :icon="icon" title="Scrum" />
          </ul>
        </div>
        <div class="child-2">
          <div class="subheading mt-3 mb-3">Habilidades comportamentais</div>
          <ul class="mb-0">
            <ListItemComponent :icon="icon" title="Proatividade" />
            <ListItemComponent :icon="icon" title="Comprometimento" />
            <ListItemComponent :icon="icon" title="Pensamento crítico" />
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
ul {
  padding-left: 0 !important;
}

.parent {
  gap: 12%;
}

@media (max-width: 992px) {
  .parent {
    gap: 10%;
  }
}

.break-line {
  display: inline !important;
}
@media (max-width: 612px) {
  .break-line {
    display: block !important;
  }

  .list-inline-item:not(:last-child) {
    margin-right: 1rem;
  }
}

.parent,
.child-1,
.child-2 {
  display: flex;
}

.child-1,
.child-2 {
  flex-direction: column;
}
</style>

<script setup>
import ListItemComponent from "../components/ListItemComponent.vue";

const icon = ["fas", "circle-check"];
</script>