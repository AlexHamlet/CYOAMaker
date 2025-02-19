<template>
    <div>
        <form @submit.prevent="deleteNode">
            <h3>Delete Node</h3>
            <label for="delNodeId">Page Title:</label>
            <input type="text" id="deleteNodeId" name="deleteNodeId" required>
            <button type="submit">Delete</button>
            <button type="reset">Clear</button>
        </form>
    </div>
</template>

<script setup lang="ts">
import { deletePage } from '../services/Story';

function deleteNode(event: Event): void {
    event.preventDefault();
    let nodeId = document.getElementById('deleteNodeId') as HTMLInputElement;

    deletePage(nodeId.value);
}
(window as any).deleteNode = deleteNode;
</script>