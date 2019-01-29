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
        this._f1 = cc.find('Canvas/Main/f1');
    },

    start () {
        cc.loader.loadRes("b1", cc.SpriteFrame, (err, spriteFrame) => {
            var node = new cc.Node('Sprite');
            var sp = node.addComponent(cc.Sprite);
            // sp.spriteFrame = this.sprite;
            sp.spriteFrame = spriteFrame;
            node.parent = this.node;
            
            var _maxHeight = this.node.height / 2 - this._f1.height * this._f1.scaleY / 2;
            var _x = this._f1.x, _y = this._f1.y + this._f1.height / 4;
            node.x = _x;
            node.y = _y;
            console.log(this._f1, node);
        });
        
    },

    // update (dt) {},
});
