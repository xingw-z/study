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
     * 成绩显示
     */
    var ScorePanel = (function (_super) {
        __extends(ScorePanel, _super);
        function ScorePanel() {
            var _this = _super.call(this) || this;
            var g = _this.graphics;
            g.beginFill(0x000000, 0.8);
            g.drawRect(0, 0, 400, 200);
            g.endFill();
            _this.txt = new egret.TextField();
            _this.txt.width = 400;
            _this.txt.height = 200;
            _this.txt.textAlign = 'center';
            _this.txt.textColor = 0xFFFFFF;
            _this.txt.size = 24;
            _this.txt.y = 60;
            _this.addChild(_this.txt);
            _this.touchChildren = false;
            _this.touchEnabled = false;
            return _this;
        }
        ScorePanel.prototype.showScore = function (value) {
            var msg = "\u4F60\u7684\u6210\u7EE9\u662F\n" + value + "\n\u518D\u6765\u4E00\u6B21\u5427";
            this.txt.text = msg;
        };
        return ScorePanel;
    }(egret.Sprite));
    feiji.ScorePanel = ScorePanel;
    __reflect(ScorePanel.prototype, "feiji.ScorePanel");
})(feiji || (feiji = {}));
