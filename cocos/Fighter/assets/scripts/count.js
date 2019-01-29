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
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this._count = cc.find('Canvas/Main/count');
        var label = this._count.getComponent(cc.Label);
        // console.log(label);
        this._count.opacity = 0;
        // var test = () => {
        //     var _time = 0.5;
        //     var _big = cc.spawn(cc.scaleTo(_time, 1.16), cc.fadeIn(_time)).easing(cc.easeIn(3.0));
        //     var _small = cc.scaleTo(_time, 0.95).easing(cc.easeIn(3.0));
        //     var _zh = cc.spawn(cc.scaleTo(_time, 0.3), cc.fadeOut(_time)).easing(cc.easeIn(3.0));
        //     var _callFunc = cc.callFunc(() => {
        //         var _num = parseInt(label.string);
        //         label.string = _num - 1;
        //     }, this);
        //     this._count.runAction(cc.repeat(cc.sequence(_small, _big, _zh, _callFunc), 3));
        // }
        // test();

        // this.schedule(() => {
        //     this._count.opacity = 255;
        //     label.string = 3;
        //     test();
        // }, 5);
    },

    start () {
        
    },

    // update (dt) {},
});
