var observable = Rx.Observable
	.create(function(observer) {
			// observer.next('Jerry');
			// observer.next('Anna');
			// observer.complete();
            // observer.next('not work');
            try {
                observer.next('Jerry');
                observer.next('Anna');
                throw 'some exception'
            } catch(e) {
                observer.error(e);
            }
	})
	
// 宣告一個觀察者，具備 next, error, complete 三個方法
var observer = {
	next: function(value) {
		console.log(value, 'next');
	},
	error: function(error) {
		console.log(error, 'error')
	},
	complete: function() {
		console.log('complete')
	}
}

// 用我們定義好的觀察者，來訂閱這個 observable	
observable.subscribe(observer)