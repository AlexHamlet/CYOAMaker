<script setup lang="ts">
import { deleteConnection, editConnection } from '@/services/Story';
import type { StoryPath } from '@/types/StoryFile';
import { ref } from 'vue';
import PageSelector from '../PageSelector.vue';

type Props = {
  pageid: string;
  storyPath: StoryPath;
};
const props = defineProps<Props>();

const selector = ref(props.storyPath.Selector);
const text = ref(props.storyPath.Text);
const path = ref(props.storyPath.Path);

const SaveConnection = () => {
  editConnection(props.pageid, selector.value, path.value, text.value);
};

const DeleteConnection = () => {
  deleteConnection(props.pageid, props.storyPath.Selector);
};
</script>

<template>
  <p>{{ selector }}:</p>
  <input
    type="text"
    v-model="text"
  />
  <PageSelector
    :optionPath="props.storyPath.Path"
    @value="(val) => (path = val)"
  />
  <button v-on:click="SaveConnection">Save</button>
  <button v-on:click="DeleteConnection">Delete</button>
</template>

<style scoped></style>
