<template>
  <div>
    <p>Story:</p>
    <pre id="StoryPrintOut">{{ story }}</pre>
  </div>

  <div>
    <p>Pages:</p>
    <pre id="PageNamePrintOut">{{ allPages }}</pre>
  </div>
</template>

<script setup lang="ts">
import { allPages, story } from '@/services/Story';
</script>
