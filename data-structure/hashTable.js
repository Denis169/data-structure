"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var HashTable = /** @class */ (function () {
    function HashTable(hashTableSize) {
        this.hashTableSize = 13;
        this.hashTableSize = hashTableSize;
        this.store = [];
    }
    HashTable.prototype.add = function (key, value) {
        var index = this.hash(key);
        if (!this.store[index]) {
            this.store[index] = [[key, value]];
        }
        else {
            var list = this.store[index];
            var matchingIndex = this.findMatchingIndex(list, key);
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
            var matchingIndex = this.findMatchingIndex(list, key);
            if (matchingIndex || matchingIndex === 0) {
                this.store[index] = __spreadArray(__spreadArray([], list.slice(0, matchingIndex), true), list.slice(matchingIndex + 1), true);
            }
        }
    };
    HashTable.prototype.find = function (key) {
        var index = this.hash(key);
        if (this.store[index]) {
            var list = this.store[index];
            var matchingIndex = this.findMatchingIndex(list, key);
            if (matchingIndex || matchingIndex === 0)
                return list[matchingIndex];
        }
        return "No matches";
    };
    HashTable.prototype.hash = function (value) {
        var index = 0;
        for (var i = 0; i < value.length; i += 1) {
            index += value.charCodeAt(i) * (i + 1);
        }
        return index % this.hashTableSize;
    };
    HashTable.prototype.consoleStore = function () {
        return this.store;
    };
    HashTable.prototype.findMatchingIndex = function (list, key) {
        for (var i = 0; i < list.length; i += 1) {
            if (list[i][0] === key)
                return i;
        }
    };
    return HashTable;
}());
var hashTable = new HashTable(13);
hashTable.add("One", function () { return console.log("Denis"); });
hashTable.add("Two", "Artur");
hashTable.add("Three", "Masha");
hashTable.add("for", "Leo");
hashTable.add("rof", "Akkad");
console.log(hashTable.consoleStore());
hashTable.remove("rof");
console.log(hashTable.consoleStore());
console.log(hashTable.find("One"));
