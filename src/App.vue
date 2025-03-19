<script setup lang="ts">
// import DevStoryEditor from './components/DevStoryEditor.vue';
import StoryTextDump from './components/Diagnostic/StoryTextDump.vue';
import StoryEditor from './components/StoryEditor.vue';
import ExportStory from './components/StoryEditor/ExportStory.vue';
import ImportStory from './components/StoryEditor/ImportStory.vue';
</script>

<template>
  <ImportStory />
  <ExportStory />
  <StoryEditor />
  <!-- <DevStoryEditor></DevStoryEditor> -->
  <StoryTextDump />
</template>

<style scoped></style>
