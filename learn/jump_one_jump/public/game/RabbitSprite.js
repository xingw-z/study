import ExtSprite from './ExtSprite'
import Global from './Global'
import EventEmitter  from './EventEmitter'
import Resource from './Resource'


export default class RabbitSprite extends ExtSprite {

    name = 'RabbitSprite'

    currTouchTime = 0
    bIsTouching = false
    bIsInSky = true
    bIsFacingRight = true
    canTouch = false
    currStandCloud = null

    vy = 0
    vx = 0

    constructor(x, y) {
        super(x, y, Laya.loader.getRes(Resource.rabbit1))
        this.zOrder = 2
        this.pivot(this.width/2, this.height)

        this.registerEvents()
    }


    registerEvents() {
        EventEmitter.on('EventAjustDirection', this.onHandleAjustDirection.bind(this))
        EventEmitter.on('EventTouchStart', this.onHandleTouchStart.bind(this))
        EventEmitter.on('EventTouchEnd', this.onHandleTouchEnd.bind(this))
        EventEmitter.on('EventCloudNeedDestroy', this.onHandleCloudNeedDestroy.bind(this))
    }


    get rect() {
        return new Laya.Rectangle(this.x - this.width*0.4, this.y - 20, this.width*0.8, 20)
    }


    get bIsFall() {
        return this.vy > 0
    }

    fall() {
        this.bIsInSky = true
    }


    update(dt) {
        if (this.bIsInSky && !this.bIsTouching) {
            this.vy += Global.GAVITY * dt

            if (this.vy > Global.GAVITY) this.vy = Global.GAVITY
            this.y += this.vy * dt
            this.x += this.vx * dt
        }

        if (this.bIsTouching) {
            this.currTouchTime += dt
            if (this.currTouchTime > Global.MAX_TOUCH_TIME) this.currTouchTime = Global.MAX_TOUCH_TIME
            this.vy = -Global.MAX_RABBIT_VY * this.currTouchTime
            this.vx = Global.MAX_RABBIT_VX * this.currTouchTime * (this.bIsFacingRight ? 1 : -1)

            EventEmitter.emit('EventUpdateEffect', this.vx, this.vy, dt)
            
            // 这里存在耦合，这样处理比较方便，暂时这样处理
            let oldScaleY = this.currStandCloud.scaleY 
            let scaleY = (Global.MAX_TOUCH_TIME - this.currTouchTime*Global.MAX_CLOUD_SCALE)/Global.MAX_TOUCH_TIME
            this.currStandCloud.updateTouchEffect(scaleY)
            this.scaleY = scaleY

            let dy = (oldScaleY - scaleY)*this.currStandCloud.height
            this.y += dy*0.5
        }
    }


    resetStatus() {
        this.graphics.clear()
        this.graphics.drawTexture(Laya.loader.getRes(Resource.rabbit1), 0, 0)

        this.bIsInSky = false
        this.bIsTouching = false
        this.currTouchTime = 0
        this.vy = 0
        this.vx = 0
    }


    onHandleAjustDirection(bIsOnRight) {
        this.bIsFacingRight = bIsOnRight
        this.scaleX = this.bIsFacingRight ? 1 : -1
    }


    onHandleTouchStart() {
        if (!this.canTouch || this.bIsTouching || this.bIsInSky) return
        this.bIsTouching = true

        EventEmitter.emit('EventShowEffect', this.x, this.y)

        // 这里存在耦合，这样处理比较方便，暂时这样处理
        this.currStandCloud.startTouchEffect()
    }


    onHandleTouchEnd() {
        if (!this.canTouch || !this.bIsTouching || this.bIsInSky) return
        this.bIsTouching = false
        this.bIsInSky = true
        this.scaleY = 1

        this.graphics.clear()
        this.graphics.drawTexture(Laya.loader.getRes(Resource.rabbit2), 0, 0)
        
        EventEmitter.emit('EventHideEffect')

        // 这里存在耦合，这样处理比较方便，暂时这样处理
        this.currStandCloud.endTouchEffect()
    }


    onHandleCloudNeedDestroy(cloud) {
        if (this.currStandCloud == cloud) {
            if (!this.bIsInSky) {
                EventEmitter.emit('EventHideEffect')
                this.resetStatus()
                this.fall()
            }
        }
    }


    playWinAction() {
        EventEmitter.off('EventTouchStart')
        EventEmitter.off('EventTouchEnd')
        this.onHandleAjustDirection(true)
    }


    // 跳跃到云朵上的动画，这里存在耦合
    playLandedAction(vy) {
        this.canTouch = false
        this.playLandedAnimation(this, vy)
        this.playLandedAnimation(this.currStandCloud, vy)
    }
    

    // 播放抖动动画
    playLandedAnimation(target, vy) {
        let oy = target.y
        Laya.Tween.to(target, {
            y: target.y + vy/50
        }, 100, Laya.Ease.sineOut, Laya.Handler.create(this, () => {
            Laya.Tween.to(target, {
                y: oy
            }, 100, Laya.Ease.sineOut, Laya.Handler.create(this, () => {
                this.canTouch = true
            }))
        }))
    }
}