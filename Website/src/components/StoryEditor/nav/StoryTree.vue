<script setup lang="ts">
import { story } from '@/services/Story';
import ApplicationPane from '@/components/ApplicationPane.vue';
import StoryTreeNode from './StoryTreeNode.vue';
</script>

<template>
  <ApplicationPane title="StoryTree">
    <StoryTreeNode
      v-if="story.Start"
      :page="story.Start"
      :pageids="[]"
    ></StoryTreeNode>
  </ApplicationPane>
</template>

<style scoped></style>
