<script setup lang="ts">
import { connectPages, currentPageId } from '@/services/Story';
import { ref } from 'vue';
import PageSelector from '../PageSelector.vue';

const selector = ref('');
const text = ref('');
const path = ref('');

const AddConnection = () => {
  if (currentPageId.value == '') {
    alert('Click on a page to begin editing.');
    return;
  }
  connectPages(currentPageId.value, path.value, selector.value, text.value);
  selector.value = '';
  text.value = '';
  path.value = '';
};
</script>

<template>
  <div>
    <input
      type="text"
      placeholder="Action"
      v-model="selector"
    />
    <input
      type="text"
      placeholder="Description"
      v-model="text"
    />
    <PageSelector
      option-path="Start"
      @value="path = $event"
    />
    <button v-on:click="AddConnection">Add</button>
  </div>
</template>

<style scoped></style>
