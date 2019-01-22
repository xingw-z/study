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
     *      变换操作
     */
    var AnchorTest = (function (_super) {
        __extends(AnchorTest, _super);
        function AnchorTest() {
            var _this = _super.call(this) || this;
            _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
            return _this;
        }
        AnchorTest.prototype.onAddToStage = function (event) {
            var shp = new egret.Shape();
            shp.graphics.beginFill(0x000000);
            shp.graphics.drawRect(0, 0, 100, 100);
            shp.graphics.endFill();
            shp.x = 100;
            shp.y = 100;
            shp.anchorOffsetX = 50;
            // this.addChild( shp );
            // this.func1();
            // this.func2();
            this.func3();
        };
        /**
         * 本地坐标和舞台坐标
         */
        AnchorTest.prototype.func1 = function () {
            var container = new egret.DisplayObjectContainer();
            container.x = 200;
            container.y = 200;
            this.addChild(container);
            //画一个红色的圆，添加到 container 中
            var circle = new egret.Shape();
            circle.graphics.beginFill(0xff0000);
            circle.graphics.drawCircle(25, 25, 25);
            circle.graphics.endFill();
            container.addChild(circle);
            //给圆增加点击事件
            circle.touchEnabled = true;
            circle.addEventListener(egret.TouchEvent.TOUCH_TAP, onClick, this);
            function onClick() {
                //把舞台左上角的坐标(0,0)转换为 container 内部的坐标
                var targetPoint = container.globalToLocal(0, 0);
                //重新定位圆，可以看到圆形移到了屏幕的左上角
                circle.x = targetPoint.x;
                circle.y = targetPoint.y;
            }
        };
        /**
         * 平移
         */
        AnchorTest.prototype.func2 = function () {
            //设定2个偏移量
            var offsetX = 25;
            var offsetY = 25;
            //画一个红色的圆
            var circle = new egret.Shape();
            circle.graphics.beginFill(0xff0000);
            circle.graphics.drawCircle(25, 25, 25);
            circle.graphics.endFill();
            this.addChild(circle);
            //手指按到屏幕，触发 startMove 方法
            circle.touchEnabled = true;
            circle.addEventListener(egret.TouchEvent.TOUCH_BEGIN, startMove, this);
            //手指离开屏幕，触发 stopMove 方法
            circle.addEventListener(egret.TouchEvent.TOUCH_END, stopMove, this);
            function startMove(e) {
                //计算手指和圆形的距离
                offsetX = e.stageX - circle.x;
                offsetY = e.stageY - circle.y;
                // console.log(e.stageX, circle.x, e.stageY, circle.y, offsetX, offsetY);
                //手指在屏幕上移动，会触发 onMove 方法
                this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, onMove, this);
                this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP, clickMove, this);
            }
            function stopMove(e) {
                console.log(e);
                //手指离开屏幕，移除手指移动的监听
                this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, onMove, this);
                this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, clickMove, this);
            }
            function onMove(e) {
                //通过计算手指在屏幕上的位置，计算当前对象的坐标，达到跟随手指移动的效果
                circle.x = e.stageX - offsetX;
                circle.y = e.stageY - offsetY;
                // circle.x = e.stageX - 25;
                // circle.y = e.stageY - 25;
                // console.log(e.stageX, circle.x, e.stageY, circle.y);
            }
            // 点击 换坐标
            // this.stage.touchEnabled = true;
            this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, clickMove, this);
            function clickMove(e) {
                circle.x = e.stageX - offsetX;
                circle.y = e.stageY - offsetY;
            }
        };
        /**
         * 尺寸
         */
        AnchorTest.prototype.func3 = function () {
            var _shape = new egret.Shape();
            var _jie = _shape;
            _jie.width = 50;
            _jie.height = 100;
            _jie.scaleX = 2;
            _jie.scaleY = 2;
            // _jie.rotation = 45;
            // _jie.skewX = 10;
            _jie.skewY = 10;
            _jie.graphics.beginFill(0x0000ff);
            _jie.graphics.drawRect(0, 0, 50, 50);
            _jie.graphics.endFill();
            _jie.graphics.beginFill(0x0000ff);
            _jie.graphics.drawRect(50, 50, 50, 50);
            _jie.graphics.endFill();
            _jie.graphics.beginFill(0xff0000);
            _jie.graphics.drawRect(50, 0, 50, 50);
            _jie.graphics.endFill();
            _jie.graphics.beginFill(0xff0000);
            _jie.graphics.drawRect(0, 50, 50, 50);
            _jie.graphics.endFill();
            this.addChild(_jie);
        };
        return AnchorTest;
    }(egret.DisplayObjectContainer));
    Example.AnchorTest = AnchorTest;
    __reflect(AnchorTest.prototype, "Example.AnchorTest");
})(Example || (Example = {}));
