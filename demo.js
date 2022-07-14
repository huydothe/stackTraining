"use strict";
exports.__esModule = true;
var Stack = /** @class */ (function () {
    function Stack() {
        this.storage = [];
    }
    Stack.prototype.Storage = function () {
        return this.storage;
    };
    Stack.prototype.peek = function () {
        return this.storage[this.storage.length - 1];
    };
    Stack.prototype.pop = function () {
        return this.storage.pop();
    };
    Stack.prototype.push = function (item) {
        this.storage.push(item);
    };
    Stack.prototype.size = function () {
        return this.storage.length;
    };
    return Stack;
}());
var stack = new Stack();
stack.push(1);
stack.push(3);
stack.push(5);
stack.push(7);
console.log(stack.Storage());
stack.push(112);
console.log(stack.Storage());
stack.pop();
console.log(stack.Storage());
console.log(stack.size());
console.log(stack.peek());
