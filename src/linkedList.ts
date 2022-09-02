class LinkedList {
    root: LinkedListNode;
    currentNode: LinkedListNode;

    constructor(root: LinkedListNode) {
        this.root = root;
        this.currentNode = this.root;
    }

    AddNode(node: LinkedListNode) {
        this.currentNode.nextItem = node;
        this.currentNode = this.currentNode.nextItem;
    }

    ListValues(): Array<any> {
        let currentNode = this.root;
        let nodeArray: Array<any> = []
        while (currentNode != null) {
            nodeArray.push(currentNode.value);
            currentNode = currentNode.nextItem;
        }

        return nodeArray;
    }
}

class LinkedListNode {
    value: any;
    nextItem: LinkedListNode | null;

    constructor(value: any) {
        this.value = value;
        this.nextItem = null;
    }
}

export {
    LinkedList,
    LinkedListNode,
}