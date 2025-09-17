<script setup lang="ts">
import ConnectionManager from './components/StoryEditor/connections/ConnectionManager.vue';
import EditPage from './components/StoryEditor/EditPage.vue';
import StoryTree from './components/StoryEditor/nav/StoryTree.vue';
import UnreachablePages from './components/StoryEditor/nav/UnreachablePages.vue';
</script>

<template>
  <div>
    <StoryTree class="story-tree" />
    <UnreachablePages class="unreachable-pages" />
    <EditPage
      class="page-editor"
      title="Page Editor"
    >
    </EditPage>
    <ConnectionManager class="connection-manager" />
  </div>
</template>

<style scoped>
.story-tree {
  position: fixed;
  top: 0;
  left: 0;
  width: 400px;
  height: 50dvh;
  background-color: aqua;
}

.unreachable-pages {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 400px;
  height: 50dvh;
  background-color: red;
}

.connection-manager {
  position: fixed;
  bottom: 0;
  right: 0;
  width: calc(100dvw - 400px);
  height: 30dvh;
  background-color: purple;
}

.page-editor {
  position: fixed;
  top: 0;
  right: 0;
  width: calc(100dvw - 400px);
  height: 70dvh;
  background-color: yellow;
}
</style>
