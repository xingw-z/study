/** 假如我們想要監聽點擊事件(click event)，但點擊一次之後不再監聽。  并且输出 e */
Rx.Observable
    .fromEvent(document, 'click')
    .take(1)
    .subscribe((e) => {
        console.log(e)
    });