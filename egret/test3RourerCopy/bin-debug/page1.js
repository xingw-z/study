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
var modulePage1;
(function (modulePage1) {
    var classPage = (function (_super) {
        __extends(classPage, _super);
        function classPage() {
            var _this = _super.call(this) || this;
            _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
            return _this;
        }
        classPage.prototype.onAddToStage = function (event) {
            var _com1 = new component1();
            this.addChild(_com1);
        };
        return classPage;
    }(egret.DisplayObjectContainer));
    modulePage1.classPage = classPage;
    __reflect(classPage.prototype, "modulePage1.classPage");
    var component1 = (function (_super) {
        __extends(component1, _super);
        function component1() {
            var _this = _super.call(this) || this;
            _this.drawGrid();
            return _this;
        }
        component1.prototype.drawGrid = function () {
            this.graphics.beginFill(0x0000ff);
            this.graphics.drawRect(0, 0, 50, 50);
            this.graphics.endFill();
            this.graphics.beginFill(0x0000ff);
            this.graphics.drawRect(50, 50, 50, 50);
            this.graphics.endFill();
            this.graphics.beginFill(0xff0000);
            this.graphics.drawRect(50, 0, 50, 50);
            this.graphics.endFill();
            this.graphics.beginFill(0xff0000);
            this.graphics.drawRect(0, 50, 50, 50);
            this.graphics.endFill();
        };
        return component1;
    }(egret.Shape));
    __reflect(component1.prototype, "component1");
})(modulePage1 || (modulePage1 = {}));
