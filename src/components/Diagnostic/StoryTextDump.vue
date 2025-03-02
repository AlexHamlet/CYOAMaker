<template>
  <div>
    <p>Story:</p>
    <pre>{{ story }}</pre>
  </div>

  <div>
    <p>Pages:</p>
    <pre>{{ allPages }}</pre>
  </div>

  <div>
    <p>Unreachable Pages:</p>
    <pre>{{ orphanPages }}</pre>
  </div>
</template>

<script setup lang="ts">
import { allPages, orphanPages, story } from '@/services/Story';
</script>
