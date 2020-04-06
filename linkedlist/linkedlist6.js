class Node {
    constructor(data) {
        this.prev = null
        this.data = data
        this.prev = null

    }
}

class linkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    pushBack(data) {
        let newNode = new Node(data)

        if (this.head == null) {
            this.head = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
        }
        this.tail = newNode
    }
    printForward(data) {
        for (let current = this.head; current != null; current = current.next) {
            console.log(current.data);
        }
    }

    printBack(data) {
        for (let current = this.tail; current != null; current = current.prev) {
            console.log(current.data);
        }
    }
}

var myList = new linkedList()
myList.pushBack(5)
myList.pushBack(1)
myList.pushBack(7)
myList.printForward()
myList.printBack()
