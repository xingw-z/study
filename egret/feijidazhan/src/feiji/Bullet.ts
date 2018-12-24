module feiji {
	/**
	 * 子弹，利用对象池
	 */
	export class Bullet extends egret.Bitmap {

		private static cacheDict :Object = {};

		/** 生产 */
		public static produce(textureName :string) :feiji.Bullet {
			if (feiji.Bullet.cacheDict[textureName] == null) {
				feiji.Bullet.cacheDict[textureName] = [];
			}
			let dict :feiji.Bullet[] = feiji.Bullet.cacheDict[textureName];
			let bullet :feiji.Bullet;
			if (dict.length > 0) {
				bullet = dict.pop();
			} else {
				bullet = new feiji.Bullet(RES.getRes(textureName), textureName);
			}
			return bullet;
		}

		/** 回收 */
		public static reclaim(bullet :feiji.Bullet) :void {
			let textureName = bullet.textureName;
			if (feiji.Bullet.cacheDict[textureName] == null) {
				feiji.Bullet.cacheDict[textureName] = [];
			}
			let dict :feiji.Bullet[] = feiji.Bullet.cacheDict[textureName];
			if (dict.indexOf(bullet) == -1) {
				dict.push(bullet);
			}
		}

		/** 可视为子弹类名 */
		public textureName :string;

		public constructor(texture :egret.Texture, textureName :string) {
			super(texture);
			this.textureName = textureName;
		}
	}
}