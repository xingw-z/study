import Global from './Global'

export default class ScoreBoard extends Laya.Text {

    name = 'ScoreBoard'

    constructor() {
        super()
        this.text = -1
        this.align = 'center'
        this.valign = 'middle'
        this.fontSize = 110
        this.color = '#fff'
        // this.bold = true
        this.width = 100
        this.height = 100
        this.pos(this.width/2 + 10, this.height/2 + 100)
        this.pivot(this.width/2, this.height/2)
        this.zOrder = 4

        this.increase()
    }


    increase() {
        this.text = ~~this.text + 1
        if (this.text > Global.MAX_SCORE) this.text = Global.MAX_SCORE

        Laya.Tween.from(this, {
            scaleX: 0,
            scaleY: 0
        }).to(this, {
            scaleX: 1,
            scaleY: 1,
        }, 600, Laya.Ease.backOut)
    }
}