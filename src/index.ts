import { addPage, connectPages, deletePage } from './story';

function addNodeButton(): void {
  let nodeId = document.getElementById('addNodeId') as HTMLInputElement;
  let pageContentElement = document.getElementById('addNodeText') as HTMLTextAreaElement;

  addPage(nodeId.value, pageContentElement.value);
}
(window as any).addNodeButton = addNodeButton;

function deleteNodeButton(): void {
  let nodeId = document.getElementById('deleteNodeId') as HTMLInputElement;

  deletePage(nodeId.value);
}
(window as any).deleteNodeButton = deleteNodeButton;

function connectNodeButton(): void {
  let fromNodeId = document.getElementById('fromNodeId') as HTMLInputElement;
  let toNodeId = document.getElementById('toNodeId') as HTMLInputElement;
  let connectNodeText = document.getElementById('connectNodeText') as HTMLTextAreaElement;
  let pathSelector = document.getElementById('pathSelector') as HTMLInputElement;

  connectPages(fromNodeId.value, toNodeId.value, pathSelector.value, connectNodeText.value);
}
(window as any).connectNodeButton = connectNodeButton;

function importStoryButton(): void{

}
(window as any).importStoryButton = importStoryButton;

function exportStoryButton(): void{

}
(window as any).exportStoryButton = exportStoryButton;