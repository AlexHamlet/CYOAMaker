<script setup lang="ts">
import { ref, watch } from 'vue';
import 'md-editor-v3/lib/style.css';
import { changePageId, currentPageId, story } from '@/services/Story';
import ApplicationPane from '../ApplicationPane.vue';
import ExportStory from './ExportStory.vue';
import ImportStory from './ImportStory.vue';

const text = ref('Hello');
const title = ref('Hello');

const SaveChanges = () => {
  changePageId(currentPageId.value, title.value);
  currentPageId.value = title.value;
  story.value[currentPageId.value].Text = text.value;
};

const DiscardChanges = () => {
  title.value = currentPageId.value;
  text.value = story.value[currentPageId.value].Text;
};

watch(currentPageId, () => {
  title.value = story.value[currentPageId.value].id;
  text.value = story.value[currentPageId.value].Text;
});
</script>

<template>
  <ApplicationPane
    title="Page Editor"
    class="card"
  >
    <template v-slot:action1>
      <ImportStory />
    </template>
    <template v-slot:action2>
      <ExportStory />
    </template>
    <input
      class="title"
      type="text"
      v-model="title"
    />
    <textarea
      class="pageBody"
      type="textbox"
      v-model="text"
    ></textarea>
    <div class="save-discard">
      <button v-on:click="SaveChanges">Save Changes</button>
      <button v-on:click="DiscardChanges">Discard Changes</button>
    </div>
  </ApplicationPane>
</template>

<style scoped>
.title {
  width: 100%;
}

.pageBody {
  width: 100%;
  height: 20em;
  resize: none;
}

.save-discard > button {
  width: 50%;
}
</style>
