interface couterInstance{
    start: number;
}

interface Counter {
    (start: number): couterInstance;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) {
        console.log('start is ' + start)
        this.start = start;
    };
    counter.interval = 123;
    counter.reset = function () {console.log('do you want reset counter?')};
    return counter;
}

// let c = getCounter();
// c(10);
// c.reset();
// c.interval = 5.0;

// console.dir(c)
