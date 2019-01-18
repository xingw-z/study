var _ele = document.querySelector('#drag');
var mousedown = Rx.Observable.fromEvent(_ele, 'mousedown').take(1);


var mousemove = Rx.Observable.fromEvent(_ele, 'mousemove');


var mouseup = Rx.Observable.fromEvent(_ele, 'mouseup');


var source = Rx.Observable.of(mousedown, mousemove, mouseup);
var example = source.concatAll();

example.subscribe({
    next: (value) => { console.log(value, 'value'); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});