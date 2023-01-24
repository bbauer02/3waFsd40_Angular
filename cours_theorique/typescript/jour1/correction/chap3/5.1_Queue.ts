class Queue<T> {
    private _elems: T[] = [];

    public push(elem: T) : void {
        this._elems.push(elem)
    }
    public pop(): T {
        return this._elems.shift();
    }

    get elem(): T[] { return this._elems;}
}


let queue = new Queue<number>();


queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
console.log(queue.pop()); // affiche 1




