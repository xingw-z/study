import EventEmitter from './EventEmitter'
import Resource from './Resource'
import ExtSprite from './ExtSprite'


export default class LoadScene extends ExtSprite {

    name = 'LoadScene'

    constructor() {
        super()
        this.loadAssets()
    }


    // 加载资源
    loadAssets() {
        let res = [
            Resource.bg1, Resource.bg2, Resource.bg3,
            Resource.cloud1, Resource.cloud2, Resource.cloud3,
            Resource.cloud4, Resource.cloud5, Resource.cloud6, 
            Resource.cloudLeft, Resource.cloudRight, Resource.cloudRight2,
            Resource.mountainLeft, Resource.mountainRight,
            Resource.meteor, Resource.star,
            Resource.rabbit1, Resource.rabbit2
        ]
        Laya.loader.load(res, 
            Laya.Handler.create(this, this.onHandleAssetsLoaded), 
            Laya.Handler.create(this, this.onHandleProgress, null, false))
    }


    // 资源加载进度
    onHandleProgress(data) {
        EventEmitter.emit('EventAssetsProgress', data)
    }


    // 资源加载完成
    onHandleAssetsLoaded() {
        EventEmitter.emit('EventAssetsLoaded')
    }

}