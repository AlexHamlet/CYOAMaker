<template>
    <div>
        <h3>Export</h3>
        <button onclick="exportStoryButton()">Export</button>
    </div>
</template>

<script setup lang="ts">
import { exportStory } from '../services/Data';

function exportStoryButton(): void {
    exportStory()
}
(window as any).exportStoryButton = exportStoryButton;
</script>