// 迭代器模式

// 创建iterator
// var arr = [1, 2, 3]
// var iterator = arr[Symbol.iterator]();
// while (true) {
//     const _element = iterator.next();
//         console.log(_element)
//     if (_element && _element.done) {
//         break;
//     }
// }

class IteratorFromArray {
    constructor(arr) {
        this._array = arr;
        this._cursor = 0;
    }
    next() {
        return this._cursor < this._array.length ?
        { value: this._array[this._cursor++], done: false } :
        { value: undefined, done: true };
    }
    map(callback) {
        const iterator = new IteratorFromArray(this._array);
        return {
            next: () => {
                const { done, value } = iterator.next();
                return {
                    done: done,
                    value: done ? undefined : callback(value)
                }
            }
        }
    }
}

// var iterator = new IteratorFromArray([1,2,3]);
// var newIterator = iterator.map(value => value + 3);

// console.log(newIterator.next());
// console.log(newIterator.next());
// console.log(newIterator.next());
// console.log(newIterator.next());

function* getNumbers(words) {
    for (const iterator of words) {
        if (/^[0-9]+$/.test(iterator)) {
            yield parseInt(iterator, 10);
        }
    }
}

const iterator = getNumbers('30 天精通 RxJS (04)')

// console.log(iterator)
iteratorLoop(iterator);

function iteratorLoop(iterator) {
    while(true) {
        const _element = iterator.next();
        console.log(_element);
        if (_element.done) {
            break;
        }
    }
}