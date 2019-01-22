module Example {
    /**
     * 显示对象和显示容器
     *      深度管理
     */
    export class test1_4Container extends egret.DisplayObjectContainer {
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

            // this.func2();

            // this.func3();

            this.func4();

        }
        /**
         * 深度顺序
         */
        private func1() :void{
            var spr1:egret.Sprite = new egret.Sprite();
            spr1.graphics.beginFill( 0xff0000 );
            spr1.graphics.drawRect( 0, 0, 100, 100);
            spr1.graphics.endFill();
            this.addChild( spr1 );
            var spr2:egret.Sprite = new egret.Sprite();
            spr2.graphics.beginFill( 0x00ff00 );
            spr2.graphics.drawRect( 0, 0, 80, 80);
            spr2.graphics.endFill();
            spr2.x  = 50;
            spr2.y = 50;
            this.addChild( spr2 );
        }
        /** 添加/删除指定深度的对象 */
        private func2() :void{
            var sprcon:egret.Sprite = new egret.Sprite();
            this.addChild( sprcon );
            sprcon.x = 10;
            for(var i:number = 0; i<4; i++){
                var spr:egret.Sprite = new egret.Sprite();
                spr.graphics.beginFill( 0xffffff * Math.random() );
                spr.graphics.drawRect( 0, 0, 100, 100);
                spr.graphics.endFill();
                spr.x = i*20;
                sprcon.addChild( spr );
            }
            var sprNew:egret.Sprite = new egret.Sprite();
            sprNew.graphics.beginFill( 0xff0000 );
            sprNew.graphics.drawRect( 0, 0, 300, 150 );
            sprNew.graphics.endFill();
            sprNew.x = 10;
            sprNew.y = 50;
            sprcon.addChildAt( sprNew, 1 );
            sprcon.removeChildAt( 2 );

            setTimeout(() => {
                sprcon.removeChildren();
            }, 1000);
        }
        /** 交换不同深度对象 */
        private func3() :void{
            var sprcon:egret.Sprite = new egret.Sprite();
            this.addChild( sprcon );
            sprcon.x = 10;
            var spr1:egret.Sprite = new egret.Sprite();
            spr1.graphics.beginFill( 0xff0000 );
            spr1.graphics.drawRect( 0, 0, 100, 100 );
            spr1.graphics.endFill();
            spr1.x = 50;
            sprcon.addChild( spr1 );
            var spr2:egret.Sprite = new egret.Sprite();
            spr2.graphics.beginFill( 0x00ff00 );
            spr2.graphics.drawRect( 0, 0, 100, 100 );
            spr2.graphics.endFill();
            spr2.x = 100;
            spr2.y = 50;
            sprcon.addChild( spr2 );

            setTimeout(() => {
                // sprcon.swapChildren( spr1, spr2 );
                sprcon.swapChildrenAt( 0, 1 );
            }, 2000);
        }
        /** 重设子对象深度 */
        private func4() :void{
            var sprcon:egret.Sprite = new egret.Sprite();
            this.addChild( sprcon );
            sprcon.x = 10;
            var spr1:egret.Sprite = new egret.Sprite();
            spr1.graphics.beginFill( 0xff0000 );
            spr1.graphics.drawRect( 0, 0, 100, 100 );
            spr1.graphics.endFill();
            spr1.x = 50;
            sprcon.addChild( spr1 );
            var spr2:egret.Sprite = new egret.Sprite();
            spr2.graphics.beginFill( 0x00ff00 );
            spr2.graphics.drawRect( 0, 0, 100, 100 );
            spr2.graphics.endFill();
            spr2.x = 100;
            spr2.y = 50;
            sprcon.addChild( spr2 );
            setTimeout(() => {
                sprcon.setChildIndex( spr1, 1 );

                console.log(sprcon.getChildIndex(spr2));
                
            }, 2000);
            
        }
    }

}