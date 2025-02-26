<script setup lang="ts">
import { story } from '@/services/Story';
import type { Page } from '@/types/StoryFile';
import { computed } from 'vue';

type Props = {
  page: Page;
  pageids: string[];
};
// defineProps<Props>();
const props = defineProps<Props>();

const pages = computed(() => {
  return Object.values(props.page.Options)
    .filter((value) => !props.pageids.includes(value.Path))
    .map((value) => story.value[value.Path]);
});

const breadcrumbs = computed(() => [...props.pageids, props.page.id]);
</script>

<template>
  <li>
    <h3>{{ page.Text }}</h3>
    <ul>
      <StoryTree
        v-for="item in pages"
        :key="item.id"
        :page="item"
        :pageids="breadcrumbs"
      />
    </ul>
  </li>
</template>
