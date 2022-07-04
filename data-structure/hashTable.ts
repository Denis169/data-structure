// Read about hash tables and its working mechanism and implement it functionality.
// NOTE: get acquainted with possible collisions when working with hash tables, take this information into account when implementing.
type Item = any;

type List = Array<[string, Item]>;

type Store = Array<List>;

class HashTable {
  private readonly store: Store;

  private readonly hashTableSize: number = 13;

  constructor(hashTableSize: number) {
    this.hashTableSize = hashTableSize;
    this.store = [];
  }

  add(key: string, value: Item) {
    const index: number = this.hash(key);

    if (!this.store[index]) {
      this.store[index] = [[key, value]];
    } else {
      const list: List = this.store[index];
      const matchingIndex: number | void = this.findMatchingIndex(list, key);

      if (matchingIndex) {
        list[matchingIndex] = [key, value];
        return;
      }

      list.push([key, value]);
    }
  }

  remove(key: string) {
    const index: number = this.hash(key);
    if (this.store[index]) {
      const list = this.store[index];
      const matchingIndex: number | void = this.findMatchingIndex(list, key);

      if (matchingIndex || matchingIndex === 0) {
        this.store[index] = [
          ...list.slice(0, matchingIndex),
          ...list.slice(matchingIndex + 1),
        ];
      }
    }
  }

  find(key: string) {
    const index = this.hash(key);
    if (this.store[index]) {
      const list = this.store[index];
      const matchingIndex: number | void = this.findMatchingIndex(list, key);
      if (matchingIndex || matchingIndex === 0) return list[matchingIndex];
    }
    return "No matches";
  }

  hash(value: string) {
    let index = 0;
    for (let i = 0; i < value.length; i += 1) {
      index += value.charCodeAt(i) * (i + 1);
    }
    return index % this.hashTableSize;
  }

  consoleStore() {
    return this.store;
  }

  findMatchingIndex(list: List, key: string): number | void {
    for (let i = 0; i < list.length; i += 1) {
      if (list[i][0] === key) return i;
    }
  }
}

const hashTable = new HashTable(13);
hashTable.add("One", () => console.log("Denis"));
hashTable.add("Two", "Artur");
hashTable.add("Three", "Masha");
hashTable.add("for", "Leo");
hashTable.add("rof", "Akkad");
console.log(hashTable.consoleStore());
hashTable.remove("rof");
console.log(hashTable.consoleStore());
console.log(hashTable.find("One"));
