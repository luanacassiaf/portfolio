<template>
  <section class="resume-section" id="skills">
    <div class="resume-section-content">
      <h2 class="mb-5">Habilidades</h2>
      <div class="subheading mb-3">Linguagens e Ferramentas de Programação</div>

      <ul class="list-inline dev-icons">
        <li
          v-for="(tech, index) in techIcons"
          :key="index"
          class="list-inline-item"
        >
          <font-awesome-icon
            :icon="tech.icon"
            :aria-label="tech.label"
            :title="tech.label"
          />
        </li>
      </ul>

      <div class="parent">
        <div class="child-1">
          <div class="subheading mt-3 mb-3">Outras habilidades técnicas</div>
          <ul class="mb-0">
            <ListItemComponent
              v-for="(item, index) in techSkills"
              :key="'tech-' + index"
              :icon="icon"
              :title="item"
            />
          </ul>
        </div>
        <div class="child-2">
          <div class="subheading mt-3 mb-3">Habilidades comportamentais</div>
          <ul class="mb-0">
            <ListItemComponent
              v-for="(item, index) in softSkills"
              :key="'soft-' + index"
              :icon="icon"
              :title="item"
            />
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ListItemComponent from "../components/ListItemComponent.vue";

const icon = ["fas", "circle-check"];

const techIcons = [
  { icon: ["fab", "php"], label: "PHP" },
  { icon: ["fab", "square-js"], label: "JavaScript" },
  { icon: ["fab", "vuejs"], label: "Vue.js" },
  { icon: ["fab", "html5"], label: "HTML" },
  { icon: ["fab", "css3-alt"], label: "CSS" },
  { icon: ["fab", "bootstrap"], label: "Bootstrap" },
  { icon: ["fab", "golang"], label: "Golang" },
  { icon: ["fab", "node-js"], label: "Node.js" },
  { icon: ["fab", "python"], label: "Python" },
  { icon: ["fab", "linux"], label: "Linux" },
];

const techSkills = ["MySQL", "MongoDB", "Testes de software", "Scrum"];

const softSkills = ["Proatividade", "Comprometimento", "Pensamento crítico"];
</script>

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

@media (max-width: 612px) {
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
