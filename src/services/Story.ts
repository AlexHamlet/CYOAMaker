import { computed, ref } from 'vue';
import type { Page, StoryFile, StoryPath } from '../types/StoryFile';

export const storyName = 'placeholder';
export const story = ref<StoryFile>({});

export function setStory(storyName: string, storyFile: StoryFile) {
  story.value = storyFile;
}

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

export function deletePage(pageId: string): void {
  delete story.value[pageId];
  //Delete all paths to that node
  for (const page in story) {
    const currentPage: Page = story.value[page];
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

export const allPages = computed((): string[] => {
  return Object.getOwnPropertyNames(story.value);
});

export function getConnectedPages(page: Page): string[] {
  const paths: string[] = [];
  Object.entries(page.Options).forEach(([selector, storyPath]) => {
    paths.push(storyPath.Path);
  });
  return paths;
}
