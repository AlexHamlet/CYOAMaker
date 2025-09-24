<script setup lang="ts">
import { currentPageId, getPage, uiDeletePage } from '@/services/Story';
import type { Page } from '@/types/StoryFile';
import { computed, ref } from 'vue';

type Props = {
  page: Page;
  pageids: string[];
};
const props = defineProps<Props>();

const breadcrumbs = computed(() => [...props.pageids, props.page.id]);
const pages = computed(() => {
  return Object.values(props.page.Options)
    .filter((value) => !props.pageids.includes(value.Path))
    .map((value) => getPage(value.Path));
});

const expanded = ref(false);

const setCurrentPage = (pageid: string) => {
  currentPageId.value = pageid;
};

const StoryTreeDeletePage = (pageid: string) => {
  uiDeletePage(pageid);
};
</script>

<template>
  <div class="story-tree-node">
    <span class="expand-holder">
      <button
        class="expand"
        v-if="pages.length"
        @click="expanded = !expanded"
      >
        {{ expanded ? '-' : '+' }}
      </button>
    </span>
    <button
      class="page-title"
      @click="setCurrentPage(page.id)"
    >
      {{ page.id }}
    </button>
    <button
      class="delete"
      @click="StoryTreeDeletePage(page.id)"
    >
      X
    </button>

    <div
      class="children"
      v-show="expanded"
    >
      <StoryTreeNode
        v-for="item in pages"
        @response="(selectedPageId: string) => setCurrentPage(selectedPageId)"
        :key="item.id"
        :page="item"
        :pageids="breadcrumbs"
      />
    </div>
  </div>
</template>

<style scoped>
.page-title {
  display: inline;
}

.page-title:hover {
  color: blue;
}

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

.expand {
  width: 1.5rem;
  border: none;
  background-color: inherit;
  cursor: pointer;
  display: inline-block;
}

.expand-holder {
  min-width: 1.5rem;
  min-height: 0.1rem;
  display: inline-block;
}

.expand:hover {
  background: #eee;
}

button {
  display: inline;
  min-width: 0.5rem;
}

.container {
  display: block;
}

.children {
  margin-left: 1rem;
}

.story-tree-node {
  text-wrap: nowrap;
}
</style>
