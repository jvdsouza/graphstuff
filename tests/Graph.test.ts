import { Graph } from '../src/graph';
import { LinkedList, LinkedListNode } from '../src/linkedList';

describe("test Graph class", () => {
    describe("test constructor method", () => {
        const vertices: number = 3;
        const graph = new Graph(vertices);

        it("should have the vertices set as the value passed in", () => {
            expect(graph.vertices).toBe(vertices);
        });
        it("should have a zero populated list of vertices length created on instantiation", () => {
            expect(graph.list).toStrictEqual(
                [...Array(vertices)].map(
                    (_, i) => new LinkedList(new LinkedListNode(i))
                )
            );
        });
    });

    describe("test AddEdge method", () => {
        let vertices: number;
        let graph: Graph;

        beforeEach(() => {
            vertices = 5;
            graph = new Graph(vertices);    
        });

        it("Should add a directed edge into the list", () => {
            const start: number = 0;
            const destination: number = 3;
            const edge: LinkedList = new LinkedList(new LinkedListNode(start));

            const expectedList: Array<LinkedList> = [...Array(vertices)].map(
                (_, i) => new LinkedList(new LinkedListNode(i))
            );
            expectedList[0] = edge;
            
            edge.AddNode(new LinkedListNode(destination));
            graph.AddEdge(start, destination);
            
            expect(graph.list).toStrictEqual(expectedList);
        });

        it("Should add an extra edge to an already existing edge", () => {
            const start: number = 0;
            const destination: number = 3;
            const destination_two: number = 4;

            const edge: LinkedList = new LinkedList(new LinkedListNode(start));
            edge.AddNode(new LinkedListNode(destination));
            edge.AddNode(new LinkedListNode(destination_two));

            const expectedList: Array<LinkedList> = [...Array(vertices)].map(
                (_, i) => new LinkedList(new LinkedListNode(i))
            );
            expectedList[0] = edge;
            
            graph.AddEdge(start, destination);
            graph.AddEdge(start, destination_two);
            
            expect(graph.list).toStrictEqual(expectedList);
        });

        it("Should throw an error when an edge when the start or destination vertices are greater than the given vertices", () => {
            const graph = new Graph(3);
            expect(() => {graph.AddEdge(0, 4)}).toThrow(/Cannot add Edge/);
            expect(() => {graph.AddEdge(4, 6)}).toThrow(/Cannot add Edge/);
        });
    });

    describe("test PrintGraph method", () => {

    });
});