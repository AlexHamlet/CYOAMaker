import { updateTextDump } from "./graph";
import { Page, StoryFile, StoryPath } from "./types/story_file";

export let storyName = "placeholder";
export let story: StoryFile = {};

export function addPage(pageId: string, pageText: string): void {
    //Ensure there is a start to the story
    if(Object.keys(story).length  == 0)
        pageId = "Start";

    const page: Page = {
        id: pageId,
        Text: pageText,
        Options: {}
    };
    story[pageId] = page;
    updateTextDump(story);
}

export function connectPages(fromNodeId: string, toNodeId: string, nodeSelector: string, connectionFlavorText: string) {
    let fromPage: Page = story[fromNodeId];
    let connection: StoryPath = {
        Selector: nodeSelector,
        Text: connectionFlavorText,
        Path: toNodeId
    }
    fromPage.Options[nodeSelector] = connection;
    updateTextDump(story);
}

export function deletePage(pageId: string): void {
    delete story[pageId];
    //Delete all paths to that node
    for (let page in story) {
        let currentPage: Page = story[page];
        for (const key in currentPage.Options) {
            if (currentPage.Options[key].Path === pageId) {
                delete currentPage.Options[key];
            }
        }
    }
    updateTextDump(story);
}

export function editPage(pageId: string, page: Page): void {
    story[pageId] = page;
    updateTextDump(story);
}