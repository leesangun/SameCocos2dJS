var BaseScene = require('BaseScene');
cc.Class({
    extends: BaseScene,

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

    // onLoad () {},

    start () {
        var $_GET = {};
        var args = location.search.substr(1).split(/&/);
        for (var i = 0; i < args.length; ++i) {
            var tmp = args[i].split(/=/);
            if (tmp[0] !== '') {
                $_GET[decodeURIComponent(tmp[0])] = decodeURIComponent(tmp.slice(1).join("").replace("+", " "));
            }
        }

        BaseScene.dataGet = $_GET;
        BaseScene.dataGet['mode']    = BaseScene.dataGet['mode'] === undefined ? 0 : parseInt(BaseScene.dataGet['mode']);
    },

    // update (dt) {},
});
