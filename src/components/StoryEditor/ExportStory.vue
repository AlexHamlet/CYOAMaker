<template>
  <div>
    <h3>Export</h3>
    <button @click="exportStoryButton">Export</button>
  </div>
</template>

<script setup lang="ts">
import { exportStory } from '@/services/Data';

function exportStoryButton(): void {
  exportStory();
}
</script>
