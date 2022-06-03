// Insert new Node at any index location of LinkedList
// Example: Add 4 at 1 index position

// 2  10 -> 20
//  \ /
//   4

class LinkedList {
    constructor(data) {
        this.head = {
            value: data,
            next: null
        }

        this.tail = this.head;
    }

    add(data) {
        const newNode = {
            value: data,
            next: null
        }

        this.tail.next = newNode;
        this.tail = newNode;
    }

    toTraverse(index) {
        let counter = 0;
        let currentNode;
        currentNode = this.head;

        while(index != counter) {
            counter++;
            currentNode = currentNode.next;
        }

        return currentNode;
    }

    insertAtIndex(index, data) {
        const newNode = {
            value: data,
            next: null
        }

        const leaderNode = this.toTraverse(index-1);
        const nextNode = leaderNode.next;

        // add newNode
        leaderNode.next = newNode;
        newNode.next = nextNode;
    }
}

const insertNode = new LinkedList(2);
insertNode.add(10);
insertNode.add(20);
insertNode.insertAtIndex(1, 4);
console.log(insertNode)