module feiji {
    /**
     * 地图
     */
    export class BgMap extends egret.DisplayObjectContainer {
        /**存图片的数组*/
        private bmpArr :egret.Bitmap[];
        /**图片数量*/
        private rowCount :number;
        /**stage宽*/
        private stageW:number;
        /**stage高*/
        private stageH:number;
        /**纹理本身的高度*/
        private textureHeight:number;
        /**控制滚动速度*/
        private speed:number = 2;

        public constructor() {
            super();
            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        }
        /** 初始化 */
        private onAddToStage(event :egret.Event) {
            this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
            this.stageW = this.stage.stageWidth;
            this.stageH = this.stage.stageHeight;
            
            let texture :egret.Texture = RES.getRes('bg2_jpg');
            this.textureHeight = texture.textureHeight;
            this.rowCount = Math.ceil(this.stageH / this.textureHeight) + 1;
            
            
            this.bmpArr = [];

            for (let i :number = 0; i < this.rowCount; i++) {
                let bgBmp :egret.Bitmap = feiji.createBitmapByName('bg2_jpg');
                bgBmp.y = this.textureHeight * i - (this.textureHeight * this.rowCount - this.stageH);
                this.bmpArr.push(bgBmp);
                this.addChild(bgBmp);
            }
        }

        /** 开始滚动 */
        public start() :void {
            this.removeEventListener(egret.Event.ENTER_FRAME, this.enterFrameHandler, this);
            this.addEventListener(egret.Event.ENTER_FRAME, this.enterFrameHandler, this);
        }
        /** 逐帧运动 */
        private enterFrameHandler(event :egret.Event) :void {
            for (let i :number = 0; i < this.rowCount; i++) {
                let bgBmp :egret.Bitmap = this.bmpArr[i];
                bgBmp.y += this.speed;

                //判断超出屏幕后，回到队首，这样来实现循环反复
                
                if (bgBmp.y > this.stageH) {
                    bgBmp.y = this.bmpArr[0].y - this.textureHeight;
                    this.bmpArr.pop();
                    this.bmpArr.unshift(bgBmp);
                }
            }            
        }
        /** 暂停滚动 */
        public pause() :void {
            this.removeEventListener(egret.Event.ENTER_FRAME, this.enterFrameHandler, this)
        }
    }
}