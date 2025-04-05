<script setup lang="ts">
import { ref, watch } from 'vue';
import 'md-editor-v3/lib/style.css';
import { story } from '@/services/Story';
import ConnectionItem from './ConnectionItem.vue';
import NewConnectionItem from './NewConnectionItem.vue';

type Props = {
  pageid: string;
};
const props = defineProps<Props>();

const text = ref('Hello');
const title = ref('Hello');
const editpageid = ref(props.pageid);

watch(props, (newprops) => {
  editpageid.value = newprops.pageid;
  title.value = story.value[editpageid.value].id;
  text.value = story.value[editpageid.value].Text;
});
</script>

<template>
  <div>
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
