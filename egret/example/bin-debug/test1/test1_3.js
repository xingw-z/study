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
     *      添加与删除显示对象
     */
    var test1_3Container = (function (_super) {
        __extends(test1_3Container, _super);
        /** 构造 */
        function test1_3Container() {
            var _this = _super.call(this) || this;
            _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
            return _this;
        }
        /** 初始化 */
        test1_3Container.prototype.onAddToStage = function (event) {
            this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
            this.createGameScene();
        };
        /** 创建游戏场景 */
        test1_3Container.prototype.createGameScene = function () {
            // this.func1();
            this.func2();
        };
        test1_3Container.prototype.func1 = function () {
            var _this = this;
            var spr = new egret.Sprite();
            spr.graphics.beginFill(0x00ff00);
            spr.graphics.drawRect(0, 0, 100, 100);
            spr.graphics.endFill();
            this.addChild(spr);
            spr.touchEnabled = true;
            spr.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                _this.removeChild(spr);
            }, this);
        };
        test1_3Container.prototype.func2 = function () {
            var _this = this;
            var sprcon1 = new egret.Sprite();
            sprcon1.graphics.beginFill(0x00ff00);
            sprcon1.graphics.drawRect(0, 0, 100, 100);
            sprcon1.graphics.endFill();
            this.addChild(sprcon1);
            sprcon1.x = 120;
            var sprcon2 = new egret.Sprite();
            sprcon2.graphics.beginFill(0xff0000);
            sprcon2.graphics.drawRect(0, 0, 100, 100);
            sprcon2.graphics.endFill();
            this.addChild(sprcon2);
            sprcon2.y = 130;
            var spr = new egret.Sprite();
            spr.graphics.beginFill(0x0000ff);
            spr.graphics.drawRect(0, 0, 50, 50);
            spr.graphics.endFill();
            spr.x = 10;
            spr.y = 10;
            this.addChild(spr);
            var that = this;
            // bindEvent(sprcon1);
            // bindEvent(sprcon2);
            this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                if (spr.parent) {
                    spr.parent.removeChild(spr);
                }
                else {
                    _this.addChild(spr);
                }
            }, this);
            function bindEvent(s) {
                s.touchEnabled = true;
                s.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                    s.addChild(spr);
                }, that);
            }
        };
        return test1_3Container;
    }(egret.DisplayObjectContainer));
    Example.test1_3Container = test1_3Container;
    __reflect(test1_3Container.prototype, "Example.test1_3Container");
})(Example || (Example = {}));
