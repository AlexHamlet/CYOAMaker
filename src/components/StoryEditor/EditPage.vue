<template>
  <MdEditor
    language="en-us"
    v-model="text"
    class="PageContentEditor"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { MdEditor } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';

const text = ref('# Hello Editor');
</script>

<style scoped></style>
