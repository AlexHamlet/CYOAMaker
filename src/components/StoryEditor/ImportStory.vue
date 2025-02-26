<template>
  <div>
    <form @submit.prevent="importStoryButton">
      <h3>Import</h3>
      <input
        type="file"
        id="storyFile"
        name="storyFile"
        accept=".json"
      />
      <input
        type="submit"
        @click="importStoryButton"
        value="Import Story"
      />
    </form>
  </div>
</template>

<script setup lang="ts">
import { importStory } from '@/services/Data';

function importStoryButton(): void {
  const fileInput = document.getElementById('storyFile') as HTMLInputElement;

  // Ensure a file was selected
  if (!fileInput.files || fileInput.files.length === 0) {
    console.log('No file selected');
    return;
  }

  // Get the first file from the input
  const file = fileInput.files[0];

  importStory(file.name, file);
}
</script>
