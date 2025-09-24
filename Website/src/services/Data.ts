import { allPages, currentPageId, getStory, setStory } from './Story';
import type { StoryFile } from '../types/StoryFile';

export let storyName = 'StoryFile';

export function importStory(name: string, storyFile: File): void {
  const reader = new FileReader();

  reader.onload = () => {
    const contents = reader.result as string;
    console.log('File contents:', contents);
    const storyContents: StoryFile = JSON.parse(contents);
    storyName = name;
    setStory(storyContents);
    currentPageId.value = '';
  };

  reader.onerror = () => {
    console.error('Error reading file:', reader.error);
  };

  reader.readAsText(storyFile);
}

export function exportStory(): void {
  if (!allPages.value.includes('Start')) {
    alert("Story must contain a page named 'Start'");
    return;
  }

  const blobData = JSON.stringify(getStory());
  const blob = new Blob([blobData]);
  const a = document.createElement('a');

  a.download = storyName + '.json';
  a.href = URL.createObjectURL(blob);
  a.click();
  setTimeout(() => {
    URL.revokeObjectURL(a.href);
    a.remove();
  }, 200);
}
