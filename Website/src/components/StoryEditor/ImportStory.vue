<script setup lang="ts">
import { importStory } from '@/services/Data';

function importStoryButton(): void {
  const fileInput = document.getElementById('storyFile') as HTMLInputElement;

  if (!fileInput.files || fileInput.files.length === 0) {
    console.log('No file selected');
    return;
  }

  const file = fileInput.files[0];
  const filename = file.name.replace('.json', '');

  importStory(filename, file);
}
</script>

<template>
  <form @submit.prevent="importStoryButton">
    <label>
      <span>Import</span>
      <input
        type="file"
        id="storyFile"
        name="storyFile"
        accept=".json"
        @change="importStoryButton"
      />
    </label>
  </form>
</template>

<style scoped>
label {
  display: inline-block;
  padding: 0 0.5em;
  background-color: var(--secondary-color);
  border-left: 4px solid var(--highlight-color);
}

input {
  display: none;
}
</style>
