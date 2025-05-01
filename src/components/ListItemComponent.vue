<template>
  <li>
    <p class="icon">
      <FontAwesomeIcon :icon="icon" />
    </p>
    <div class="content">
      <a :href="link" target="_blank">
        <p :class="[subtitle ? 'mb-0' : '']">{{ title }}</p>
      </a>
      <p class="subtitle" v-if="subtitle">{{ subtitle }} · {{ duration }}</p>
    </div>
  </li>
</template>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

defineProps({
  icon: Array,
  title: String,
  subtitle: String | null,
  duration: String | null,
  link: String | null,
});
</script>

<style scoped>
li {
  display: flex;
  align-items: center;
  gap: 16px;
}

.icon {
  color: #1e90ff;
}

.icon,
p.title {
  font-size: 18px;
}

p.subtitle {
  font-size: 14px;
}
</style>