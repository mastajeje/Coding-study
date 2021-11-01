class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append = (value) => {
    const newNode = {
      value,
      next: null,
      prev: null,
    };
    // Addtion for Doubly LL
    newNode.prev = this.tail;
    //at first it adds newNode to referenced this.head
    this.tail.next = newNode;
    // switch this.tail's reference from this.head => this.tail
    this.tail = newNode;
    this.length++;
    return this;
  };

  prepend = (value) => {
    const newNode = {
      value,
      next: null,
      prev: null,
    };
    // Addtion for Doubly LL
    this.head.prev = newNode;

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  };

  insert = (index, value) => {
    const newNode = {
      value,
      next: null,
      prev: null,
    };

    const beforeTarget = this.lookupToIndex(index - 1);
    const afterTarget = this.lookupToIndex(index + 1);
    newNode.next = afterTarget;
    newNode.prev = beforeTarget;
    beforeTarget.next = newNode;
    afterTarget.prev = newNode;
    console.log(this);
    return this;
  };

  lookupToIndex = (index) => {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  };

  printList = () => {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  };
}

const DLinkedList = new LinkedList(10);

DLinkedList.append(5);
DLinkedList.append(16);
DLinkedList.prepend(100);
DLinkedList.prepend(200);
DLinkedList.insert(1, 123);
// DLinkedList.insert(2, 1234);
console.log(DLinkedList);
console.log(DLinkedList.printList());
