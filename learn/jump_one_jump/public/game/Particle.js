import EventEmitter from './EventEmitter' 


export default class Particle extends Laya.Sprite {

    name = 'Particle'

    arr = []
    currAmount = 0

    constructor() {
        super()
        this.zOrder = 3
        this.alpha = 0.6

        this.width = 200
        this.height = 200

        this.pivot(this.width/2, this.height)

        this.registerEvents()
    }


    // 创建粒子
    createCircleItem() {
        let cr = (Math.random()*3)+ 2
        let ra = Math.random() * Math.PI*2/3 + Math.PI/6
        let R = Math.random() * 100 + 100
        let speed = Math.random() * 250 + 150
        let color = ['#42ffd5', '#fff'][parseInt(Math.random()*2)]
        return {cr: cr, ra: ra, R: R, color: color, speed: speed}
    }


    // 注册事件
    registerEvents() {
        EventEmitter.on('EventUpdateEffect', this.onHandleUpdateParticle.bind(this))
        EventEmitter.on('EventShowEffect', this.onHandleShowParticle.bind(this))
        EventEmitter.on('EventHideEffect', this.onHandleShowParticle.bind(this))
    }


    // 更新粒子
    onHandleUpdateParticle(_vx, _vy, dt) {
        this.graphics.clear()
        
        if (Math.random() < 0.2) {
            this.arr.push(this.createCircleItem())
        }
        
        for (let i = this.arr.length - 1; i >= 0; i--) {
            let item = this.arr[i]
            item.R -= item.speed*dt
            if (item.R < 0) item.R = 0
            let x = item.R * Math.cos(item.ra)
            let y = item.R * Math.sin(item.ra)
            if (item.R <= 0) {
                this.arr.splice(i, 1)
            }
            this.graphics.drawCircle(x + 100,  200 - 30 - y, item.cr, item.color)
        }
    }


    // 显示蓄力粒子
    onHandleShowParticle(x, y) {
        this.x = x
        this.y = y
        this.visible = true
        this.arr = []
        this.currAmount = 0
    }

    
    // 隐藏蓄力粒子
    onHandleHideParticle() {
        this.visible = false
        this.arr = []
    }
}