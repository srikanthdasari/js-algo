// singgle linked list

function SingleLinkedListNode(data) {
    this.data = data;
    this.next = null;
}


function SingleLinkedList() {
    this.head = null;
    this.size = 0;
}

SingleLinkedList.prototype.isEmpty = function () {
    return this.size === 0;
}

SingleLinkedList.prototype.insert = function (data) {
    if (!this.head) {
        this.head = new SingleLinkedListNode(data);
    } else {
        const temp = this.head;
        this.head = new SingleLinkedListNode(data);
        this.head.next = temp;
    }
    this.size++;
}

SingleLinkedListNode.prototype.delete = function (data) {
    let currentHead = this.head;

    if (currentHead.data === data) {
        // just shift the head over, head is not the new value
        this.head = currentHead.next;
        this.size--;
    } else {
        let preHead = currentHead;
        while (currentHead.next) {
            if (currentHead.data === data) {
                preHead.next = currentHead.next;
                preHead = currentHead;
                currentHead = currentHead.next;
                break;
            }
            preHead = currentHead;
            currentHead = currentHead.next;
        }

        if (currentHead.data === data) {
            preHead.next = null;
        }

        this.size--;
    }
}