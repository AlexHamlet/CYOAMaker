import { storyName, story } from "./story";
import { StoryFile } from "./types/story_file";

export function importStory(name: string, storyContents: StoryFile): void {
}

export function exportStory(story: StoryFile): void {
    const blobData = JSON.stringify(story);
    const blob = new Blob([blobData])
    const a = document.createElement("a")

    a.download = storyName + '.json';
    a.href = URL.createObjectURL(blob)
    a.click()
    setTimeout(() => {
        URL.revokeObjectURL(a.href)
        a.remove()
    }, 200)
}