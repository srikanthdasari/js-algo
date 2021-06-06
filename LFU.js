// Least frequently used

function LFUNode(key, value) {
    this.prev = null;
    this.next = null;
    this.key = key;
    this.data = value;
    this.freqCount = 1;
}

function LFUDoublyLikedList(capacity) {
    this.head = new LFUNode('buffer head', null);
    this.tail = new LFUNode('buffer tail', null);

    this.head.next = this.tail;
    this.tail.prev = this.head;

    this.size = 0;
}

function LFUCache(capacity) {
    this.keys = {}; // stores LFUNode
    this.freq = {}; // stores LFUDoublyLinkedList

    this.capacity = capacity;

    this.minfreq = 0;
    this.size = 0;
}

LFUDoublyLikedList.prototype.insertAtHead = function (node) {
    node.next = this.head.next;
    this.head.next.prev = node;
    this.head.next = node;

    node.prev = this.head;
    this.size++;
}

LFUDoublyLikedList.prototype.removeAtTail = function () {
    let oldTail = this.tail.prev;
    let prev = this.tail.prev;

    prev.prev.next = this.tail;
}