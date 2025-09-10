<script setup lang="ts">
import { ref } from 'vue';
import { addPage } from '@/services/Story';

const title = ref('');

const createPage = () => {
  addPage(title.value, '');
  title.value = '';
};
</script>

<template>
  <div>
    <input
      v-model="title"
      type="text"
    />
    <button @click="createPage()">Add Page</button>
  </div>
</template>

<style scoped></style>
