<script setup lang="ts">
import { ref } from 'vue';
import { story } from '@/services/Story';
import StoryTree from './StoryEditor/nav/StoryTree.vue';
import EditPage from './StoryEditor/EditPage.vue';
import ConnectionManager from './StoryEditor/connections/ConnectionManager.vue';
import UnreachablePages from './StoryEditor/nav/UnreachablePages.vue';
import AddPage from './StoryEditor/AddPage.vue';

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
  <UnreachablePages @response="(pageId: string) => catchPage(pageId)"></UnreachablePages>
  <EditPage :pageid="currentPageId"></EditPage>
  <ConnectionManager :pageid="currentPageId"></ConnectionManager>
  <AddPage></AddPage>
</template>

<style scoped></style>
