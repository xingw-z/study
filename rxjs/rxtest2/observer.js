// 观察者模式
class Obs {
    constructor() {
        // super();
        this.eventList = [];
    }
    addEvent(name, func) {
        if (typeof name !== 'string') {
            throw new Error('事件名字必是字符串')
        } else if (typeof func !== 'function') {
            throw new Error('事件函数不是函数')
        } else {
            this.eventList.push({name, func})
        }
    }
    removeEvent(name, func) {
        if (typeof name !== 'string') {
            throw new Error('事件名字必是字符串')
        } else {
            this.eventList = [...this.eventList.filter(item => {
                return item.name !== name || item.func !== func
            })]
        }
    }
    onEvent(name) {
        this.eventList.forEach(element => {
            if (name === element.name) {
                element.func();
            }
            return element;
        });
    }
}