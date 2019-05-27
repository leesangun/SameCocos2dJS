(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Lib/BasePopup.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '31d84FmlodIqKzSi7rmEGHu', 'BasePopup', __filename);
// Script/Lib/BasePopup.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        labelMessage: {
            default: null,
            type: cc.Label
        },

        callback: {
            get: function get() {
                return this._callback;
            },
            set: function set(value) {
                this._callback = value;
            }
        }

    },

    onLoad: function onLoad() {
        //this.callback = null;
    },
    setMessage: function setMessage(message) {
        this.labelMessage.string = message;
    },
    setCallback: function setCallback(callback) {
        this.callback = callback;
    },
    click: function click(event, customEventData) {
        if (this.callback !== null) {
            this.callback(parseInt(customEventData));
        }

        this.node.destroy();
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
        //# sourceMappingURL=BasePopup.js.map
        