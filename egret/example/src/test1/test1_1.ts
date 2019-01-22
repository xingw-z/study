module Example {
    /**
     * 显示对象和显示容器
     *      基本概念
     */
    export class test1_1Container extends egret.DisplayObjectContainer {
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
            var shape:egret.Shape = new egret.Shape();
            shape.graphics.beginFill( 0x0000ff );
            shape.graphics.drawRect( 0, 0, 50,50 );
            shape.graphics.endFill();
            this.addChild(shape);
        }
    }
    export class MyGrid extends egret.Shape{
        public constructor(){
            super();
            this.drawGrid();
        }
        private drawGrid(){
            this.graphics.beginFill( 0x0000ff );
            this.graphics.drawRect( 0, 0, 50,50 );
            this.graphics.endFill();
            this.graphics.beginFill( 0x0000ff );
            this.graphics.drawRect( 50, 50, 50, 50);
            this.graphics.endFill();
            this.graphics.beginFill( 0xff0000 );
            this.graphics.drawRect( 50, 0, 50,50 );
            this.graphics.endFill();
            this.graphics.beginFill( 0xff0000 );
            this.graphics.drawRect( 0, 50, 50,50 );
            this.graphics.endFill();               
        }
    }
    export class GridSprite extends egret.Sprite{
        public constructor()
        {
            super();
            this.drawGrid();
        }
        private drawGrid()
        {
            this.graphics.beginFill( 0x0000ff );
            this.graphics.drawRect( 0, 0, 50,50 );
            this.graphics.endFill();
            this.graphics.beginFill( 0x0000ff );
            this.graphics.drawRect( 50, 50, 50, 50);
            this.graphics.endFill();
            this.graphics.beginFill( 0xff0000 );
            this.graphics.drawRect( 50, 0, 50,50 );
            this.graphics.endFill();
            this.graphics.beginFill( 0xff0000 );
            this.graphics.drawRect( 0, 50, 50,50 );
            this.graphics.endFill();
        }
    }
}