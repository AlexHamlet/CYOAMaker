import { StoryFile } from "./types/story_file";
// import * as d3 from 'd3';


export function updateTextDump(story: StoryFile): void {
    let storyText = JSON.stringify(story);
    let printOut = document.getElementById('StoryPrintOut');
    if (printOut)
        printOut.innerHTML = storyText;
}

export function updateGraph(story: StoryFile): void {

}

// const nodes = [
//     { id: 1, name: 'Node 1' },
//     { id: 2, name: 'Node 2' },
//     { id: 3, name: 'Node 3' }
// ];

// const links = [
//     { source: 1, target: 2 },
//     { source: 2, target: 3 },
//     { source: 3, target: 1 }
// ];

// const width = 600;
// const height = 400;

// const svg = d3.select("#graph").append("svg")
//     .attr("width", width)
//     .attr("height", height);

// const simulation = d3.forceSimulation(nodes)
//     .force("link", d3.forceLink(links).id(d => d.id))
//     .force("charge", d3.forceManyBody())
//     .force("center", d3.forceCenter(width / 2, height / 2));

// const link = svg.append("g")
//     .attr("class", "links")
//     .selectAll("line")
//     .data(links)
//     .enter().append("line")
//     .attr("class", "edge");

// const node = svg.append("g")
//     .attr("class", "nodes")
//     .selectAll("circle")
//     .data(nodes)
//     .enter().append("circle")
//     .attr("class", "node")
//     .attr("r", 10)
//     .on("click", (event, d) => alert("Node: " + d.name));

// simulation.on("tick", () => {
//     link
//         .attr("x1", d => d.source.x)
//         .attr("y1", d => d.source.y)
//         .attr("x2", d => d.target.x)
//         .attr("y2", d => d.target.y);

//     node
//         .attr("cx", d => d.x)
//         .attr("cy", d => d.y);
// });

// link.on("click", (event, d) => alert("Edge from Node " + d.source.id + " to Node " + d.target.id));
