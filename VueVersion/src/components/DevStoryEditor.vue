<template>
  <ImportStory></ImportStory>
  <ExportStory></ExportStory>
  <AddStoryNode></AddStoryNode>
  <ConnectStoryNode></ConnectStoryNode>
  <DeleteStoryNode></DeleteStoryNode>
  <StoryTextDump></StoryTextDump>
</template>

<script setup lang="ts">
import AddStoryNode from './StoryEditor/AddStoryNode.vue';
import ConnectStoryNode from './StoryEditor/ConnectStoryNode.vue';
import DeleteStoryNode from './StoryEditor/DeleteStoryNode.vue';
import ExportStory from './StoryEditor/ExportStory.vue';
import ImportStory from './StoryEditor/ImportStory.vue';
import StoryTextDump from './StoryDebug/StoryTextDump.vue';
</script>