<template>
    <textarea v-model="treedump"></textarea>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import type { StoryFile } from '../types/StoryFile';
import { story } from '../services/Story';

const treedump = ref('')

function updateTreedump(story: StoryFile): void {
    if (!story["Start"])
        return;
    const retval = recurseTree(story["Start"]["id"], 0, []);
    treedump.value = retval;
}

function recurseTree(pageid: string, level: number, path: string[]): string {
    debugger;
    const page = story.value[pageid];
    let retval = '\t'.repeat(level) + page.id + '\n';

    if (path.includes(page.id)) {
        return '';
    }
    path.push(page.id);

    Object.entries(page.Options).forEach(([selector, storyPath]) => {
        retval += recurseTree(storyPath.Path, level + 1, path)
    })

    return retval;
}

watchEffect(() => {
    updateTreedump(story.value)
})
</script>

<style scoped>
textarea {
    width: 100%;
    height: 100%;
}
</style>