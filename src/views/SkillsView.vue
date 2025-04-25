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

      <div class="subheading mt-3 mb-3">Outras habilidades técnicas:</div>
      <ul class="fa-ul mb-0">
        <ListItemComponent icon="check" iconColor="limegreen" title="MySQL" />
        <ListItemComponent icon="check" iconColor="limegreen" title="MongoDB" />
        <ListItemComponent
          icon="check"
          iconColor="limegreen"
          title="Testes de software"
        />
        <ListItemComponent icon="check" iconColor="limegreen" title="Scrum" />
      </ul>

      <div class="subheading mt-3 mb-3">Habilidades comportamentais:</div>
      <ul class="fa-ul mb-0">
        <ListItemComponent
          icon="check"
          iconColor="limegreen"
          title="Proatividade"
        />
        <ListItemComponent
          icon="check"
          iconColor="limegreen"
          title="Comprometimento"
        />
        <ListItemComponent
          icon="check"
          iconColor="limegreen"
          title="Pensamento crítico"
        />
      </ul>
    </div>
  </section>
</template>

<script setup>
import ListItemComponent from "../components/ListItemComponent.vue";
</script>