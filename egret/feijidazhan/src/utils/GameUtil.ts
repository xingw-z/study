module feiji {
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    export function createBitmapByName(name: string): egret.Bitmap {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
    export class GameUitl {
        /** 基于矩形的碰撞检测 */
        public static hitTest(obj1 :egret.DisplayObject, obj2 :egret.DisplayObject) :boolean {
            let rect1 :egret.Rectangle = obj1.getBounds();
            let rect2 :egret.Rectangle = obj2.getBounds();
            rect1.x = obj1.x;
            rect1.y = obj1.y;
            rect2.x = obj2.x;
            rect2.y = obj2.y;
            console.log(obj1, obj2);
            return rect1.intersects(rect2);
        }
    }
}