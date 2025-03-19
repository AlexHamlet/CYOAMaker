<script setup lang="ts">
import { ref } from 'vue';
import { story } from '@/services/Story';
import StoryTree from './StoryTree.vue';
import EditPage from './StoryEditor/EditPage.vue';

const currentPageId = ref('Start');

function catchPage(pageid: string) {
  currentPageId.value = pageid;
}
</script>

<template>
  <StoryTree
    @response="(pageId: string) => catchPage(pageId)"
    v-if="story.Start"
    :page="story.Start"
    :pageids="[]"
  ></StoryTree>
  <EditPage :pageid="currentPageId"></EditPage>
</template>

<style scoped></style>
