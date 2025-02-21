<template>
  <div class="main-content">
    <EditPage></EditPage>
  </div>
  <div class="sidebar">
    <StoryTreeView></StoryTreeView>
  </div>
</template>

<script setup lang="ts">
import EditPage from './StoryEditor/EditPage.vue';
import StoryTreeView from './StoryView/StoryTreeView.vue';
</script>

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
  background: #f0f0f0;
  overflow-y: auto;
  border-right: 2px solid #ccc;
}
</style>