<script setup lang="ts">
import { orphanPages } from '@/services/Story';

const emit = defineEmits(['response']);
</script>

<template>
  <div class="container">
    <div
      v-bind:key="page"
      v-for="page in orphanPages"
    >
      <h3 v-on:click="emit('response', page)">{{ page }}</h3>
    </div>
  </div>
</template>

<style scoped>
h3 {
  display: inline;
}
h3:hover {
  color: blue;
}

.container {
  display: block;
}
</style>
