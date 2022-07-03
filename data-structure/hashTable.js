// Read about hash tables and its working mechanism and implement it functionality.
// NOTE: get acquainted with possible collisions when working with hash tables, take this information into account when implementing.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var HashTable = /** @class */ (function () {
    function HashTable(size) {
        if (size === void 0) { size = 13; }
        this.size = size;
        this.store = [];
    }
    HashTable.prototype.add = function (key, value) {
        var index = this.hash(key);
        if (!this.store[index]) {
            this.store[index] = [[key, value]];
        }
        else {
            var list = this.store[index];
            var matchingIndex = HashTable.findMatchingIndex(list, key);
            if (matchingIndex) {
                list[matchingIndex] = [key, value];
                return;
            }
            list.push([key, value]);
        }
    };
    HashTable.prototype.remove = function (key) {
        var index = this.hash(key);
        if (this.store[index]) {
            var list = this.store[index];
            var matchingIndex = HashTable.findMatchingIndex(list, key);
            if (matchingIndex || matchingIndex === 0) {
                this.store[index] = __spreadArray(__spreadArray([], list.slice(0, matchingIndex), true), list.slice(matchingIndex + 1), true);
            }
        }
    };
    HashTable.prototype.find = function (key) {
        var index = this.hash(key);
        if (this.store[index]) {
            var list = this.store[index];
            var matchingIndex = HashTable.findMatchingIndex(list, key);
            console.log(matchingIndex);
            if (matchingIndex || matchingIndex === 0)
                return list[matchingIndex];
            return "No matches";
        }
    };
    HashTable.prototype.hash = function (value) {
        var index;
        index = 0;
        for (var i = 0; i < value.length; i += 1) {
            index += value.charCodeAt(i) * (i + 1);
        }
        return index % this.size;
    };
    HashTable.prototype.dump = function () {
        return this.store;
    };
    HashTable.findMatchingIndex = function (list, key) {
        for (var i = 0; i < list.length; i += 1) {
            if (list[i][0] === key)
                return i;
        }
        return undefined;
    };
    return HashTable;
}());
var hashTable = new HashTable();
hashTable.add("One", "Denis");
hashTable.add("Two", "Artur");
hashTable.add("Three", "Masha");
hashTable.add("for", "Leo");
hashTable.add("rof", "Akkad");
console.log(hashTable.dump());
hashTable.remove("rof");
console.log(hashTable.dump());
console.log(hashTable.find("One"));
