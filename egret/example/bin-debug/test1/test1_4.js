var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Example;
(function (Example) {
    /**
     * 显示对象和显示容器
     *      深度管理
     */
    var test1_4Container = (function (_super) {
        __extends(test1_4Container, _super);
        /** 构造 */
        function test1_4Container() {
            var _this = _super.call(this) || this;
            _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
            return _this;
        }
        /** 初始化 */
        test1_4Container.prototype.onAddToStage = function (event) {
            this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
            this.createGameScene();
        };
        /** 创建游戏场景 */
        test1_4Container.prototype.createGameScene = function () {
            // this.func1();
            // this.func2();
            // this.func3();
            this.func4();
        };
        /**
         * 深度顺序
         */
        test1_4Container.prototype.func1 = function () {
            var spr1 = new egret.Sprite();
            spr1.graphics.beginFill(0xff0000);
            spr1.graphics.drawRect(0, 0, 100, 100);
            spr1.graphics.endFill();
            this.addChild(spr1);
            var spr2 = new egret.Sprite();
            spr2.graphics.beginFill(0x00ff00);
            spr2.graphics.drawRect(0, 0, 80, 80);
            spr2.graphics.endFill();
            spr2.x = 50;
            spr2.y = 50;
            this.addChild(spr2);
        };
        /** 添加/删除指定深度的对象 */
        test1_4Container.prototype.func2 = function () {
            var sprcon = new egret.Sprite();
            this.addChild(sprcon);
            sprcon.x = 10;
            for (var i = 0; i < 4; i++) {
                var spr = new egret.Sprite();
                spr.graphics.beginFill(0xffffff * Math.random());
                spr.graphics.drawRect(0, 0, 100, 100);
                spr.graphics.endFill();
                spr.x = i * 20;
                sprcon.addChild(spr);
            }
            var sprNew = new egret.Sprite();
            sprNew.graphics.beginFill(0xff0000);
            sprNew.graphics.drawRect(0, 0, 300, 150);
            sprNew.graphics.endFill();
            sprNew.x = 10;
            sprNew.y = 50;
            sprcon.addChildAt(sprNew, 1);
            sprcon.removeChildAt(2);
            setTimeout(function () {
                sprcon.removeChildren();
            }, 1000);
        };
        /** 交换不同深度对象 */
        test1_4Container.prototype.func3 = function () {
            var sprcon = new egret.Sprite();
            this.addChild(sprcon);
            sprcon.x = 10;
            var spr1 = new egret.Sprite();
            spr1.graphics.beginFill(0xff0000);
            spr1.graphics.drawRect(0, 0, 100, 100);
            spr1.graphics.endFill();
            spr1.x = 50;
            sprcon.addChild(spr1);
            var spr2 = new egret.Sprite();
            spr2.graphics.beginFill(0x00ff00);
            spr2.graphics.drawRect(0, 0, 100, 100);
            spr2.graphics.endFill();
            spr2.x = 100;
            spr2.y = 50;
            sprcon.addChild(spr2);
            setTimeout(function () {
                // sprcon.swapChildren( spr1, spr2 );
                sprcon.swapChildrenAt(0, 1);
            }, 2000);
        };
        /** 重设子对象深度 */
        test1_4Container.prototype.func4 = function () {
            var sprcon = new egret.Sprite();
            this.addChild(sprcon);
            sprcon.x = 10;
            var spr1 = new egret.Sprite();
            spr1.graphics.beginFill(0xff0000);
            spr1.graphics.drawRect(0, 0, 100, 100);
            spr1.graphics.endFill();
            spr1.x = 50;
            sprcon.addChild(spr1);
            var spr2 = new egret.Sprite();
            spr2.graphics.beginFill(0x00ff00);
            spr2.graphics.drawRect(0, 0, 100, 100);
            spr2.graphics.endFill();
            spr2.x = 100;
            spr2.y = 50;
            sprcon.addChild(spr2);
            setTimeout(function () {
                sprcon.setChildIndex(spr1, 1);
                console.log(sprcon.getChildIndex(spr2));
            }, 2000);
        };
        return test1_4Container;
    }(egret.DisplayObjectContainer));
    Example.test1_4Container = test1_4Container;
    __reflect(test1_4Container.prototype, "Example.test1_4Container");
})(Example || (Example = {}));
