<script setup lang="ts">
import { connectPages } from '@/services/Story';
import { ref } from 'vue';
import PageSelector from '../PageSelector.vue';

type Props = {
  pageid: string;
};
const props = defineProps<Props>();

const selector = ref('');
const text = ref('');
const path = ref('');

const AddConnection = () => {
  connectPages(props.pageid, path.value, selector.value, text.value);
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
      :option-path="'Start'"
      @value="(val) => (path = val)"
    />
    <button v-on:click="AddConnection">Add</button>
  </div>
</template>

<style scoped></style>
