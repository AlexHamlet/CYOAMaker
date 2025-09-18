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
      v-bind:key="pageId"
      v-for="pageId in orphanPages"
    >
      <h3 v-on:click="setCurrentPage(pageId)">{{ pageId }}</h3>
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
h3 {
  display: inline;
}

h3:hover {
  color: blue;
}

.container {
  display: block;
}
</style>
