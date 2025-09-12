<script setup lang="ts">
import { importStory } from '@/services/Data';

function importStoryButton(): void {
  const fileInput = document.getElementById('storyFile') as HTMLInputElement;

  if (!fileInput.files || fileInput.files.length === 0) {
    console.log('No file selected');
    return;
  }

  const file = fileInput.files[0];

  importStory(file.name, file);
}
</script>

<template>
  <div>
    <form @submit.prevent="importStoryButton">
      <h3>Import</h3>
      <input type="file" id="storyFile" name="storyFile" accept=".json" @change="importStoryButton" />
    </form>
  </div>
</template>

<style scoped>
div {
  border-style: solid;
  border-color: purple;
}
</style>