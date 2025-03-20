<script setup lang="ts">
import { ref, watch } from 'vue';
import { MdEditor } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import { changePageId, story } from '@/services/Story';
import ConnectionItem from './ConnectionItem.vue';
import NewConnectionItem from './NewConnectionItem.vue';

type Props = {
  pageid: string;
};
const props = defineProps<Props>();

const text = ref('Hello');
const title = ref('Hello');
const editpageid = ref(props.pageid);

const SaveChanges = () => {
  changePageId(editpageid.value, title.value);
  editpageid.value = title.value;
  story.value[editpageid.value].Text = text.value;
};

const DiscardChanges = () => {
  title.value = editpageid.value;
  text.value = story.value[editpageid.value].Text;
};

watch(props, (newprops) => {
  editpageid.value = newprops.pageid;
  title.value = story.value[editpageid.value].id;
  text.value = story.value[editpageid.value].Text;
});
</script>

<template>
  <div v-if="story[editpageid] !== undefined">
    <input
      type="text"
      v-model="title"
    />
    <MdEditor
      language="en-us"
      v-model="text"
      class="PageContentEditor"
    />
    <button v-on:click="SaveChanges">Save</button>
    <button v-on:click="DiscardChanges">Discard</button>
    <ConnectionItem
      :key="connection.Selector"
      v-for="connection in story[editpageid].Options"
      :pageid="editpageid"
      :story-path="connection"
    ></ConnectionItem>
    <NewConnectionItem :pageid="editpageid" />
  </div>
</template>

<style scoped></style>
