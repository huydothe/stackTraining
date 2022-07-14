import {IStack} from "./IStack";

class Stack<T> implements IStack<T> {
    storage : T[]=[];

    Storage(){
        return this.storage;
    }
    peek() {
        return this.storage[this.storage.length-1]
    }

    pop() {
        return this.storage.pop();
    }

    push(item:T) {
        this.storage.push(item);
    }

    size(): number {
        return this.storage.length;
    }
}

let stack = new Stack<number>();
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