export default class EventEmitter {
    static mapEvents = {}

    // 绑定事件
    static on(eventName, fn) {
        if (!this.mapEvents[eventName]) this.mapEvents[eventName] = []
        this.mapEvents[eventName].push(fn)
    }


    // 触发事件
    static emit(eventName, ...params) {
        if (this.mapEvents[eventName]) {
            for(let i in this.mapEvents[eventName]) {
                this.mapEvents[eventName][i].apply(null, params)
            }
        }
    }


    // 解绑事件组
    static off(eventName) {
        if (this.mapEvents[eventName]) this.mapEvents[eventName] = undefined
    }
}