import Global from './Global'
import Resource from './Resource';
import ExtSprite from './ExtSprite';


export default class Meteor extends ExtSprite {

    name = 'Meteor'

    constructor(y) {
        super(Global.WIDTH, y, Laya.loader.getRes(Resource.meteor))
        this.zOrder = 0

        this.playFlyAction()
    }

    
    playFlyAction() {
        let x = Math.random()*Global.WIDTH/2

        let targetX = x - this.width
        let targetY = this.y + (Global.WIDTH - x)*this.height/this.width

        let time = 700*(Global.WIDTH - x)/Global.WIDTH + Math.random() * 600

        Laya.Tween.to(this, {
            x: targetX,
            y: targetY,
            scaleY: .8,
            scaleX: .8,
            alpha: 0
        }, time, null, Laya.Handler.create(this, this.onHandleRemove))
    }


    onHandleRemove() {
        this.removeSelf()
    }
}