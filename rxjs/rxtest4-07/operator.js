var source = Rx.Observable.interval(1000);
var newest = source.map(x => x + 2);

