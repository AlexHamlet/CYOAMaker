import { computed, ref } from 'vue';
import type { Page, StoryFile, StoryPath } from '../types/StoryFile';

export const storyName = 'placeholder';
export const story = ref<StoryFile>({});

//Import
export function setStory(storyName: string, storyFile: StoryFile) {
  story.value = storyFile;
}

//Additions
export function addPage(pageId: string, pageText: string): void {
  //Ensure there is a start to the story
  if (Object.keys(story).length == 0) pageId = 'Start';

  const page: Page = {
    id: pageId,
    Text: pageText,
    Options: {},
  };
  story.value[pageId] = page;
}

export function connectPages(
  fromNodeId: string,
  toNodeId: string,
  nodeSelector: string,
  connectionFlavorText: string,
) {
  const fromPage: Page = story.value[fromNodeId];
  const connection: StoryPath = {
    Selector: nodeSelector,
    Text: connectionFlavorText,
    Path: toNodeId,
  };
  fromPage.Options[nodeSelector] = connection;
}

//Deletions
export function deletePage(pageId: string): void {
  delete story.value[pageId];

  //Delete all paths to that node
  for (const page in story.value) {
    const currentPage: Page = story.value[page];
    for (const key in currentPage.Options) {
      if (currentPage.Options[key].Path === pageId) {
        delete currentPage.Options[key];
      }
    }
  }
}

export function deleteConnection(pageid: string, connectionSelector: string) {
  delete story.value[pageid].Options[connectionSelector];
}

//Edits
export function changePageId(pageId: string, newPageId: string) {
  if (pageId == newPageId) return;

  story.value[newPageId] = story.value[pageId];
  story.value[newPageId].id = newPageId;
  delete story.value[pageId];

  for (const page in story.value) {
    const currentPage: Page = story.value[page];
    for (const key in currentPage.Options) {
      if (currentPage.Options[key].Path === pageId) {
        currentPage.Options[key].Path = newPageId;
      }
    }
  }
}

export function editPage(pageId: string, page: Page): void {
  story.value[pageId] = page;
}

export function editConnection(
  pageId: string,
  connectionSelector: string,
  newPath: string,
  newText: string,
) {
  story.value[pageId].Options[connectionSelector].Path = newPath;
  story.value[pageId].Options[connectionSelector].Text = newText;
}

//Utilities
export function getConnectedPages(page: Page): string[] {
  const paths: string[] = [];

  for (const key in page.Options) {
    paths.push(page.Options[key].Path);
  }

  return paths;
}

export const allPages = computed((): string[] => {
  return Object.getOwnPropertyNames(story.value);
});

export const orphanPages = computed((): string[] => {
  return allPages.value.filter((x) => !usedPages.value.includes(x));
});

export const usedPages = computed((): string[] => {
  if (!story.value['Start']) return [];
  return usedPagesRecurse('Start', []);
});

function usedPagesRecurse(pageId: string, seenPages: string[]): string[] {
  seenPages.push(pageId);
  const options = story.value[pageId].Options;
  for (const key in options) {
    if (!seenPages.includes(options[key].Path)) {
      seenPages.push(...usedPagesRecurse(options[key].Path, seenPages));
    }
  }

  return seenPages;
}
