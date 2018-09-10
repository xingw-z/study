import Resource from './Resource';
import ExtSprite from './ExtSprite';


export default class StarSprite extends ExtSprite {

    name = 'StarSprite'

    constructor(x, y) {
        super(x, y, Laya.loader.getRes(Resource.star))

        this.actionTwinkleShow()
    }

    actionTwinkleShow() {
        Laya.Tween.to(this, {
            alpha: 1
        }, 1000, null, Laya.Handler.create(this, this.actionTwinkleHide))
    }


    actionTwinkleHide() {
        Laya.Tween.to(this, {
            alpha: .1
        }, 1000, null, Laya.Handler.create(this, this.actionTwinkleShow))
    }
}