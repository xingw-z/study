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
        this._initX = this.node.position.x;
        this._initY = this.node.position.y;
        this._f1.on(cc.Node.EventType.TOUCH_START, this.f1TouchStartHandler, this);
        this._f1.on(cc.Node.EventType.TOUCH_END, this.f1TouchEndHandler, this);
        this._offsetX = 0;
        this._offsetY = 0;
        // console.log(this._f1)
    },

    f1TouchStartHandler (e) {
        
        var { x, y } = e.getLocation()
        
        
        // console.log(e, e.getLocation());
        
        this._offsetX = x - (this._f1.x + this._initX);
        this._offsetY = y - (this._f1.y + this._initY);
        
        this._f1.on(cc.Node.EventType.TOUCH_MOVE, this.f1TouchMoveHandler, this);
    },
    /** 根据 鼠标平移 的 x y 左边 给自己的飞机赋值 */
    f1TouchMoveHandler (e) {
        var _location = e.getLocation();
        var { x, y } = _location;
        // var _f1HalfWidth = this._f1.width / 2;
        // var _f1HalfHeight = this._f1.height / 2;
        // var _maxWidth = this.node.width - _f1HalfWidth;
        // var _maxHeight = this.node.height - _f1HalfHeight;
        var _minWidth = -(this.node.width / 2 - this._f1.width * this._f1.scaleX / 2);
        var _minHeight = -(this.node.height / 2 - this._f1.height * this._f1.scaleY / 2);
        var _maxWidth = -_minWidth;
        var _maxHeight = -_minHeight;
        // if (x < _minWidth) {
        //     x = _minWidth;
        // }
        // if (y < _minHeight) {
        //     y = _minHeight;
        // }
        // if (x > _maxWidth) {
        //     x = _maxWidth
        // }
        // if (y > _maxHeight) {
        //     y = _maxHeight
        // }
        var _moveX = x - this._initX - this._offsetX;
        var _moveY = y - this._initY - this._offsetY;
        // console.log(_moveX, _moveY, _f1HalfWidth - this._offsetX, _f1HalfHeight - this._offsetY);
        if (_moveX < _minWidth) {
            _moveX = _minWidth;
        }
        if (_moveX > _maxWidth) {
            _moveX = _maxWidth;
        }
        if (_moveY < _minHeight) {
            _moveY = _minHeight;
        }
        if (_moveY > _maxHeight) {
            _moveY = _maxHeight;
        }
 
        this._f1.x = _moveX;
        this._f1.y = _moveY;
    },

    f1TouchEndHandler (e) {
        this._f1.off(cc.Node.EventType.TOUCH_MOVE, this.f1TouchMoveHandler, this);
    },

    start () {

    },

    // update (dt) {},
});
