import ExtSprite from './ExtSprite'
import EventEmitter from './EventEmitter'
import Global from './Global'


export default class CloudSprite extends ExtSprite {

    name = 'CloudSprite'

    constructor(x, y, res) {
        super(x, y, res)
        this.pivot(0, this.height)
        this.zOrder = 1
        this.bIsTouch = false
        this.life = Global.LIFE_TIME
    }


    get rect() {
        if (this.bIsTouch) {
            return new Laya.Rectangle(this.x-this.width*0.4, this.y - this.height/2, this.width*0.8, 20)
        } else {
            return new Laya.Rectangle(this.x-this.width*0.4, this.y, this.width*0.8, 20)
        }
    }


    setXYProp(x, y) {
        this.pivot(this.width/2, this.height/2)
        this.pos(x + this.width/2, y-this.height/2)
    }


    playCreateAction() {
        Laya.Tween.from(this, {
            scaleX: 0,
            scaleY: 0
        }).to(this, {
            scaleX: 1,
            scaleY: 1,
        }, 800, Laya.Ease.backOut, Laya.Handler.create(this, this.onHandleCreated))
    }


    onHandleCreated() {
        Laya.timer.once(this.life - Global.FADE_TIME, this, this.onHandleStartFade)
    }


    onHandleStartFade() {
        Laya.Tween.to(this, {
            alpha: 0
        }, Global.FADE_TIME, null, Laya.Handler.create(this, this.onHandleDestroy))
    }


    onHandleDestroy() {
        EventEmitter.emit('EventCloudNeedDestroy', this)
    }


    // 开始挤压效果
    startTouchEffect() {
        this.bIsTouch = true

        this.pivot(this.width/2, this.height)
        this.pos(this.x, this.y + this.height/2)
    }


    // 云挤压状态
    updateTouchEffect(scaleY) {
        this.scaleY = scaleY
    }


    // 挤压结束
    endTouchEffect() {
        this.bIsTouch = false
        let time = 300*(1 - this.scaleY)/Global.MAX_CLOUD_SCALE

        Laya.Tween.from(this, {
            scaleY: this.scaleY
        }).to(this, {
            scaleY: 1,
        }, time, Laya.Ease.backInOut, Laya.Handler.create(this, () => {
            this.setXYProp(this.x-this.width/2, this.y)
        }))
    }
}