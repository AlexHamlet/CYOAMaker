
import { ref } from "vue";
import type { Page, StoryFile, StoryPath } from "../types/StoryFile";

export let storyName = "placeholder";
export let story = ref<StoryFile>({});

export function setStory(storyName: string, storyFile: StoryFile) {
    story.value = storyFile;
}

export function addPage(pageId: string, pageText: string): void {
    //Ensure there is a start to the story
    if (Object.keys(story).length == 0)
        pageId = "Start";

    const page: Page = {
        id: pageId,
        Text: pageText,
        Options: {}
    };
    story.value[pageId] = page;
}

export function connectPages(fromNodeId: string, toNodeId: string, nodeSelector: string, connectionFlavorText: string) {
    let fromPage: Page = story.value[fromNodeId];
    let connection: StoryPath = {
        Selector: nodeSelector,
        Text: connectionFlavorText,
        Path: toNodeId
    }
    fromPage.Options[nodeSelector] = connection;
}

export function deletePage(pageId: string): void {
    delete story.value[pageId];
    //Delete all paths to that node
    for (let page in story) {
        let currentPage: Page = story.value[page];
        for (const key in currentPage.Options) {
            if (currentPage.Options[key].Path === pageId) {
                delete currentPage.Options[key];
            }
        }
    }
}

export function editPage(pageId: string, page: Page): void {
    story.value[pageId] = page;
}

export function getAllPages(): String[] {
    return Object.getOwnPropertyNames(story.value);
}

// export function getConnectedPages(page: Page): [string] {
//     return page.Options;
// }