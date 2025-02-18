import { StoryFile } from "./types/story_file";
import { getAllPages } from "./story";

export function updateDisplay(story: StoryFile): void {
    updateTextDump(story);
    updateGraph(story);
}

function updateTextDump(story: StoryFile): void {
    let storyText = JSON.stringify(story);
    let printOut = document.getElementById('StoryPrintOut');
    if (printOut)
        printOut.innerHTML = storyText;

    let pageNames = JSON.stringify(getAllPages())
    let pageNamesOut = document.getElementById('PageNamePrintOut');
    if (pageNamesOut)
        pageNamesOut.innerHTML = pageNames;
}

function updateGraph(story: StoryFile): void {
    // const nodes = Object.keys(story).map(pageId => ({ id: story[pageId].id }));

    // let links = [];
    // for (let pageId in Object.keys(story)) {
    //     for (let optionId in story[pageId].Options) {
    //         links.push({ source: pageId, target: story[pageId].Options[optionId].Path })
    //     }
    // }
}