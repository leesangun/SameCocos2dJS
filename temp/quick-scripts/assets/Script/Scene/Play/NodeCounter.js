(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Scene/Play/NodeCounter.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '8dd9cVFtylEMbVK4VV4kj07', 'NodeCounter', __filename);
// Script/Scene/Play/NodeCounter.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        labelCounter: cc.Label
    },

    startCounter: function startCounter(callback) {
        this.labelCounter.string = 'READY';

        this.node.setScale(0.1);
        this.node.runAction(cc.sequence(cc.scaleTo(0.2, 1), cc.delayTime(0.8), cc.callFunc(function () {
            this.labelCounter.string = 'STEADY';
            this.node.setScale(0.1);
        }, this), cc.scaleTo(0.2, 1), cc.delayTime(0.8), cc.callFunc(function () {
            this.labelCounter.string = 'GO';
            this.node.setScale(0.1);
        }, this), cc.scaleTo(0.2, 1), cc.delayTime(0.8), cc.callFunc(function () {
            callback();
        }, this), cc.fadeOut(0.5), cc.removeSelf()));
    }
});

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
        //# sourceMappingURL=NodeCounter.js.map
        