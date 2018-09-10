import EventEmitter from './EventEmitter' 
import Global from './Global'


export default class GuideLine extends Laya.Sprite {

    name = 'GuideLine'

    constructor() {
        super()
        this.zOrder = 3
        this.scaleX = -1
        this.alpha = 0.6

        this.bNeedDraw = false

        this.registerEvents()
    }


    registerEvents() {
        EventEmitter.on('EventUpdateEffect', this.onHandleUpdateGuideLine.bind(this))
        EventEmitter.on('EventShowEffect', this.onHandleShowGuideLine.bind(this))
        EventEmitter.on('EventHideEffect', this.onHandleHideGuideLine.bind(this))
        EventEmitter.on('EventCheat', this.onHandleCheat.bind(this))
    }

    onHandleCheat(bIsCheat) {
        this.bNeedDraw = bIsCheat
    }


    onHandleUpdateGuideLine(vx, vy) {
        this.graphics.clear()
        if (!this.bNeedDraw) return

        let last = null
        let dx = 2*vx*vy/Global.GAVITY
        let gx = dx / 100
        let counter = 0
        let lineWidth = 1
        for (let i = 0; i < 100; i++) {
            if (Math.abs(i*gx) > 0) {
                let tt = i*gx/vx
                let point = [i*gx, -vy*tt + 0.5*Global.GAVITY*tt*tt]
                if (!last) {
                    last = point
                } else {
                    counter++
                    if (counter < 10) if (++lineWidth > 4) lineWidth = 4
                    if (counter > 50) if (--lineWidth < 1) lineWidth = 1
                    if (counter % 2 == 1) this.graphics.drawLine(last[0], last[1], point[0], point[1], '#fff', lineWidth)
                    last = [point[0], point[1]]
                }
            } 
        }
    }


    onHandleShowGuideLine(x, y) {
        this.x = x
        this.y = y
        this.visible = true
    }

    
    onHandleHideGuideLine() {
        this.visible = false
    }
}