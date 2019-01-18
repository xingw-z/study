// of
// var source = Rx.Observable.of('Jerry', 'Anna');

// from
// var arr = ['Jerry', 'Anna', 2016, 2017, '30 days'];
// var source = Rx.Observable.from(arr);
// fromPromise 也可以在这使用
// var source = Rx.Observable
//     .from(new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Hello RxJS!');
//         }, 3000)
//     }))

// fromEvent
// var source = Rx.Observable.fromEvent(document, 'click');

// empty
// var source = Rx.Observable.empty();

// never
// var source = Rx.Observable.never();

// throw
// var source = Rx.Observable.throw('Oop!');

// interval
// var source = Rx.Observable.interval(1000);

// timer
// 可传一个参数 或两个参数
var source = Rx.Observable.timer(1000);

source.subscribe({
    next: function (value) {
        console.log(value, 'next');
    },
    complete: function () {
        console.log('complete');
    },
    error: function (error) {
        console.log(error, 'error')
    }
})