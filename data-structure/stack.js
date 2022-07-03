// Read about stack and learn its working mechanism and implement it functionality.
var Stack = /** @class */ (function () {
    function Stack() {
        this.stack = [];
    }
    Stack.prototype.push = function (item) {
        this.stack.push(item);
    };
    Stack.prototype.pop = function () {
        if (this.stack.length === 0) {
            throw Error("Stack is empty");
        }
        return this.stack.pop();
    };
    Stack.prototype.isEmpty = function () {
        return this.stack.length === 0;
    };
    return Stack;
}());
var stack = new Stack();
console.log(stack.push("one"));
console.log(stack.isEmpty());
console.log(stack.push("two"));
console.log(stack.pop());
