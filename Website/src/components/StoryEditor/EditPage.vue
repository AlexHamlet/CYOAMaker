<script setup lang="ts">
import { ref, watch } from 'vue';
import 'md-editor-v3/lib/style.css';
import { changePageId, currentPageId, getPage, setPageText } from '@/services/Story';
import ApplicationPane from '../ApplicationPane.vue';
import ExportStory from './ExportStory.vue';
import ImportStory from './ImportStory.vue';
import type { Page } from '@/types/StoryFile';

const title = ref('Getting Started');
const text = ref('Click on a page to begin editing.');

const SaveChanges = () => {
  if (currentPageId.value == '') {
    alert('Click on a page to begin editing.');
    return;
  }
  if (title.value == '') {
    alert('All pages must have a Title');
    return;
  }
  changePageId(currentPageId.value, title.value);
  currentPageId.value = title.value;
  setPageText(currentPageId.value, text.value);
};

const DiscardChanges = () => {
  if (currentPageId.value == '') {
    alert('Click on a page to begin editing.');
    return;
  }
  title.value = currentPageId.value;
  text.value = getPage(currentPageId.value).Text;
};

watch(currentPageId, () => {
  const newpage: Page = getPage(currentPageId.value);
  title.value = newpage.id;
  text.value = newpage.Text;
});
</script>

<template>
  <ApplicationPane
    title="Page Editor"
    class="card"
  >
    <template v-slot:action1>
      <ImportStory />
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
form,
label {
  display: inline;
}

.title {
  width: 100%;
}

.pageBody {
  width: 100%;
  height: 70%;
  resize: none;
}

.save-discard > button {
  width: 50%;
}
</style>
