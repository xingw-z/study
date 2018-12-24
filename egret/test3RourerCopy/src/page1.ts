module modulePage1 {
	export class classPage extends egret.DisplayObjectContainer {
		public constructor() {
			super();
			this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
		}
		private onAddToStage(event:egret.Event){
			let _com1 :component1 = new component1();
			this.addChild(_com1);
		}
	}
	class component1 extends egret.Shape {
		public constructor() {
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
}