<script setup lang="ts">
type ApplicationPaneProps = {
  title: string;
};
defineProps<ApplicationPaneProps>();
</script>

<template>
  <div class="application-pane">
    <div class="title">
      <span>{{ title }}</span>
      <span class="right">
        <slot name="action1"></slot>
      </span>
    </div>
    <div class="content">
      <slot> </slot>
    </div>
  </div>
</template>

<style scoped>
slot {
  display: inline;
}

.application-pane {
  overflow: hidden;
}

.title {
  background-color: var(--secondary-color);
  /* background-color: rgba(var(--secondary-color), 0.25); */
  color: white;
  padding: 0 0.5rem;
  position: relative;
}

.title .right {
  position: absolute;
  right: 0;
  max-width: 50%;
}

.content {
  overflow: auto;
  height: calc(100% - 1.5rem);
  max-height: calc(100% - 1.5rem);
  border: 4px solid var(--secondary-color);
  /* border: 4px solid rgba(255, 255, 255, 0.5); */
}
</style>
