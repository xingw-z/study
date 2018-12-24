module feiji {
    /**
     * 主游戏容器
     */
    export class GameContainer extends egret.DisplayObjectContainer {
        /** 舞台宽度 */
        private stageW :number;
        /** 舞台高度 */
        private stageH :number;
        /** 可滚动的背景 */
        private bg :feiji.BgMap;
        /** 开始按钮 */
        private btnStart :any;
        /** 我的飞机 */
        private myFeiji :feiji.Airplane;
        /** 我的子弹 */
        private myBullets :feiji.Bullet[] = [];
        /** 敌人的飞机 */
        private enemyFeijis :feiji.Airplane[] = [];
        /** 触发创建敌机的间隔 */
        private enemyFeijisTimer :egret.Timer = new egret.Timer(1000);
        /** 敌人的子弹 */
        private enemyBullets :feiji.Bullet[] = [];
        /** 成绩显示 */
        private scorePanel :feiji.ScorePanel;
        /** 我的成绩 */
        private myScore :number = 0;
        /** 可能是框架启动毫秒数 */
        private _lastTime :number;
        /** use pause */
        private zt :boolean = true;

        public constructor() {
            super();
            this._lastTime = egret.getTimer();
            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        }
        /** 初始化 */
        private onAddToStage(event :egret.Event) {
            this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
            this.createGameScene();
        }
        /** 创建游戏场景 */
        private createGameScene() :void {
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
        }
        /**预创建一些对象，减少游戏时的创建消耗*/
        private preCreatedInstance() :void {
            let i :number = 0;
            let objArr :any[] = [];
            let bullet :any;
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
            let enemyFeiji :feiji.Airplane;
            for (i = 0; i < 20; i++) {
                enemyFeiji = feiji.Airplane.produce('f2_png', 1000);
                objArr.push(enemyFeiji);
            }
            for (i = 0; i < 20; i++) {
                enemyFeiji = objArr.pop();
                feiji.Airplane.reclaim(enemyFeiji);
            }
        }
        /** 游戏开始 */
        private gameStart() :void {
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
        }

        /** 响应Touch */
        private touchHandler(evt :egret.TouchEvent) :void{
            if (evt.type == egret.TouchEvent.TOUCH_MOVE) {
                let tx :number = evt.localX;
                tx = Math.max(0, tx);
                tx = Math.min(this.stageW - this.myFeiji.width, tx);
                this.myFeiji.x = tx;
            }
        }

        /** 创建子弹（包括我的子弹和敌机的子弹） */
        private createBulletHandler(evt :egret.Event) :void{
            let bullet :feiji.Bullet;
            if (evt.target == this.myFeiji) {
                for (let i :number = 0; i < 2; i++) {
                    bullet = feiji.Bullet.produce('b1_png');
                    bullet.x = i == 0 ? (this.myFeiji.x + 10) : (this.myFeiji.x + this.myFeiji.width - 22);
                    bullet.y = this.myFeiji.y + 30;
                    this.addChildAt(bullet, this.numChildren - 1 - this.enemyFeijis.length);
                    this.myBullets.push(bullet);
                }
            } else {
                let theFeiji :feiji.Airplane = evt.target;
                bullet = feiji.Bullet.produce('b2_png');
                bullet.x = theFeiji.x + 28;
                bullet.y = theFeiji.y + 10;
                this.addChildAt(bullet, this.numChildren - 1 - this.enemyFeijis.length);
                this.enemyBullets.push(bullet);
            }
        }

        /** 创建敌机 */
        private createEnemyFeiji(evt :egret.TimerEvent) :void{
            let enemyFeiji :feiji.Airplane = feiji.Airplane.produce('f2_png', 1000);
            enemyFeiji.x = Math.random() * (this.stageW - enemyFeiji.width);
            enemyFeiji.y = -enemyFeiji.height - Math.random() * 300;
            enemyFeiji.addEventListener('createBullet', this.createBulletHandler, this);
            enemyFeiji.fire();
            this.addChildAt(enemyFeiji, this.numChildren - 1);
            this.enemyFeijis.push(enemyFeiji);
        }

        /** 游戏画面更新 */
        private gameViewUpdate(evt :egret.Event) :void{
            //为了防止FPS下降造成回收慢，生成快，进而导致DRAW数量失控，需要计算一个系数，当FPS下降的时候，让运动速度加快
            let nowTime :number = egret.getTimer();
            let fps :number = 1000/(nowTime - this._lastTime);
            this._lastTime = nowTime;
            let speedOffset :number = 60 / fps;
            // 我的子弹运动
            let i :number = 0;
            let bullet :feiji.Bullet;
            let myBulletsCount :number = this.myBullets.length;
            for (; i < myBulletsCount; i++) {
                bullet = this.myBullets[i];
                if (bullet.y < -bullet.height) {
                    this.removeChild(bullet);
                    Bullet.reclaim(bullet);
                    this.myBullets.splice(i, 1);
                    i --;
                    myBulletsCount--;
                }
                bullet.y -= 12 * speedOffset;
            }
            /** 敌人飞机运动 */
            let theFeiji :feiji.Airplane;
            let enemyFeijiCount :number = this.enemyFeijis.length;
            for (i = 0; i < enemyFeijiCount; i++) {
                theFeiji = this.enemyFeijis[i];
                if (theFeiji.y > this.stage.stageHeight) {
                    this.removeChild(theFeiji);
                    Airplane.reclaim(theFeiji);
                    theFeiji.removeEventListener('createBullet', this.createBulletHandler, this);
                    theFeiji.stopFire();
                    this.enemyFeijis.splice(i, 1);
                    i--;
                    enemyFeijiCount--;
                }
                theFeiji.y += 4 * speedOffset;
            }
            /** 敌人子弹运动 */
            let enemyBulletsCount :number = this.enemyBullets.length;
            for (i = 0; i < enemyBulletsCount; i++) {
                bullet = this.enemyBullets[i];
                if (bullet.y > this.stage.stageHeight) {
                    this.removeChild(bullet);
                    Bullet.reclaim(bullet);
                    this.enemyBullets.splice(i, 1);
                    i--;
                    /** 数组长度已经改变 */
                    enemyBulletsCount--;
                }
                bullet.y += 8 * speedOffset;
            }
            this.gameHitTest();
        }

        /** 游戏碰撞检测 */
        private gameHitTest() :void {
            let i :number, j :number;
            let bullet :feiji.Bullet;
            let theFeiji :feiji.Airplane;
            let myBulletsCount :number = this.myBullets.length;
            let enemyFeijiCount :number = this.enemyFeijis.length;
            let enemyBulletsCount :number = this.enemyBullets.length;
            // 将需消失的子弹和飞机记录
            let delBullets :feiji.Bullet[] = [];
            let delFeijis :feiji.Airplane[] = [];
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
            } else {
                while(delBullets.length > 0) {
                    bullet = delBullets.pop();
                    this.removeChild(bullet);
                    if (bullet.textureName == 'b1_png') {
                        this.myBullets.splice(this.myBullets.indexOf(bullet), 1);
                    } else {
                        this.enemyBullets.splice(this.enemyBullets.indexOf(bullet), 1);
                    }
                    feiji.Bullet.reclaim(bullet);
                }
                this.myScore += delFeijis.length;
                while(delFeijis.length > 0) {
                    theFeiji = delFeijis.pop();
                    theFeiji.stopFire();
                    theFeiji.removeEventListener('createBullet', this.createBulletHandler, this);
                    this.removeChild(theFeiji);
                    this.enemyFeijis.splice(this.enemyFeijis.indexOf(theFeiji), 1);
                    feiji.Airplane.reclaim(theFeiji);
                }
            }
        }

        /** 游戏结束 */
        private gameStop() :void {
            this.addChild(this.btnStart);
            this.bg.pause();
            this.removeEventListener(egret.Event.ENTER_FRAME, this.gameViewUpdate, this);
            this.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchHandler, this);
            this.myFeiji.stopFire();
            this.myFeiji.removeEventListener('createBullet', this.createBulletHandler, this);
            this.enemyFeijisTimer.removeEventListener(egret.TimerEvent.TIMER, this.createEnemyFeiji, this);
            this.enemyFeijisTimer.stop();
            // 清理子弹
            let i :number = 0;
            let bullet :feiji.Bullet;
            while(this.myBullets.length > 0) {
                bullet = this.myBullets.pop();
                this.removeChild(bullet);
                feiji.Bullet.reclaim(bullet);
            }
            while(this.enemyBullets.length > 0) {
                bullet = this.enemyBullets.pop();
                this.removeChild(bullet);
                feiji.Bullet.reclaim(bullet);
            }
            // 清理飞机
            let theFeiji :feiji.Airplane;
            while(this.enemyFeijis.length > 0) {
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
        }
    }
}