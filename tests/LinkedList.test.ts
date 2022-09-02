import { LinkedList, LinkedListNode } from "../src/linkedList";

describe("test LinkedListNode class", () => {
    describe("test constructor", () => {
        it("should have the same value as passed in on instantiation no matter the type", () => {
            expect(new LinkedListNode("value").value).toBe("value");
            expect(new LinkedListNode(0).value).toBe(0);
        });

        it("should always have the nextItem as null when instantiated", () => {
            expect(new LinkedListNode("whatever").nextItem).toBe(null);
        });
    });
});

describe("test LinkedList class", () => {
    const LL = new LinkedList(new LinkedListNode("item"));
    const LLN = new LinkedListNode("item");

    describe("test constructor", () => {
        it("should have the root to be the same as the one passed in on instantiation", () => {
            expect(LL.root).toMatchObject(LLN);
        });

        it("should set the current node as the root", () => {
            expect(LL.currentNode).toMatchObject(LL.root);
        });
    });

    describe("test AddNode method", () => {
        it("should add a new node", () => {
            const newNode = new LinkedListNode(1);
            const newLL = new LinkedList(new LinkedListNode("item"));
            const newLLN = new LinkedListNode("item");

            newLL.AddNode(newNode);

            expect(newLL.currentNode).toMatchObject(newNode);
            expect(newLL.root.value).toEqual(newLLN.value);
            expect(newLL.root.nextItem).toMatchObject(newNode);
        });
    });

    describe("test ListValues method", () => {
        it("should return all values in inserted order as a list", () => {
            LL.AddNode(new LinkedListNode(1));
            LL.AddNode(new LinkedListNode(true));

            expect(LL.ListValues()).toStrictEqual(["item", 1, true]);
        });
    });
});