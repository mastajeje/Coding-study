// Stack

// Building Stack with Array
class Stack {
  constructor() {
    this.array = [];
  }

  peek = () => this.array[this.array.length - 1];

  push = (value) => {
    this.array.push(value);
    return this;
  };

  pop = () => {
    this.array.pop();
    return this;
  };

  isEmpty = () => (this.array.length ? false : true);
}

// Building stack with Arrays or Linked List has pros and cons

const myStack = new Stack();

console.log(myStack.push("google"));
console.log(myStack.push("Udemy"));
console.log(myStack.push("Discord"));
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.peek());

// console.log(myStack.peek());
console.log(myStack.isEmpty());
