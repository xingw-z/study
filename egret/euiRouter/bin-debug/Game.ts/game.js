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
var Page;
(function (Page) {
    /**
     * 页面容器
     */
    var gameContainer = (function (_super) {
        __extends(gameContainer, _super);
        /** 构造 */
        function gameContainer() {
            var _this = _super.call(this) || this;
            _this._lastTime = egret.getTimer();
            _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
            return _this;
        }
        /** 初始化 */
        gameContainer.prototype.onAddToStage = function (event) {
            this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
            this.createGameScene();
        };
        /** 创建游戏场景 */
        gameContainer.prototype.createGameScene = function () {
            var label = new egret.TextField();
            label.text = "game page";
            this.addChild(label);
            ;
        };
        return gameContainer;
    }(egret.DisplayObjectContainer));
    Page.gameContainer = gameContainer;
    __reflect(gameContainer.prototype, "Page.gameContainer");
})(Page || (Page = {}));
