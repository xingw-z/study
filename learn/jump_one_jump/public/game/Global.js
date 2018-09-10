export default class Global {
    // 屏幕相关
    static RATIO = 750 / window.innerWidth
    static WIDTH = 750
    static HEIGHT = window.innerHeight * Global.RATIO

    // 兔子相关
    static GAVITY = 3000
    static MAX_RABBIT_VY = 1800
    static MAX_RABBIT_VX = 450
    static MAX_TOUCH_TIME = 1

    // 云朵相关
    static MAX_SCORE = 8
    static CLOUD_AMOUNT = Global.MAX_SCORE + 1  // 奇数才符合条件，最后一朵云在左侧，月亮在右侧
    static CENTER_BG_AMOUNT = 0
    static LAST_CLOUD_MARGIN_TOP = 500 
    static FIRST_CLOUD_MARGIN_BOTTOM = 100
    static MAX_CLOUD_SCALE = 0.2
    static LIFE_TIME = 10000
    static FADE_TIME = 3000

    // 背景相关
    static MAP_BG_HEIGHT = {BG1: 2048, BG2: 807, BG3: 533}
    static TOTAL_BG_HEIGHT = Global.MAP_BG_HEIGHT.BG1 + Global.MAP_BG_HEIGHT.BG2*Global.CENTER_BG_AMOUNT + Global.MAP_BG_HEIGHT.BG3

    static LOWEST_MOUNTAIN = 400
    static LOWEST_BG_CLOUD = 600
}