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
var feiji;
(function (feiji) {
    /**
     * 飞机 利用对象池
     */
    var Airplane = (function (_super) {
        __extends(Airplane, _super);
        function Airplane(texture, fireDelay, textureName) {
            var _this = _super.call(this) || this;
            /** 飞机生命值 */
            _this.blood = 10;
            _this.fireDelay = fireDelay;
            _this.bmp = new egret.Bitmap(texture);
            _this.textureName = textureName;
            _this.addChild(_this.bmp);
            _this.fireTimer = new egret.Timer(fireDelay);
            _this.fireTimer.addEventListener(egret.TimerEvent.TIMER, _this.createBullet, _this);
            return _this;
        }
        /** 生产 */
        Airplane.produce = function (textureName, fireDelay) {
            if (feiji.Airplane.cacheDict[textureName] == null) {
                feiji.Airplane.cacheDict[textureName] = [];
            }
            var dict = feiji.Airplane.cacheDict[textureName];
            var theFeiji;
            if (dict.length > 0) {
                theFeiji = dict.pop();
            }
            else {
                theFeiji = new feiji.Airplane(RES.getRes(textureName), fireDelay, textureName);
            }
            theFeiji.blood = 10;
            return theFeiji;
        };
        /** 回收 */
        Airplane.reclaim = function (theFeiji) {
            var textureName = theFeiji.textureName;
            if (feiji.Airplane.cacheDict[textureName] == null) {
                feiji.Airplane.cacheDict[textureName] = [];
            }
            var dict = feiji.Airplane.cacheDict[textureName];
            if (dict.indexOf(theFeiji) == -1) {
                dict.push(theFeiji);
            }
        };
        /**开火*/
        Airplane.prototype.fire = function () {
            this.fireTimer.start();
        };
        /**停火*/
        Airplane.prototype.stopFire = function () {
            this.fireTimer.stop();
        };
        /**创建子弹*/
        Airplane.prototype.createBullet = function (evt) {
            this.dispatchEventWith('createBullet');
        };
        Airplane.cacheDict = {};
        return Airplane;
    }(egret.DisplayObjectContainer));
    feiji.Airplane = Airplane;
    __reflect(Airplane.prototype, "feiji.Airplane");
})(feiji || (feiji = {}));
