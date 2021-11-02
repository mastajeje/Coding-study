// Stack
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Building Stack with Linked List
// think of top as a head
class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek = () => this.top;

  push = (value) => {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
      this.length++;
      return this;
    }

    newNode.next = this.top;
    this.top = newNode;
    this.length++;
    return this;
  };

  pop = () => {
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    // pointerHolder is declared just in case we use poped value for any use
    // const pointerHolder = this.top;
    this.top = this.top.next;
    this.length--;
    return this;
  };

  isEmpty = () => (this.length ? false : true);
}

// Building stack with Arrays or Linked List has pros and cons

const myStack = new Stack();

console.log(myStack.push("google"));
console.log(myStack.push("Udemy"));
console.log(myStack.push("Discord"));
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());

// console.log(myStack.peek());
console.log(myStack.isEmpty());
