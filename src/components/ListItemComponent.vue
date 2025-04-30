<template>
  <a :href="link" target="_blank">
    <li>
      <span class="item" :style="{ color: iconColor ?? '#1E90FF' }">
        <font-awesome-icon :icon="icon" />
      </span>
      <p>
        {{ title }} <span v-if="secondTitle">· {{ secondTitle }}</span>
      </p>
    </li>
  </a>
</template>

<script setup>
defineProps({
  icon: Array,
  iconColor: String | null,
  title: String,
  secondTitle: String | null,
  link: String | null,
});
</script>

<style scoped>
li {
  display: flex;
  gap: 16px;
}

.item {
  font-size: 18px;
}
</style>