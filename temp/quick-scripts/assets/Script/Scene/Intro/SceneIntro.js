(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Scene/Intro/SceneIntro.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'c151306uNVKYb0la/CC6+6Z', 'SceneIntro', __filename);
// Script/Scene/Intro/SceneIntro.js

'use strict';

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

    start: function start() {
        var $_GET = {};
        var args = location.search.substr(1).split(/&/);
        for (var i = 0; i < args.length; ++i) {
            var tmp = args[i].split(/=/);
            if (tmp[0] !== '') {
                $_GET[decodeURIComponent(tmp[0])] = decodeURIComponent(tmp.slice(1).join("").replace("+", " "));
            }
        }

        BaseScene.dataGet = $_GET;
        BaseScene.dataGet['mode'] = BaseScene.dataGet['mode'] === undefined ? 0 : parseInt(BaseScene.dataGet['mode']);
    }
}

// update (dt) {},
);

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=SceneIntro.js.map
        