import { Item, NodeObject } from "./types";

class LinkedListNode implements NodeObject {
  value: Item;

  next: NodeObject | null;

  constructor(value: Item, next?: NodeObject | null) {
    this.value = value;
    this.next = next || null;
  }
}

export default LinkedListNode;
