import { storyName, story, setStory } from './Story';
import type { StoryFile } from '../types/StoryFile';

export function importStory(name: string, storyFile: File): void {
  const reader = new FileReader();

  reader.onload = () => {
    const contents = reader.result as string;
    console.log('File contents:', contents);
    const storyContents: StoryFile = JSON.parse(contents);
    setStory(name, storyContents);
  };

  reader.onerror = () => {
    console.error('Error reading file:', reader.error);
  };

  reader.readAsText(storyFile);
}

export function exportStory(): void {
  if (story.value['Start'] == null) {
    alert("Story must contain a page named 'Start'");
    return;
  }

  const blobData = JSON.stringify(story.value);
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
