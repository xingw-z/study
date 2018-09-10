import Global from './Global'
import ExtSprite from './ExtSprite'
import ScoreBoard  from './ScoreBoard'
import RabbitSprite from './RabbitSprite'
import BgManager from './BgManager'
import CloudManager from './CloudManager'
import GuideLine from './GuideLine'
import Particle from './Particle'
import MeteorManager from './MeteorManager'
import EventEmitter from './EventEmitter'

export default class GameScene extends ExtSprite {
    
    name = 'GameScene'

    rabbit = null
    scoreBoard = null
    guideLine = null


    constructor() {
        super()
        this.initScene()
        this.registerEvents()
    }
    
    
    initScene() {
        this.pos(0, Global.HEIGHT - Global.TOTAL_BG_HEIGHT)

        // 添加流星管理器
        MeteorManager.installTo(this)

        // 添加分数面板
        this.scoreBoard = new ScoreBoard()
        Laya.stage.addChild(this.scoreBoard)

        // 添加引导线
        this.guideLine = new GuideLine()
        this.addChild(this.guideLine)

        // 添加粒子
        this.particle = new Particle()
        this.addChild(this.particle)

        // 添加背景
        this.addChild(BgManager.create())

        // 添加云朵
        this.addChild(CloudManager.create())
        Laya.timer.once(500, this, () => this.addChild(CloudManager.create()))


        // 添加兔子
        Laya.timer.once(1000, this, () => {
            let cloud = CloudManager.first()
            this.rabbit = new RabbitSprite(cloud.x, cloud.y - 200)
            this.addChild(this.rabbit)
        })

        // 事件循环，每帧调用
        Laya.timer.frameLoop(1, this, this.onHandleFrameLoop)
    }


    registerEvents() {
        EventEmitter.on('EventResize', this.onHandleResize.bind(this))
    }


    onHandleResize() {
        let oldHeight = Laya.stage.height
        Global.HEIGHT = window.innerHeight*Global.RATIO
        Laya.stage.height = Global.HEIGHT

        document.getElementById('layaCanvas').height = window.innerHeight
        
        let dh = Global.HEIGHT - oldHeight
        Laya.stage.y += dh
        Laya.stage.repaint()
    }


    onHandleFrameLoop() {
        if (BgManager.checkNeedRemove(this.y)) BgManager.remove()
        if (BgManager.checkNeedCreate(this.y)) this.addChild(BgManager.create())
        
        if (this.rabbit) {
            let dt = Laya.timer.delta / 1000
            this.rabbit.update(dt)
            if (this.rabbit.bIsInSky && this.rabbit.bIsFall) {
                CloudManager.checkCollisionWith(this.rabbit, (bIsCollide, bIsSuccess, cloud) => {
                    if (bIsCollide) {
                        let vy = this.rabbit.vy
                        // 如果落点不是当前的云朵，则添加小云朵效果
                        if (this.rabbit.currStandCloud != cloud) {
                            this.addChild(CloudManager.createEffectCloud(this.rabbit, vy))
                        }

                        this.rabbit.y = cloud.y
                        this.rabbit.currStandCloud = cloud
                        this.rabbit.playLandedAction(vy)
                        this.rabbit.resetStatus()
                        if (bIsSuccess) {
                            this.scoreBoard.increase()
                            this.follow()
                            if (this.scoreBoard.text == Global.MAX_SCORE) {
                                this.rabbit.playWinAction()
                                EventEmitter.emit('EventGameWin', this.scoreBoard.text)
                            } else {
                                this.addChild(CloudManager.create())
                            }
                        }
                    }
                })
            }
            if (this.checkGameOver()) {
                Laya.timer.clear(this, this.onHandleFrameLoop)
                Laya.timer.once(500, this, () => {
                    EventEmitter.emit('EventGameOver', this.scoreBoard.text)
                })
            }
        }
    }


    // 照相机跟随，保证兔子总是在底部0.4个屏幕高度的位置
    follow() {
        let minY = Global.HEIGHT - Global.TOTAL_BG_HEIGHT
        let targetGlobalY = this.y + this.rabbit.y
        let dy = Global.HEIGHT * 0.6 - targetGlobalY
        let targetY = this.y + dy
        Laya.Tween.to(this, {
            y: targetY > 0 ? 0 : (targetY < minY ? minY : targetY)
        }, Math.abs(dy) * 5, Laya.Ease.strongOut)
    }


    // 检查游戏是否结束
    checkGameOver() {
        return this.rabbit.x + this.rabbit.width/2 < 0 || this.rabbit.x - this.rabbit.width/2 > Global.WIDTH || this.rabbit.y - this.rabbit.height + this.y > Global.HEIGHT
    }
}