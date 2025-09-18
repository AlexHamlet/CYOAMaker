<script setup lang="ts">
import { ref, watch } from 'vue';
import 'md-editor-v3/lib/style.css';
import { currentPageId, getPage } from '@/services/Story';
import ConnectionItem from './ConnectionItem.vue';
import NewConnectionItem from './NewConnectionItem.vue';
import ApplicationPane from '@/components/ApplicationPane.vue';

const text = ref('Hello');
const title = ref('Hello');

watch(currentPageId, () => {
  const currentPage = getPage(currentPageId.value);
  title.value = currentPage.id;
  text.value = currentPage.Text;
});
</script>

<template>
  <ApplicationPane title="Connection Manager">
    <ConnectionItem
      :key="connection.Selector"
      v-for="connection in getPage(currentPageId).Options"
      :pageid="currentPageId"
      :story-path="connection"
    ></ConnectionItem>
    <NewConnectionItem />
  </ApplicationPane>
</template>

<style scoped></style>
