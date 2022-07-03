// Read about stack and learn its working mechanism and implement it functionality.

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
type Item = string | number;

class Stack {
  stack: Item[];

  constructor() {
    this.stack = [];
  }

  push(item: Item) {
    this.stack.push(item);
  }

  pop() {
    if (this.stack.length === 0) {
      throw Error("Stack is empty");
    }
    return this.stack.pop();
  }

  isEmpty() {
    return this.stack.length === 0;
  }
}

const stack = new Stack();
stack.push("one");
console.log(stack.isEmpty());
stack.push("two");
console.log(stack.pop());
