<script setup lang="ts">
import { story } from '@/services/Story';
import type { Page } from '@/types/StoryFile';
import { computed, ref } from 'vue';

type Props = {
  page: Page;
  pageids: string[];
};
const props = defineProps<Props>();

const emit = defineEmits(['response']);

const breadcrumbs = computed(() => [...props.pageids, props.page.id]);
const pages = computed(() => {
  return Object.values(props.page.Options)
    .filter((value) => !props.pageids.includes(value.Path))
    .map((value) => story.value[value.Path]);
});

const expanded = ref(false);

const BubblePage = (pageid: string) => {
  emit('response', pageid);
};
</script>

<template>
  <div class="container">
    <button v-if="pages.length" @click="expanded = !expanded">
      {{ expanded ? '-' : '+' }}
    </button>
    <h3 @click="BubblePage(page.id)">{{ page.id }}</h3>

    <div class="children" v-show="expanded">
      <StoryTree v-for="item in pages" @response="(selectedPageId: string) => BubblePage(selectedPageId)" :key="item.id"
        :page="item" :pageids="breadcrumbs" />
    </div>
  </div>
</template>

<style scoped>
div {
  border-style: solid;
  border-color: red;
}

h3 {
  display: inline;
}

h3:hover {
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
