<template>
  <div class="item d-flex flex-column flex-md-row justify-content-between mb-5">
    <div class="flex-grow-1">
      <h3 class="mb-0">{{ title }}</h3>
      <div class="subheading mb-3">{{ subtitle }}</div>
      <div style="text-align: justify">
        <slot></slot>
      </div>
    </div>

    <div class="flex-shrink-0">
      <span class="text-primary">{{ startedIn }} - {{ finishedIn }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  subtitle: String,
  startedIn: String,
  finishedIn: String,
});
</script>