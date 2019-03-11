function getCounter() {
    var counter = function (start) {
        console.log('start is ' + start);
        this.start = start;
    };
    counter.interval = 123;
    counter.reset = function () { console.log('do you want reset counter?'); };
    return counter;
}
// let c = getCounter();
// c(10);
// c.reset();
// c.interval = 5.0;
// console.dir(c)
