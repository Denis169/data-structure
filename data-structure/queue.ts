// Read about queue and learn its working mechanism and implement it functionality.

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
type Item = string | number;

class Queue {
  queue: Item[];

  constructor() {
    this.queue = [];
  }

  enqueue(item: Item) {
    this.queue.unshift(item);
  }

  dequeue() {
    if (this.queue.length === 0) {
      throw Error("Stack is empty");
    }
    return this.queue.pop();
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}

const queue = new Queue();
