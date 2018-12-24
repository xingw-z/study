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
     * 子弹，利用对象池
     */
    var Bullet = (function (_super) {
        __extends(Bullet, _super);
        function Bullet(texture, textureName) {
            var _this = _super.call(this, texture) || this;
            _this.textureName = textureName;
            return _this;
        }
        /** 生产 */
        Bullet.produce = function (textureName) {
            if (feiji.Bullet.cacheDict[textureName] == null) {
                feiji.Bullet.cacheDict[textureName] = [];
            }
            var dict = feiji.Bullet.cacheDict[textureName];
            var bullet;
            if (dict.length > 0) {
                bullet = dict.pop();
            }
            else {
                bullet = new feiji.Bullet(RES.getRes(textureName), textureName);
            }
            return bullet;
        };
        /** 回收 */
        Bullet.reclaim = function (bullet) {
            var textureName = bullet.textureName;
            if (feiji.Bullet.cacheDict[textureName] == null) {
                feiji.Bullet.cacheDict[textureName] = [];
            }
            var dict = feiji.Bullet.cacheDict[textureName];
            if (dict.indexOf(bullet) == -1) {
                dict.push(bullet);
            }
        };
        Bullet.cacheDict = {};
        return Bullet;
    }(egret.Bitmap));
    feiji.Bullet = Bullet;
    __reflect(Bullet.prototype, "feiji.Bullet");
})(feiji || (feiji = {}));
