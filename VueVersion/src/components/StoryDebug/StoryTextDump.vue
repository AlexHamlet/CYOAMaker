<template>
    <div>
        <p>Story:</p>
        <p id="StoryPrintOut">{{ storyText }}</p>
    </div>

    <div>
        <p>Pages:</p>
        <p id="PageNamePrintOut">{{ pageNames }}</p>
    </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { getAllPages, story } from '../services/Story';
import type { StoryFile } from '../types/StoryFile';

const storyText = ref<string>('');
const pageNames = ref<string>('');

function updateTextDump(story: StoryFile): void {
    storyText.value = JSON.stringify(story);
    pageNames.value = JSON.stringify(getAllPages());
}

watchEffect(() => {
    updateTextDump(story.value);
});
</script>