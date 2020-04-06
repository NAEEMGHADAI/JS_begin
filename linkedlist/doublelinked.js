function Node(data) {
    this.prev = null
    this.data = data
    this.next = null
}

function Linkedlist() {
    this.head = null
    this.tail = null

    this.pushBack = function (data) {
        let newNode = new Node(data)
        //if its the first value in the linked list
        if (this.head == null) {
            this.head = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
        }
        this.tail = newNode
    }

    this.printForward = function () {
        for (let current = this.head; current != null; current = current.next) {
            console.log(current.data);
        }
    }

    this.printBack = function () {
        for (let current = this.tail; current != null; current = current.prev) {
            console.log(current.data);
        }
    }


}

var myList = new Linkedlist();
myList.pushBack(5);
myList.pushBack(1)
myList.pushBack(7)
myList.printForward()
myList.printBack()
