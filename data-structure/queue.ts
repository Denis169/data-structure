// Read about queue and learn its working mechanism and implement it functionality.
import { Item } from "./types";

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
