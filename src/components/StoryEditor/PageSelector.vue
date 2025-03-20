<script setup lang="ts">
import { allPages } from '@/services/Story';
import { ref } from 'vue';

// type Props = {
//   pageId: string;
// };
// const props = defineProps<Props>();

const value = ref('');
const selectedValue = defineEmits(['value']);
</script>

<template>
  <select
    v-model="value"
    @change="selectedValue('value', value)"
  >
    <option
      v-for="pageId in allPages"
      :key="pageId"
    >
      {{ pageId }}
    </option>
  </select>
</template>

<style scoped></style>
