// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
        far_bg: [cc.Node],  //用于管理背景图片结点的数组,记得回cocos面板中添加数组的结点数量

        bg_speed: 0.6,   //移动时控制速度的变量

        defaultY: 0,    //  默认的y值

        logVal: 0
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    update (dt) {
        this.bgMove(this.far_bg, this.bg_speed);
    },

    bgMove (bgList, speed) {
        //每次循环二张图片一起滚动
        this.logVal ++;
        if (this.logVal % 10 === 0) {
            // console.log(bgList[0].y, bgList[1].y);
        }
        for (var index = 0; index < bgList.length; index++) {

            bgList[index].y -=speed;
        
        }
        
        //y坐标减去自身的height得到这张背景刚好完全离开场景时的y值
        
        if (bgList[0].y <= 0 - this.defaultY) {
        
            bgList[0].y = this.defaultY; //离开场景后将此背景图的y重新赋值，位于场景的上方
        
        }
        
        if (bgList[1].y <= 0 - this.defaultY) {
            bgList[1].y = this.defaultY;
        
        }
    }
});
