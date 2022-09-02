import { LinkedList, LinkedListNode } from "./linkedList";

class Graph {
    vertices: number
    list: Array<LinkedList>
    
    constructor(vertices) {
        this.vertices = vertices;
        this.list = [...Array(vertices)].map(
            (_, i) => new LinkedList(new LinkedListNode(i))
        );
    }

    AddEdge(start: number, destination: number): void {
        if (start > this.vertices || destination > this.vertices) {
            const erroringArg = start > this.vertices ? "start" : "destination";
            throw new Error(`Cannot add Edge, ${erroringArg} is greater than amount of available vertices`);
        }

        this.list[start].AddNode(new LinkedListNode(destination));
    }
}

export {
    Graph,
}