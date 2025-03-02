<script setup lang="ts">
import StoryTextDump from './Diagnostic/StoryTextDump.vue';
import AddStoryNode from './StoryEditor/AddStoryNode.vue';
import ConnectStoryNode from './StoryEditor/ConnectStoryNode.vue';
import DeleteStoryNode from './StoryEditor/DeleteStoryNode.vue';
import ExportStory from './StoryEditor/ExportStory.vue';
import ImportStory from './StoryEditor/ImportStory.vue';
import StoryTree from './StoryTree.vue';
import { story } from '@/services/Story';

const catchPage = (pageid: string) => {
  alert(pageid);
};
</script>

<template>
  <div class="main-content">
    <ImportStory></ImportStory>
    <ExportStory></ExportStory>
    <AddStoryNode></AddStoryNode>
    <ConnectStoryNode></ConnectStoryNode>
    <DeleteStoryNode></DeleteStoryNode>
    <StoryTextDump></StoryTextDump>
  </div>
  <div class="sidebar">
    <!-- <StoryTreeView></StoryTreeView> -->
    <StoryTree
      @response="(pageId: string) => catchPage(pageId)"
      v-if="story.Start"
      :page="story.Start"
      :pageids="[]"
    ></StoryTree>
  </div>
</template>

<style scoped>
.main-content {
  margin-left: 260px;
  /* Pushes content right, should match sidebar width + padding */
  padding: 20px;
}

.sidebar {
  margin: 0;
  position: fixed;
  left: 0;
  top: 0;
  width: 250px;
  height: 100vh;
  /* background: #f0f0f0; */
  overflow-y: auto;
  border-right: 2px solid #ccc;
}
</style>
