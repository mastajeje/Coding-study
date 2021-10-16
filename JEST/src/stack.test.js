// create Stack without using array
class Stack {
  constructor() {
    this.top = -1;
    this.items = {};
  }
  get peek() {
    return this.items[this.top];
  }
  push(value) {
    this.top += 1;
    this.items[this.top] = value;
  }

  pop() {
    if (this.top === -1) {
      return null;
    }
    // this.top -= 1;
    delete this.items[this.top];
    this.top -= 1;
  }
}

describe("My Stack", () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  });

  it("is created empty", () => {
    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({});
  });

  it("can push to the top", () => {
    stack.push("🥞");
    expect(stack.top).toBe(0);
    expect(stack.peek).toBe("🥞");
  });

  it("can pop off", () => {
    stack.items = { 0: "🥞" };
    stack.top = 0;
    stack.pop();
    expect(stack.top).toEqual(-1);
    expect(stack.items).toEqual({});
  });
});
