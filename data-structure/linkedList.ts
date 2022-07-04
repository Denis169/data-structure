import { Item, NodeObject } from "./types";
import LinkedListNode from "./linkedListNode";

class LinkedList {
  head: NodeObject | null;

  tail: NodeObject | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  insert(value: Item) {
    const newNode = new LinkedListNode(value);

    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    this.tail.next = newNode;
    this.tail = newNode;

    return this;
  }

  insertFirst(value: Item) {
    const newNode = new LinkedListNode(value, this.head);

    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }

    return this;
  }

  removeFirst() {
    if (!this.head) {
      return this;
    }

    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }

    return this;
  }

  removeAt(value: Item) {
    if (!this.head) {
      return null;
    }

    while (this.head && this.head.value === value) {
      this.head = this.head.next as NodeObject;
    }

    let currentNode = this.head;

    if (currentNode !== null) {
      while (currentNode.next) {
        if ((currentNode.next as NodeObject).value === value) {
          currentNode.next = (currentNode.next as NodeObject).next;
        } else {
          currentNode = currentNode.next as NodeObject;
        }
      }
    }

    if (this.tail && this.tail.value === value) {
      this.tail = currentNode;
    }

    return this;
  }

  find(value: Item) {
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;

    while (currentNode) {
      if (value !== undefined && currentNode.value === value) {
        return currentNode;
      }

      currentNode = currentNode.next as NodeObject;
    }

    return null;
  }

  clearDuplicates() {
    if (!this.head) {
      return null;
    }

    let currentNode: NodeObject = this.head;
    const arrayValue: Item[] = [];

    if (currentNode !== null) {
      while (currentNode.next) {
        if (arrayValue.indexOf(currentNode.value) !== -1) {
          arrayValue.push(currentNode.value);
        }
        currentNode = currentNode.next as NodeObject;
      }
      arrayValue.push(currentNode.value);
    }

    arrayValue.forEach((item) => {
      const newNode = new LinkedListNode(item);

      if (!this.head || !this.tail) {
        this.head = newNode;
        this.tail = newNode;
      }

      this.tail.next = newNode;
      this.tail = newNode;
    });

    return this;
  }
}

const linkedList = new LinkedList();
linkedList.insert("Denis");
linkedList.insert("Sergei");
linkedList.insert("Igor");
linkedList.insertFirst("Alisa");
linkedList.removeFirst();
linkedList.removeAt("Igor");
linkedList.find("Denis");
linkedList.insert("Sergei");
linkedList.insert("Sergei");
linkedList.clearDuplicates();
console.log(linkedList);
