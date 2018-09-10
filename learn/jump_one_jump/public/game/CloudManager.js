import CloudSprite from './CloudSprite'
import ExtSprite from './ExtSprite'
import EventEmitter from './EventEmitter'
import Global from './Global'
import Resource from './Resource'


class CloudManager {

    instance = null
    currAmount = 0
    bIsOnRight = true

    arrClouds = []
    averageGap = 0 // 云朵的平均间距


    constructor() {
        this.firstCloudY = Global.TOTAL_BG_HEIGHT - Global.FIRST_CLOUD_MARGIN_BOTTOM
        this.lastCloudY = Global.LAST_CLOUD_MARGIN_TOP
        this.averageGap = (Global.TOTAL_BG_HEIGHT - Global.FIRST_CLOUD_MARGIN_BOTTOM - Global.LAST_CLOUD_MARGIN_TOP)/(Global.CLOUD_AMOUNT-1)

        this.registerEvents()
    }


    registerEvents() {
        EventEmitter.on('EventCloudNeedDestroy', this.onHandleCloudNeedDestroy.bind(this))
    }


    // 因云朵是按事件顺序进入数组的，每次移除时必为数组中第一个，即场景中最底下的那朵云
    onHandleCloudNeedDestroy() {
        this.remove()
    }


    // 获取当前最底下的一朵云
    first() {
        return this.arrClouds[0]
    }


    // 生成云朵
    create() {
        this.currAmount++   // 云朵数量+1
        this.bIsOnRight = !this.bIsOnRight  // 生成的云朵在左边还是右边
        EventEmitter.emit('EventAjustDirection', this.bIsOnRight)
        
        // 生成云朵
        let index = Math.ceil(Math.random()*4)
        let res = Laya.loader.getRes(Resource['cloud' + index])
        let cloud = new CloudSprite(0, 0, res)
        this.arrClouds.push(cloud)
        
        // 计算云朵的坐标
        let x = (this.bIsOnRight ? Global.WIDTH/2 : 0) + parseInt(Math.random()*(Global.WIDTH/2 - cloud.width))
        let y = 0
        if (this.currAmount == 1) {
            y = this.firstCloudY
        } else if (this.currAmount == Global.CLOUD_AMOUNT) {
            y = this.lastCloudY
            cloud.life = Number.MAX_SAFE_INTEGER  // 如果是最后一朵云，将其生命置为最大值，不让其消失
        } else {
             // 相对于平均坐标点的偏移量，使云朵的分布有随机感
             // 云朵y坐标的计算方法：
             // 1. 第一朵和最后一朵的y坐标是人为控制的，因为最后一朵需要相对月亮在某个坐标点，这个坐标点的y是固定的
             // 2. 求取云朵的平均间隔
             // 3. 生成中间的云朵时，为这个y坐标随机一个偏移量，保证一定的随机性
            let offsetY = (Math.random() < 0.5 ? -1 : 1)*Math.random()*0.3*this.averageGap
            y = this.firstCloudY - (this.currAmount-1)*this.averageGap + offsetY
        }

        cloud.setXYProp(x, y)
        cloud.playCreateAction()
        
        return cloud
    }


    // 移除云朵
    remove() {
        let cloud = this.arrClouds.shift()
        cloud.removeSelf()
        cloud = null
    }


    // 碰撞检测函数
    // 首次进入场景时，会有两朵云，这里就拿最后两朵来进行碰撞检测，只有跳跃到最新的一朵才是跳跃成功，其索引为 i == 1
    checkCollisionWith(sprite, fn) {
        for (let i = 0; i < 2; i++) {
            let cloud = this.arrClouds[this.arrClouds.length - 2 + i]
            if (cloud && cloud.checkCollisionWith(sprite)) {
                fn && fn(true, i == 1, cloud)   // 第一个参数，表示成功碰撞，第二个参数表示，跳跃到了最新的一朵云
                return
            }
        }
        fn && fn(false)
    }


    // 创建小云朵
    createEffectCloud(rabbit, vy) {
        let container = new Laya.Sprite()
        container.width = rabbit.width
        container.height = rabbit.height
        container.x = rabbit.x
        container.y = rabbit.y

        let amount = parseInt(vy/300);
        let bIsLeft = false
        for (let i = 0; i < amount; i++) {
            bIsLeft = !bIsLeft
            let x = (bIsLeft ? -1 : 1) * (rabbit.width*2/amount*i)
            let effectCloud = new ExtSprite(x, 0, Laya.loader.getRes(Resource['cloud' + (5+parseInt(Math.random()*2))]))
            this.playEffectAnimation(container, effectCloud, vy, bIsLeft)
            container.addChild(effectCloud)
        }

        return container
    }


    // 播放小云朵特效动画
    playEffectAnimation(container, cloud, vy, bIsLeft) {
        // vy 以 1000为基准
        let r = vy/1000
        let bIsHOver = false    // 水平方向动画是否结束
        let bIsVOver = false    // 垂直方向动画是否结束
        Laya.Tween.to(cloud, {
            x: r*200*(bIsLeft ? -1 : 1) + cloud.x,
            alpha: 0,
        }, r*1000, Laya.Ease.sineOut, Laya.Handler.create(this, () => {
            bIsHOver = true
            if (bIsHOver && bIsVOver) container.removeSelf()
        }))


        Laya.Tween.to(cloud, {
            y: cloud.y - r*70,
        }, r*250, Laya.Ease.sineOut, Laya.Handler.create(this, () => {
            Laya.Tween.to(cloud, {
                y: cloud.y + r*100
            }, r*750, Laya.Ease.sineOut, Laya.Handler.create(this, () => {
                bIsVOver = true
                if (bIsHOver && bIsVOver) container.removeSelf()
            }))
        }))
    }
}


export default new CloudManager()