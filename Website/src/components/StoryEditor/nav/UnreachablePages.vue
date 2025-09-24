<script setup lang="ts">
import ApplicationPane from '@/components/ApplicationPane.vue';
import { currentPageId, orphanPages, uiDeletePage } from '@/services/Story';

const setCurrentPage = (pageId: string) => {
  currentPageId.value = pageId;
};

const UnreachablePagesDeletePage = (pageId: string) => {
  uiDeletePage(pageId);
};
</script>

<template>
  <ApplicationPane title="Unreachable Pages">
    <div
      class="page"
      v-bind:key="pageId"
      v-for="pageId in orphanPages"
    >
      <button @click="setCurrentPage(pageId)">{{ pageId }}</button>
      <button
        class="delete"
        @click="UnreachablePagesDeletePage(pageId)"
      >
        X
      </button>
    </div>
  </ApplicationPane>
</template>

<style scoped>
.delete {
  border: none;
  color: var(--highlight-color);
  background-color: inherit;
  cursor: pointer;
  display: inline-block;
}

.delete:hover {
  background: #eee;
}

.container {
  display: block;
}

.page {
  text-wrap: nowrap;
}
</style>
