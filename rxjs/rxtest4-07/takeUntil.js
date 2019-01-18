var source = Rx.Observable.interval(1000);
var click = Rx.Observable.fromEvent(document, 'click');
var example = source.takeUntil(click);

click.subscribe({
    next: value => { console.log(value, 'value') },
    error: err => { console.log(err, 'error') },
    complete: () => { console.log('complete') }
})