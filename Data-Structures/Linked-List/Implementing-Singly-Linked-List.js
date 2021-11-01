// 10 --> 5 --> 16

// let myLinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 5,
//             next:{
//                 value:16,
//                 next:null
//             }
//         }
//     }
// }
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  // constructor is used to make initial outline
  constructor(value) {
    this.head = {
      value,
      next: null,
    };
    // referencing this.head
    this.tail = this.head;
    this.length = 1;
  }

  append = (value) => {
    const newNode = new Node(value);

    //at first it adds newNode to referenced this.head
    this.tail.next = newNode;
    // switch this.tail's reference from this.head => this.tail
    this.tail = newNode;
    this.length++;
    return this;
  };

  prepend = (value) => {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
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

  insert = (index, value) => {
    // check params
    if (index > this.length) {
      return this.append(value);
    }
    if (index === 0) {
      return this.prepend(value);
    }

    const newNode = new Node(value);
    const beforeTarget = this.lookUpToIndex(index - 1);
    const newNodePointer = beforeTarget.next;
    newNode.next = newNodePointer;
    beforeTarget.next = newNode;
    this.length++;
    return this.printList();
  };

  lookUpToIndex(index) {
    // check params
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  remove(index) {
    if (index > this.length) {
      return undefined;
    }
    if (index === 0) {
      this.head = this.head.next;
      this.length--;
      return this;
    }
    if (index === this.length - 1) {
      const newTail = this.lookUpToIndex(index - 1);
      this.tail = newTail;
      newTail.next = null;
      this.length--;
      return this;
    }
    const leader = this.lookUpToIndex(index - 1);
    // set leader(previous value from the target)'s pointer to one after target node
    leader.next = leader.next.next;
    this.length--;
    return this.printList();
  }

  reverse = () => {
    if (!this.head.next) {
      return this.head;
    }

    let first = this.head;
    this.tail = this.head;
    let second = first.next;

    while (second) {
      let temp = second.next;
      second.next = first;
      // next two steps are to move to next loop
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    return this;
  };
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.prepend(1);
myLinkedList.prepend(2);
// console.log(myLinkedList.insert(0, 20));
myLinkedList.insert(1, 200);
myLinkedList.insert(1, 20);

// console.log(myLinkedList.remove(3), myLinkedList, "b");
// console.log(myLinkedList.remove(2), myLinkedList, "b");
// myLinkedList.remove(0);
// myLinkedList.remove(1);

console.log(myLinkedList.printList());
myLinkedList.reverse();
console.log(myLinkedList.printList());
