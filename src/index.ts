import { exportStory, importStory } from './file';
import { addPage, connectPages, deletePage } from './story';

function addNode(event: Event): void {
  event.preventDefault();
  let nodeId = document.getElementById('addNodeId') as HTMLInputElement;
  let pageContentElement = document.getElementById('addNodeText') as HTMLTextAreaElement;

  addPage(nodeId.value, pageContentElement.value);
}
(window as any).addNode = addNode;

function deleteNode(event: Event): void {
  event.preventDefault();
  let nodeId = document.getElementById('deleteNodeId') as HTMLInputElement;

  deletePage(nodeId.value);
}
(window as any).deleteNode = deleteNode;

function connectNode(event: Event): void {
  event.preventDefault();
  let fromNodeId = document.getElementById('fromNodeId') as HTMLInputElement;
  let toNodeId = document.getElementById('toNodeId') as HTMLInputElement;
  let connectNodeText = document.getElementById('connectNodeText') as HTMLTextAreaElement;
  let pathSelector = document.getElementById('pathSelector') as HTMLInputElement;

  connectPages(fromNodeId.value, toNodeId.value, pathSelector.value, connectNodeText.value);
}
(window as any).connectNode = connectNode;


const fileInput = document.getElementById('storyFile');
fileInput?.addEventListener('change', importStoryButton);
function importStoryButton(event: Event): void {
  const input = event.target as HTMLInputElement;

  // Ensure a file was selected
  if (!input.files || input.files.length === 0) {
    console.log('No file selected');
    return;
  }

  // Get the first file from the input
  const file = input.files[0];

  importStory(file.name, file);
}

function exportStoryButton(): void {
  exportStory()
}
(window as any).exportStoryButton = exportStoryButton;