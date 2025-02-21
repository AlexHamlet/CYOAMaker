<template>
    <div>
        <p>Story:</p>
        <p id="StoryPrintOut">{{ story }}</p>
    </div>

    <div>
        <p>Pages:</p>
        <p id="PageNamePrintOut">{{ allPages }}</p>
    </div>
</template>

<script setup lang="ts">
import { allPages, story } from '../services/Story';
</script>