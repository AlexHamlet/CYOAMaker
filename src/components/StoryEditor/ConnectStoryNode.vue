<template>
    <div>
        <form @submit.prevent="connectNode">
            <!--TODO Make the path selectors searchable dropdowns instead.-->
            <h3>Connect Nodes</h3>
            <label for="pathSelector">Path Selector:</label>
            <input type="text" id="pathSelector" name="pathSelector" required>

            <label for="fromNodeId">From Page:</label>
            <select id="fromNodeId">
                <option v-for="page in allPages" :key="page">{{ page }}</option>
            </select>

            <label for="toNodeId">To Page:</label>
            <select id="toNodeId">
                <option v-for="page in allPages" :key="page">{{ page }}</option>
            </select>

            <label for="connectNodeText">Flavortext For Option:</label>
            <textarea id="connectNodeText" name="connectNodeText" required></textarea>

            <button type="submit">Connect</button>
            <button type="reset">Clear</button>
        </form>
    </div>
</template>

<script setup lang="ts">
import { connectPages, allPages } from '../services/Story';

function connectNode(event: Event): void {
    event.preventDefault();
    const fromNodeId = document.getElementById('fromNodeId') as HTMLInputElement;
    const toNodeId = document.getElementById('toNodeId') as HTMLInputElement;
    const connectNodeText = document.getElementById('connectNodeText') as HTMLTextAreaElement;
    const pathSelector = document.getElementById('pathSelector') as HTMLInputElement;

    connectPages(fromNodeId.value, toNodeId.value, pathSelector.value, connectNodeText.value);
}
</script>