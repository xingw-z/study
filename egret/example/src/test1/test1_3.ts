module Example {
    /**
     * 显示对象和显示容器
     *      添加与删除显示对象
     */
    export class test1_3Container extends egret.DisplayObjectContainer {
        /** 构造 */
        public constructor() {
            super();
            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        }
        /** 初始化 */
        private onAddToStage(event :egret.Event) {
            this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
            this.createGameScene();
        }
        /** 创建游戏场景 */
        private createGameScene() :void {
            // this.func1();

            this.func2();

        }

        private func1() :void{
            var spr:egret.Sprite = new egret.Sprite();
            spr.graphics.beginFill( 0x00ff00 );
            spr.graphics.drawRect(0, 0, 100, 100);
            spr.graphics.endFill();
            this.addChild( spr );

            spr.touchEnabled = true;
            spr.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
                this.removeChild( spr );
            }, this);
        }

        private func2() :void{
            var sprcon1:egret.Sprite = new egret.Sprite();
            sprcon1.graphics.beginFill( 0x00ff00 );
            sprcon1.graphics.drawRect(0, 0, 100, 100);
            sprcon1.graphics.endFill();
            this.addChild( sprcon1 );
            sprcon1.x = 120;
            var sprcon2:egret.Sprite = new egret.Sprite();
            sprcon2.graphics.beginFill( 0xff0000 );
            sprcon2.graphics.drawRect(0, 0, 100, 100);
            sprcon2.graphics.endFill();
            this.addChild( sprcon2 );
            sprcon2.y = 130;

            var spr:egret.Sprite = new egret.Sprite();
            spr.graphics.beginFill( 0x0000ff );
            spr.graphics.drawRect( 0, 0, 50, 50 );
            spr.graphics.endFill();
            spr.x = 10;
            spr.y = 10;
            this.addChild( spr );

            const that = this;

            // bindEvent(sprcon1);
            // bindEvent(sprcon2);

            this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
                if (spr.parent) {
                    spr.parent.removeChild( spr );
                } else {
                    this.addChild(spr);
                }
                
            }, this);

            function bindEvent (s :egret.Sprite) :void{
                s.touchEnabled = true;

                s.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
                    s.addChild( spr );
                }, that);
            }
            
        }
        
    }

}