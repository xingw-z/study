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
     *      基本概念
     */
    var test1_1Container = (function (_super) {
        __extends(test1_1Container, _super);
        /** 构造 */
        function test1_1Container() {
            var _this = _super.call(this) || this;
            _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
            return _this;
        }
        /** 初始化 */
        test1_1Container.prototype.onAddToStage = function (event) {
            this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
            this.createGameScene();
        };
        /** 创建游戏场景 */
        test1_1Container.prototype.createGameScene = function () {
            var shape = new egret.Shape();
            shape.graphics.beginFill(0x0000ff);
            shape.graphics.drawRect(0, 0, 50, 50);
            shape.graphics.endFill();
            this.addChild(shape);
        };
        return test1_1Container;
    }(egret.DisplayObjectContainer));
    Example.test1_1Container = test1_1Container;
    __reflect(test1_1Container.prototype, "Example.test1_1Container");
    var MyGrid = (function (_super) {
        __extends(MyGrid, _super);
        function MyGrid() {
            var _this = _super.call(this) || this;
            _this.drawGrid();
            return _this;
        }
        MyGrid.prototype.drawGrid = function () {
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
        return MyGrid;
    }(egret.Shape));
    Example.MyGrid = MyGrid;
    __reflect(MyGrid.prototype, "Example.MyGrid");
    var GridSprite = (function (_super) {
        __extends(GridSprite, _super);
        function GridSprite() {
            var _this = _super.call(this) || this;
            _this.drawGrid();
            return _this;
        }
        GridSprite.prototype.drawGrid = function () {
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
        return GridSprite;
    }(egret.Sprite));
    Example.GridSprite = GridSprite;
    __reflect(GridSprite.prototype, "Example.GridSprite");
})(Example || (Example = {}));
