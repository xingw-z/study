export default class ExtSprite extends Laya.Sprite {

    constructor(x = 0, y = 0, res) {
        super()
        this.graphics.drawTexture(res, 0, 0)
        this.bounds = this.getBounds()
        
        this.width = this.bounds.width
        this.height = this.bounds.height
        
        this.pivot(0, 0)
        this.pos(x, y)
    }


    get rect() {
        return new Laya.Rectangle(this.x, this.y, this.width, this.height)
    }


    checkCollisionWith(other) {
        return this.rect.intersects(other.rect)
    }
}