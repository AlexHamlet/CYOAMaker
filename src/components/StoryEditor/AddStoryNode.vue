<template>
    <div>
        <form @submit.prevent="addNode">
            <h3>Add Node</h3>
            <label for="addNodeId">Page Title: </label>
            <input type="text" id="addNodeId" name="addNodeId" required>
            <label for="addNodeText">Page Content:</label>
            <textarea id="addNodeText" name="addNodeText" required></textarea>
            <button type="submit">Add</button>
            <button type="reset">Clear</button>
        </form>
    </div>
</template>

<script setup lang="ts">
import { addPage } from '../services/Story';

function addNode(event: Event): void {
    event.preventDefault();
    const nodeId = document.getElementById('addNodeId') as HTMLInputElement;
    const pageContentElement = document.getElementById('addNodeText') as HTMLTextAreaElement;

    addPage(nodeId.value, pageContentElement.value);
}
</script>