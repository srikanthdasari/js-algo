// double linked list

function DoubleLinkedListNode(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
}

function DoubleLinkedList() {
    this.head = null;
    this.tail = null;
    this.size = 0;
}

DoubleLinkedList.prototype.isEmpty = function () {
    return this.size === 0;
}

DoubleLinkedList.prototype.insertAtHead = function (data) {
    if (this.head === null) {
        this.head = new DoubleLinkedListNode(data);
        this.tail = this.head;
    } else {
        let temp = new DoubleLinkedListNode(data);
        temp.next = this.head;
        this.head.prev = temp;
        this.head = temp;
    }
    this.size++;
}

DoubleLinkedList.prototype.insertAtTail = function (data) {
    if (this.tail == null) {
        this.tail = new DoubleLinkedListNode(data);
        this.head = this.tail;
    } else {
        let temp = new DoubleLinkedListNode(data);
        temp.prev = this.tail;
        this.tail.next = temp;
        this.tail = temp;
    }
    this.size++;
}

DoubleLinkedList.prototype.deleteAtHead = function () {
    let toReturn = null;
    if (this.head != null) {
        toReturn = this.head.data;

        if (this.head == this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }
    }
    this.size--;
    return toReturn;
}


DoubleLinkedList.prototype.deleteAtTail = function () {
    let toReturn = null;
    if (this.tail != null) {
        toReturn = this.tail.data;

        if (this.head == this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
    }
    this.size--;
    return toReturn;
}