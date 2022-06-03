// LinkedList:

// Create Linked List: We store linkedList in a form of object in memory
// Example: 10 -> 16 -> 20
const LinkedList2 = {
    head: {
        value: 10,
        next: {
            value: 16,
            next: {
                value: 20,
                next: null
            }
        }
    }
}

console.log(LinkedList2);

class LinkedList {
    // Class always use constroctor to define itself
    constructor(data) {
        // always use this keyword to refer to the class property. Create head object
        this.head = {
            value: data,
            next: null
        }
        // head and tail are on same node
        this.tail = this.head;
        this.length = 1;
    }

    // Add aother nodes to the list
    append(data) {
        // We create a node as an object
        const newNode = {
            value: data,
            next: null
        }
        // console.log(newNode) // return { value: 16, next: null }
        this.tail.next = newNode; // LinkedList {
                                                    // head: { value: 10, next: { value: 16, next: null } },
                                                    // tail: { value: 10, next: { value: 16, next: null } },
                                                    // length: 1
                                                    // }
                                                    // We can see that tail is an object with value 10 (from head) and 16. we need to move tail to last
        this.tail = newNode;
        this.length++;
    }
}

const myList = new LinkedList(10);
myList.append(16);
console.log(myList)
// return LinkedList {
//   head: { value: 10, next: { value: 16, next: null } },
//   tail: { value: 16, next: null },
//   length: 2
// }
myList.append(20);
console.log(myList)
// return 
// LinkedList {
//   head: { value: 10, next: { value: 16, next: [Object] } },
//   tail: { value: 20, next: null },
//   length: 3
// }