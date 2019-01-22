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
    var indexContainer = (function (_super) {
        __extends(indexContainer, _super);
        /** 构造 */
        function indexContainer() {
            var _this = _super.call(this) || this;
            _this._lastTime = egret.getTimer();
            _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
            return _this;
        }
        /** 初始化 */
        indexContainer.prototype.onAddToStage = function (event) {
            this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
            this.createGameScene();
        };
        /** 创建游戏场景 */
        indexContainer.prototype.createGameScene = function () {
            var label = new egret.TextField();
            label.text = "index page";
            this.addChild(label);
            ;
        };
        return indexContainer;
    }(egret.DisplayObjectContainer));
    Page.indexContainer = indexContainer;
    __reflect(indexContainer.prototype, "Page.indexContainer");
})(Page || (Page = {}));
