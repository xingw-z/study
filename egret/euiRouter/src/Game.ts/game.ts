module Page {
    /**
     * 页面容器
     */
    export class gameContainer extends egret.DisplayObjectContainer {
        /** 可能是框架启动毫秒数 */
        private _lastTime :number;
        /** 构造 */
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
            let label:egret.TextField = new egret.TextField(); 
            label.text = "game page"; 
            this.addChild(label);;
        }
    }
}