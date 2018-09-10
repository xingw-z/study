import Global from './Global'
import ExtSprite from './ExtSprite'
import Resource from './Resource'
import StarSprite from './StarSprite'


const TYPE = {
    START: 1,
    CENTER: 2,
    END: 3
}

class BgManager {

    currAmount = 0
    arrBgs = []
    

    // 检查是否需要创建背景
    checkNeedCreate(sceneY) {
        let last = this.arrBgs[this.arrBgs.length - 1]
        let lastGlobalY = sceneY + last.y
        return lastGlobalY > 0
    }


    // 检查是否需要删除背景
    checkNeedRemove(sceneY) {
        let first = this.arrBgs[0]
        let firstGlobalY = sceneY + first.y
        return firstGlobalY > Global.HEIGHT
    }


    // 创建
    create() {
        this.currAmount++
        let bg = null
        if (this.currAmount == 1) {
            bg = new ExtSprite(0, Global.TOTAL_BG_HEIGHT - Global.MAP_BG_HEIGHT.BG1, Laya.loader.getRes(Resource.bg1))
            bg.type = TYPE.START
        } else {
            let last = this.arrBgs[this.arrBgs.length - 1]
            if (this.currAmount <= Global.CENTER_BG_AMOUNT + 1) {
                bg = new ExtSprite(0, 0, Laya.loader.getRes(Resource.bg2))
                bg.type = TYPE.CENTER
            } else {
                bg = new ExtSprite(0, 0, Laya.loader.getRes(Resource.bg3))
                bg.type = TYPE.END
            }
            bg.pos(0, last.y - bg.height)
        }
        // 创建背景装饰：云朵、山等
        this.createBgItems(bg)
        this.arrBgs.push(bg)
        return bg
    }


    // 移除背景
    remove() {
        let bg = this.arrBgs.shift()
        bg.removeSelf()
        bg = null
    }


    createBgItems(bg) {
        // 创建背景云层
        if (bg.type == TYPE.CENTER) {
            this.createBgCloud(bg)
        }

        // 创建山
        if (bg.type == TYPE.START) {
            this.createMountain(bg)
        }
        
        // 创建星星层
        if (bg.type != TYPE.START) {
            this.createStar(bg)
        }
    }


    // 创建背景云层，简单处理，y坐标直接平均
    createBgCloud(bg) {
        let amount = parseInt(Math.random()*2) + 1
        let bIsLeft = Math.random() <= 0.5
        let gap = (bg.height-Global.LOWEST_BG_CLOUD)/amount
        for (let i = 0; i < amount; i++) {
            bIsLeft = !bIsLeft

            let bgCloud = new ExtSprite(0, 0, Laya.loader.getRes(bIsLeft ? Resource.cloudLeft : Math.random() <= 0.5 ? Resource.cloudRight : Resource.cloudRight2))
            bgCloud.pos(bIsLeft ? 0 : Global.WIDTH - bgCloud.width, i*gap)

            bg.addChild(bgCloud)
        }
    }


    // 创建山，保证一左一右，简单处理，y坐标直接平均
    createMountain(bg) {
        let amount = parseInt(Math.random()*3) + 2
        let bIsLeft = Math.random() <= 0.5
        let gap = (bg.height-Global.LOWEST_MOUNTAIN)/amount
        for (let i = 0; i < amount; i++) {
            bIsLeft = !bIsLeft

            let mountain = new ExtSprite(0, 0, Laya.loader.getRes(bIsLeft ? Resource.mountainLeft : Resource.mountainRight))
            mountain.pos(bIsLeft ? 0 : Global.WIDTH - mountain.width, i*gap)

            bg.addChild(mountain)
        }
    }


    // 创建星空层
    createStar(bg) {
        let y = bg.type === TYPE.CENTER ? bg.height/2 : 0
        let star = new StarSprite(0, y)
        bg.addChild(star)
    }
}


export default new BgManager()