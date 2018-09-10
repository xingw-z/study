import Global from './Global'
import EventEmitter from './EventEmitter'
import LoadScene from './LoadScene'
import GameScene from './GameScene'


export default class Game {

    loadScene = null
    gameScene = null
    

    constructor() {
        Laya.init(Global.WIDTH, Global.HEIGHT, Laya.WebGL)

        // 添加资源加载场景
        this.loadScene = new LoadScene()
        Laya.stage.addChild(this.loadScene)

        this.registerEvents()
    }


    // 注册事件
    registerEvents() {
        let canvas = document.getElementById('layaCanvas')
        canvas.addEventListener('touchstart', this.onHandleTouchStart.bind(this))
        canvas.addEventListener('touchend', this.onHandleTouchEnd.bind(this))
        window.addEventListener('resize',  this.onHandleReSize.bind(this))
    }


    // 资源加载完成，切换成主场景
    start() {//onHandleAssetsLoaded() {
        Laya.stage.removeChild(this.loadScene)
        this.loadScene = null

        this.gameScene = new GameScene()
        Laya.stage.addChild(this.gameScene)
    }


    // 事件分发：触摸开始
    onHandleTouchStart() {
        event.preventDefault()
        EventEmitter.emit('EventTouchStart')
    }


    // 事件分发：触摸结束
    onHandleTouchEnd() {
        event.preventDefault()
        EventEmitter.emit('EventTouchEnd')
    }


    // resize
    onHandleReSize() {
        EventEmitter.emit('EventResize')
    }
}