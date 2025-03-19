<script setup lang="ts">
import { connectPages } from '@/services/Story';
import { ref } from 'vue';
import PageSelector from './PageSelector.vue';

type Props = {
  pageid: string;
};
const props = defineProps<Props>();

const selector = ref('');
const text = ref('');
const path = ref('');

const AddConnection = () => {
  connectPages(props.pageid, path.value, selector.value, text.value);
};
</script>

<template>
  <input
    type="text"
    v-model="selector"
  />
  <input
    type="text"
    v-model="text"
  />
  <PageSelector />
  <button v-on:click="AddConnection">Add</button>
</template>

<style scoped></style>
