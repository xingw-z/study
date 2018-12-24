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
     * 主游戏容器
     */
    var GameContainer = (function (_super) {
        __extends(GameContainer, _super);
        function GameContainer() {
            var _this = _super.call(this) || this;
            /** 我的子弹 */
            _this.myBullets = [];
            /** 敌人的飞机 */
            _this.enemyFeijis = [];
            /** 触发创建敌机的间隔 */
            _this.enemyFeijisTimer = new egret.Timer(1000);
            /** 敌人的子弹 */
            _this.enemyBullets = [];
            /** 我的成绩 */
            _this.myScore = 0;
            /** use pause */
            _this.zt = true;
            _this._lastTime = egret.getTimer();
            _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
            return _this;
        }
        /** 初始化 */
        GameContainer.prototype.onAddToStage = function (event) {
            this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
            this.createGameScene();
        };
        /** 创建游戏场景 */
        GameContainer.prototype.createGameScene = function () {
            this.stageW = this.stage.stageWidth;
            this.stageH = this.stage.stageHeight;
            // 背景
            this.bg = new feiji.BgMap();
            this.addChild(this.bg);
            /** 开始按钮 */
            this.btnStart = feiji.createBitmapByName('btn_start_png');
            this.btnStart.x = (this.stageW - this.btnStart.width) / 2;
            this.btnStart.y = (this.stageH - this.btnStart.height) / 2;
            /** 开启触碰 */
            this.btnStart.touchEnabled = true;
            this.btnStart.addEventListener(egret.TouchEvent.TOUCH_TAP, this.gameStart, this);
            this.addChild(this.btnStart);
            /** 我的飞机 */
            this.myFeiji = new feiji.Airplane(RES.getRes('f1_png'), 100, 'f1_png');
            this.myFeiji.y = this.stageH - this.myFeiji.height - 50;
            this.addChild(this.myFeiji);
            this.scorePanel = new feiji.ScorePanel();
            // 预创建
            this.preCreatedInstance();
        };
        /**预创建一些对象，减少游戏时的创建消耗*/
        GameContainer.prototype.preCreatedInstance = function () {
            var i = 0;
            var objArr = [];
            var bullet;
            for (i = 0; i < 20; i++) {
                bullet = feiji.Bullet.produce('b1_png');
                objArr.push(bullet);
            }
            for (i = 0; i < 20; i++) {
                bullet = objArr.pop();
                feiji.Bullet.reclaim(bullet);
            }
            for (i = 0; i < 20; i++) {
                bullet = feiji.Bullet.produce('b2_png');
                objArr.push(bullet);
            }
            var enemyFeiji;
            for (i = 0; i < 20; i++) {
                enemyFeiji = feiji.Airplane.produce('f2_png', 1000);
                objArr.push(enemyFeiji);
            }
            for (i = 0; i < 20; i++) {
                enemyFeiji = objArr.pop();
                feiji.Airplane.reclaim(enemyFeiji);
            }
        };
        /** 游戏开始 */
        GameContainer.prototype.gameStart = function () {
            // this.bg.touchEnabled = true;
            // this.bg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.gameStop, this);
            this.myScore = 0;
            this.removeChild(this.btnStart);
            this.bg.start();
            this.touchEnabled = true;
            this.addEventListener(egret.Event.ENTER_FRAME, this.gameViewUpdate, this);
            this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchHandler, this);
            this.myFeiji.x = (this.stageW - this.myFeiji.width) / 2;
            this.myFeiji.fire();
            this.myFeiji.blood = 10;
            this.myFeiji.addEventListener('createBullet', this.createBulletHandler, this);
            this.enemyFeijisTimer.addEventListener(egret.TimerEvent.TIMER, this.createEnemyFeiji, this);
            this.enemyFeijisTimer.start();
            if (this.scorePanel.parent == this) {
                this.removeChild(this.scorePanel);
            }
            // this.myFeiji.x = (this.stageW - this.myFeiji.width) / 2;
            // this.myFeiji.fire();
            // this.myFeiji.blood = 10;
            // let _test :egret.Bitmap = feiji.createBitmapByName('f1_bng');
            // this.addChild(_test);
            // _test.x = 100;
            // _test.y = 200;
            // this.setChildIndex(_test, 100);
        };
        /** 响应Touch */
        GameContainer.prototype.touchHandler = function (evt) {
            if (evt.type == egret.TouchEvent.TOUCH_MOVE) {
                var tx = evt.localX;
                tx = Math.max(0, tx);
                tx = Math.min(this.stageW - this.myFeiji.width, tx);
                this.myFeiji.x = tx;
            }
        };
        /** 创建子弹（包括我的子弹和敌机的子弹） */
        GameContainer.prototype.createBulletHandler = function (evt) {
            var bullet;
            if (evt.target == this.myFeiji) {
                for (var i = 0; i < 2; i++) {
                    bullet = feiji.Bullet.produce('b1_png');
                    bullet.x = i == 0 ? (this.myFeiji.x + 10) : (this.myFeiji.x + this.myFeiji.width - 22);
                    bullet.y = this.myFeiji.y + 30;
                    this.addChildAt(bullet, this.numChildren - 1 - this.enemyFeijis.length);
                    this.myBullets.push(bullet);
                }
            }
            else {
                var theFeiji = evt.target;
                bullet = feiji.Bullet.produce('b2_png');
                bullet.x = theFeiji.x + 28;
                bullet.y = theFeiji.y + 10;
                this.addChildAt(bullet, this.numChildren - 1 - this.enemyFeijis.length);
                this.enemyBullets.push(bullet);
            }
        };
        /** 创建敌机 */
        GameContainer.prototype.createEnemyFeiji = function (evt) {
            var enemyFeiji = feiji.Airplane.produce('f2_png', 1000);
            enemyFeiji.x = Math.random() * (this.stageW - enemyFeiji.width);
            enemyFeiji.y = -enemyFeiji.height - Math.random() * 300;
            enemyFeiji.addEventListener('createBullet', this.createBulletHandler, this);
            enemyFeiji.fire();
            this.addChildAt(enemyFeiji, this.numChildren - 1);
            this.enemyFeijis.push(enemyFeiji);
        };
        /** 游戏画面更新 */
        GameContainer.prototype.gameViewUpdate = function (evt) {
            //为了防止FPS下降造成回收慢，生成快，进而导致DRAW数量失控，需要计算一个系数，当FPS下降的时候，让运动速度加快
            var nowTime = egret.getTimer();
            var fps = 1000 / (nowTime - this._lastTime);
            this._lastTime = nowTime;
            var speedOffset = 60 / fps;
            // 我的子弹运动
            var i = 0;
            var bullet;
            var myBulletsCount = this.myBullets.length;
            for (; i < myBulletsCount; i++) {
                bullet = this.myBullets[i];
                if (bullet.y < -bullet.height) {
                    this.removeChild(bullet);
                    feiji.Bullet.reclaim(bullet);
                    this.myBullets.splice(i, 1);
                    i--;
                    myBulletsCount--;
                }
                bullet.y -= 12 * speedOffset;
            }
            /** 敌人飞机运动 */
            var theFeiji;
            var enemyFeijiCount = this.enemyFeijis.length;
            for (i = 0; i < enemyFeijiCount; i++) {
                theFeiji = this.enemyFeijis[i];
                if (theFeiji.y > this.stage.stageHeight) {
                    this.removeChild(theFeiji);
                    feiji.Airplane.reclaim(theFeiji);
                    theFeiji.removeEventListener('createBullet', this.createBulletHandler, this);
                    theFeiji.stopFire();
                    this.enemyFeijis.splice(i, 1);
                    i--;
                    enemyFeijiCount--;
                }
                theFeiji.y += 4 * speedOffset;
            }
            /** 敌人子弹运动 */
            var enemyBulletsCount = this.enemyBullets.length;
            for (i = 0; i < enemyBulletsCount; i++) {
                bullet = this.enemyBullets[i];
                if (bullet.y > this.stage.stageHeight) {
                    this.removeChild(bullet);
                    feiji.Bullet.reclaim(bullet);
                    this.enemyBullets.splice(i, 1);
                    i--;
                    /** 数组长度已经改变 */
                    enemyBulletsCount--;
                }
                bullet.y += 8 * speedOffset;
            }
            this.gameHitTest();
        };
        /** 游戏碰撞检测 */
        GameContainer.prototype.gameHitTest = function () {
            var i, j;
            var bullet;
            var theFeiji;
            var myBulletsCount = this.myBullets.length;
            var enemyFeijiCount = this.enemyFeijis.length;
            var enemyBulletsCount = this.enemyBullets.length;
            // 将需消失的子弹和飞机记录
            var delBullets = [];
            var delFeijis = [];
            // 我的子弹可以消灭敌机
            for (i = 0; i < myBulletsCount; i++) {
                bullet = this.myBullets[i];
                for (j = 0; j < enemyFeijiCount; j++) {
                    theFeiji = this.enemyFeijis[j];
                    if (feiji.GameUitl.hitTest(theFeiji, bullet)) {
                        theFeiji.blood -= 2;
                        if (delBullets.indexOf(bullet) == -1) {
                            delBullets.push(bullet);
                        }
                        if (theFeiji.blood <= 0 && delFeijis.indexOf(theFeiji) == -1) {
                            delFeijis.push(theFeiji);
                        }
                    }
                }
            }
            // 敌人的子弹可以减我血
            for (i = 0; i < enemyBulletsCount; i++) {
                bullet = this.enemyBullets[i];
                if (feiji.GameUitl.hitTest(this.myFeiji, bullet)) {
                    this.myFeiji.blood -= 1;
                    if (delBullets.indexOf(bullet) == -1) {
                        delBullets.push(bullet);
                    }
                }
            }
            // 敌机的撞击可以消灭我
            for (i = 0; i < enemyFeijiCount; i++) {
                theFeiji = this.enemyFeijis[i];
                if (feiji.GameUitl.hitTest(this.myFeiji, theFeiji)) {
                    this.myFeiji.blood -= 10;
                }
            }
            if (this.myFeiji.blood <= 0) {
                this.gameStop();
            }
            else {
                while (delBullets.length > 0) {
                    bullet = delBullets.pop();
                    this.removeChild(bullet);
                    if (bullet.textureName == 'b1_png') {
                        this.myBullets.splice(this.myBullets.indexOf(bullet), 1);
                    }
                    else {
                        this.enemyBullets.splice(this.enemyBullets.indexOf(bullet), 1);
                    }
                    feiji.Bullet.reclaim(bullet);
                }
                this.myScore += delFeijis.length;
                while (delFeijis.length > 0) {
                    theFeiji = delFeijis.pop();
                    theFeiji.stopFire();
                    theFeiji.removeEventListener('createBullet', this.createBulletHandler, this);
                    this.removeChild(theFeiji);
                    this.enemyFeijis.splice(this.enemyFeijis.indexOf(theFeiji), 1);
                    feiji.Airplane.reclaim(theFeiji);
                }
            }
        };
        /** 游戏结束 */
        GameContainer.prototype.gameStop = function () {
            this.addChild(this.btnStart);
            this.bg.pause();
            this.removeEventListener(egret.Event.ENTER_FRAME, this.gameViewUpdate, this);
            this.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchHandler, this);
            this.myFeiji.stopFire();
            this.myFeiji.removeEventListener('createBullet', this.createBulletHandler, this);
            this.enemyFeijisTimer.removeEventListener(egret.TimerEvent.TIMER, this.createEnemyFeiji, this);
            this.enemyFeijisTimer.stop();
            // 清理子弹
            var i = 0;
            var bullet;
            while (this.myBullets.length > 0) {
                bullet = this.myBullets.pop();
                this.removeChild(bullet);
                feiji.Bullet.reclaim(bullet);
            }
            while (this.enemyBullets.length > 0) {
                bullet = this.enemyBullets.pop();
                this.removeChild(bullet);
                feiji.Bullet.reclaim(bullet);
            }
            // 清理飞机
            var theFeiji;
            while (this.enemyFeijis.length > 0) {
                theFeiji = this.enemyFeijis.pop();
                theFeiji.stopFire();
                theFeiji.removeEventListener('createBullet', this.createBulletHandler, this);
                this.removeChild(theFeiji);
                feiji.Airplane.reclaim(theFeiji);
            }
            // 显示成绩
            this.scorePanel.showScore(this.myScore);
            this.scorePanel.x = (this.stageW - this.scorePanel.width) / 2;
            this.scorePanel.y = 100;
            this.addChild(this.scorePanel);
        };
        return GameContainer;
    }(egret.DisplayObjectContainer));
    feiji.GameContainer = GameContainer;
    __reflect(GameContainer.prototype, "feiji.GameContainer");
})(feiji || (feiji = {}));
