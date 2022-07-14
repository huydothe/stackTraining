export interface IStack<T> {
    push(item: T);
    pop():T;
    peek():T;
    size():number;
}