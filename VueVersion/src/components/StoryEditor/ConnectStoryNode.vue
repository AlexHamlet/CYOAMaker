<template>
    <div>
        <form @submit.prevent="connectNode">
            <!--TODO Make the path selectors searchable dropdowns instead.-->
            <h3>Connect Nodes</h3>
            <label for="pathSelector">Path Selector:</label>
            <input type="text" id="pathSelector" name="pathSelector" required>

            <label for="fromNodeId">From Page:</label>
            <!-- <v-select :options="getAllPages()" label="fromNodeId" id="fromNodeId"></v-select> -->
            <input type="text" id="fromNodeId" name="fromNodeId" required>

            <label for="toNodeId">To Page:</label>
            <input type="text" id="toNodeId" name="toNodeId" required>

            <label for="connectNodeText">Flavortext For Option:</label>
            <textarea id="connectNodeText" name="connectNodeText" required></textarea>

            <button type="submit">Connect</button>
            <button type="reset">Clear</button>
        </form>
    </div>
</template>

<script setup lang="ts">
import { connectPages } from '../services/Story';

function connectNode(event: Event): void {
    event.preventDefault();
    let fromNodeId = document.getElementById('fromNodeId') as HTMLInputElement;
    let toNodeId = document.getElementById('toNodeId') as HTMLInputElement;
    let connectNodeText = document.getElementById('connectNodeText') as HTMLTextAreaElement;
    let pathSelector = document.getElementById('pathSelector') as HTMLInputElement;

    connectPages(fromNodeId.value, toNodeId.value, pathSelector.value, connectNodeText.value);
}
(window as any).connectNode = connectNode;
</script>