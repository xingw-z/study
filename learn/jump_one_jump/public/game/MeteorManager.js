import Global from './Global'
import Meteor from './Meteor'


class MeteorManager {

    scene = null

    installTo(scene) {
        this.scene = scene
        Laya.timer.loop(1000, this, this.onHandleRun)
    }


    onHandleRun() {
        if (Math.random() < 0.5) {
            this.createMeteor()
        }
    }


    createMeteor() {
        let viewY = -this.scene.y // 屏幕可视区域上边的Y坐标, 相对于当前场景，为正值
        let y = Math.random()*(Global.HEIGHT - 100) + viewY - 200;
        let meteor = new Meteor(y)
        this.scene.addChild(meteor)

    }
}


export default new MeteorManager()