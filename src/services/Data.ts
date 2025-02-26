import { storyName, story, setStory } from './Story';
import type { StoryFile } from '../types/StoryFile';

export function importStory(name: string, storyFile: File): void {
  // Create a FileReader to read the file
  const reader = new FileReader();

  // Define what happens when the file is successfully read
  reader.onload = () => {
    // The file contents will be available in reader.result
    const contents = reader.result as string;
    console.log('File contents:', contents);
    const storyContents: StoryFile = JSON.parse(contents);
    setStory(name, storyContents);
  };

  // Define what happens in case of an error
  reader.onerror = () => {
    console.error('Error reading file:', reader.error);
  };

  // Read the file as text
  reader.readAsText(storyFile);
}

export function exportStory(): void {
  //Ensure story will begin
  debugger;
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
