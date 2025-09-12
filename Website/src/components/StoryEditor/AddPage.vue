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
    <input class="pageName" v-model="title" type="text" placeholder="New Page Name" />
    <button class="add" @click="createPage()">Add Page</button>
  </div>
</template>

<style scoped>
div {
  border-style: solid;
  border-color: blue;
}

.pageName {
  width: 74%;
  margin: 0;
}

.add {
  width: 25%;
  margin: 0;
}
</style>
