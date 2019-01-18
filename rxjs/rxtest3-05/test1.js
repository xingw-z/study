var observable = Rx.Observable
	.create(function(observer) {
		observer.next('Jerry'); // RxJS 4.x 以前的版本用 onNext
		observer.next('Anna');
	})
console.log(observable)
// 訂閱這個 observable	
observable.subscribe(function(value) {
	console.log(value);
})

