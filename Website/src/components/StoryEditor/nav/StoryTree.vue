<script setup lang="ts">
import { story } from '@/services/Story';
import ApplicationPane from '@/components/ApplicationPane.vue';
import StoryTreeNode from './StoryTreeNode.vue';
import AddPage from '../AddPage.vue';
</script>

<template>
  <ApplicationPane title="StoryTree">
    <template v-slot:action1>
      <AddPage />
    </template>
    <StoryTreeNode
      v-if="story.Start"
      :page="story.Start"
      :pageids="[]"
    ></StoryTreeNode>
  </ApplicationPane>
</template>

<style scoped></style>
