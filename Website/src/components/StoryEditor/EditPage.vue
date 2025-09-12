<script setup lang="ts">
import { ref, watch } from 'vue';
import 'md-editor-v3/lib/style.css';
import { changePageId, story } from '@/services/Story';

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
  <div class="card">
    <input class="title" type="text" v-model="title" />
    <textarea class="pageBody" type="textbox" v-model="text"></textarea>
    <div class="save-discard">
      <button v-on:click="SaveChanges">Save</button>
      <button v-on:click="DiscardChanges">Discard</button>
    </div>
  </div>
</template>

<style scoped>
div {
  border-style: solid;
  border-color: yellow;
}

.title {
  width: 100%;
}

.pageBody {
  width: 100%;
  height: 20em;
  resize: none;
}

.save-discard>button {
  width: 50%;
}
</style>
