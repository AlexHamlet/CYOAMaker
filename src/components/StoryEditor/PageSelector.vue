<script setup lang="ts">
import { allPages } from '@/services/Story';

// type Props = {
//   pageId: string;
// };
// const props = defineProps<Props>();
</script>

<template>
  <select id="fromNodeId">
    <option
      v-for="pageId in allPages"
      :key="pageId"
    >
      {{ pageId }}
    </option>
  </select>
</template>

<style scoped></style>
