console.log(123)

if ('serviceWorker' in navigator) {
	window.addEventListener('load', () => {
		navigator.serviceWorker.register('/service-worker.js')
			.then(registration => {
				console.log(registration, 'service-worker registed');
			}).catch(error => {
				console.log(error, 'service-worker register error');
			})
	})
} else {
    console.log(321)
}