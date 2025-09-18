<script setup lang="ts">
import { ref, watch } from 'vue';
import 'md-editor-v3/lib/style.css';
import { currentPageId, story } from '@/services/Story';
import ConnectionItem from './ConnectionItem.vue';
import NewConnectionItem from './NewConnectionItem.vue';
import ApplicationPane from '@/components/ApplicationPane.vue';

const text = ref('Hello');
const title = ref('Hello');

watch(currentPageId, () => {
  title.value = story.value[currentPageId.value].id;
  text.value = story.value[currentPageId.value].Text;
});
</script>

<template>
  <ApplicationPane title="Connection Manager">
    <ConnectionItem
      :key="connection.Selector"
      v-for="connection in story[currentPageId].Options"
      :pageid="currentPageId"
      :story-path="connection"
    ></ConnectionItem>
    <NewConnectionItem :pageid="currentPageId" />
  </ApplicationPane>
</template>

<style scoped></style>
