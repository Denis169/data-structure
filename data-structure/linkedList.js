// eslint-disable-next-line max-classes-per-file
var LinkedListNode = /** @class */ (function () {
    function LinkedListNode(value, next) {
        this.value = value;
        this.next = next || null;
    }
    return LinkedListNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.tail = null;
    }
    LinkedList.prototype.insert = function (value) {
        var newNode = new LinkedListNode(value);
        if (!this.head || !this.tail) {
            this.head = newNode;
            this.tail = newNode;
            return this;
        }
        this.tail.next = newNode;
        this.tail = newNode;
        return this;
    };
    LinkedList.prototype.insertFirst = function (value) {
        var newNode = new LinkedListNode(value, this.head);
        this.head = newNode;
        if (!this.tail) {
            this.tail = newNode;
        }
        return this;
    };
    LinkedList.prototype.removeFirst = function () {
        if (!this.head) {
            return this;
        }
        if (this.head.next) {
            this.head = this.head.next;
        }
        else {
            this.head = null;
            this.tail = null;
        }
        return this;
    };
    LinkedList.prototype.removeAt = function (value) {
        if (!this.head) {
            return null;
        }
        while (this.head && this.head.value === value) {
            this.head = this.head.next;
        }
        var currentNode = this.head;
        if (currentNode !== null) {
            while (currentNode.next) {
                if (currentNode.next.value === value) {
                    currentNode.next = currentNode.next.next;
                }
                else {
                    currentNode = currentNode.next;
                }
            }
        }
        if (this.tail && this.tail.value === value) {
            this.tail = currentNode;
        }
        return this;
    };
    LinkedList.prototype.find = function (value) {
        if (!this.head) {
            return null;
        }
        var currentNode = this.head;
        while (currentNode) {
            if (value !== undefined && currentNode.value === value) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null;
    };
    LinkedList.prototype.clearDuplicates = function () {
        var _this = this;
        if (!this.head) {
            return null;
        }
        var currentNode = this.head;
        var arrayValue = [];
        if (currentNode !== null) {
            while (currentNode.next) {
                if (arrayValue.indexOf(currentNode.value) !== -1) {
                    arrayValue.push(currentNode.value);
                }
                currentNode = currentNode.next;
            }
            arrayValue.push(currentNode.value);
        }
        arrayValue.forEach(function (item) {
            var newNode = new LinkedListNode(item);
            if (!_this.head || !_this.tail) {
                _this.head = newNode;
                _this.tail = newNode;
            }
            _this.tail.next = newNode;
            _this.tail = newNode;
        });
        return this;
    };
    return LinkedList;
}());
var linkedList = new LinkedList();
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
