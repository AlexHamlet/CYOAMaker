<script setup lang="ts">
import ApplicationPane from '@/components/ApplicationPane.vue';
import StoryTreeNode from './StoryTreeNode.vue';
import AddPage from '../AddPage.vue';
import { getPage } from '@/services/Story';
</script>

<template>
  <ApplicationPane title="StoryTree">
    <template v-slot:action1>
      <AddPage />
    </template>
    <StoryTreeNode
      :page="getPage('Start')"
      :pageids="[]"
    ></StoryTreeNode>
  </ApplicationPane>
</template>

<style scoped></style>
