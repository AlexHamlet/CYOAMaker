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
  background-color: purple;
  border-left: 4px solid green;
}

button {
  display: none;
}
</style>
