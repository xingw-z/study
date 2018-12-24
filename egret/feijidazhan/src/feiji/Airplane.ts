module feiji {
	/**
	 * 飞机 利用对象池
	 */
	export class Airplane extends egret.DisplayObjectContainer {
		private static cacheDict : Object = {};
		/** 生产 */
		public static produce(textureName :string, fireDelay :number) :feiji.Airplane{
			if (feiji.Airplane.cacheDict[textureName] == null) {
				feiji.Airplane.cacheDict[textureName] = [];
			}
			let dict :feiji.Airplane[] = feiji.Airplane.cacheDict[textureName];
			let theFeiji :feiji.Airplane;
			if (dict.length > 0) {
				theFeiji = dict.pop();
			} else {
				theFeiji = new feiji.Airplane(RES.getRes(textureName), fireDelay, textureName);
			}
			theFeiji.blood = 10;
			return theFeiji;
		}
		/** 回收 */
		public static reclaim(theFeiji :feiji.Airplane) :void {
			let textureName :string = theFeiji.textureName;
			if (feiji.Airplane.cacheDict[textureName] == null) {
				feiji.Airplane.cacheDict[textureName] = [];
			}
			let dict :feiji.Airplane[] = feiji.Airplane.cacheDict[textureName];
			if (dict.indexOf(theFeiji) == -1) {
				dict.push(theFeiji);
			}
		}
		/**飞机位图*/
        private bmp :egret.Bitmap;
        /**创建子弹的时间间隔*/
        private fireDelay :number;
        /**定时射*/
        private fireTimer :egret.Timer;
		/** 飞机生命值 */
		public blood :number = 10;
		/** 可视为飞机类型名 */
		public textureName :string;
		public constructor (texture :egret.Texture, fireDelay :number, textureName :string) {
			super();
			this.fireDelay = fireDelay;
            this.bmp = new egret.Bitmap(texture);
			this.textureName = textureName;
            this.addChild(this.bmp);
            this.fireTimer = new egret.Timer(fireDelay);
            this.fireTimer.addEventListener(egret.TimerEvent.TIMER, this.createBullet, this);
		}
		/**开火*/
        public fire() :void {
            this.fireTimer.start();
        }
        /**停火*/
        public stopFire() :void {
            this.fireTimer.stop();
        }
        /**创建子弹*/
        private createBullet(evt :egret.TimerEvent):void {
            this.dispatchEventWith('createBullet');
        }
	}
}