<script setup lang="ts">
import { story, currentPageId, uiDeletePage } from '@/services/Story';
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
    .map((value) => story.value[value.Path]);
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
    <button
      v-if="pages.length"
      @click="expanded = !expanded"
    >
      {{ expanded ? '-' : '+' }}
    </button>
    <button
      class="page-title"
      @click="setCurrentPage(page.id)"
    >
      {{ page.id }}
    </button>
    <button
      class="page-delete"
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

button {
  display: inline;
}

.container {
  display: block;
}

.children {
  margin-left: 10px;
}
</style>
