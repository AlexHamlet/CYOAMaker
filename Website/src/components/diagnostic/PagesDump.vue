<script setup lang="ts">
import { allPages, orphanPages } from '@/services/Story';
</script>

<template>
  <div>
    <p>Pages:</p>
    <pre>{{ allPages }}</pre>
  </div>

  <div>
    <p>Unreachable Pages:</p>
    <pre>{{ orphanPages }}</pre>
  </div>
</template>
