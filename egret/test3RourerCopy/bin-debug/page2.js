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
var modulePage2;
(function (modulePage2) {
    var classPage = (function (_super) {
        __extends(classPage, _super);
        function classPage() {
            var _this = _super.call(this) || this;
            _this.drawGrid();
            return _this;
        }
        classPage.prototype.drawGrid = function () {
            this.graphics.beginFill(0x00ff00);
            this.graphics.drawRect(0, 0, 50, 50);
            this.graphics.endFill();
            this.graphics.beginFill(0x00ff00);
            this.graphics.drawRect(50, 50, 50, 50);
            this.graphics.endFill();
            this.graphics.beginFill(0xff0000);
            this.graphics.drawRect(50, 0, 50, 50);
            this.graphics.endFill();
            this.graphics.beginFill(0xff0000);
            this.graphics.drawRect(0, 50, 50, 50);
            this.graphics.endFill();
        };
        return classPage;
    }(egret.Shape));
    modulePage2.classPage = classPage;
    __reflect(classPage.prototype, "modulePage2.classPage");
})(modulePage2 || (modulePage2 = {}));
