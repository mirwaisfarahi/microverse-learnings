// Delete a node from a specific index of LinkedList

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
}




const myList = new LinkedList(2);
myList.add(4);
console.log(myList)