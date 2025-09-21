<script setup lang="ts">
import { exportStory } from '@/services/Data';

function exportStoryButton(): void {
  exportStory();
}
</script>

<template>
  <label>
    <span>Export</span>
    <button @click="exportStoryButton">Export</button>
  </label>
</template>

<style scoped>
label {
  display: inline-block;
  padding: 0 0.5em;
  background-color: var(--secondary-color);
  border-left: 4px solid var(--highlight-color);
}

button {
  display: none;
}
</style>
