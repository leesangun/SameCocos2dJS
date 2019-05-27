(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Scene/Play/BaseNodeTimer.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '40a0fk3dENNDZ0hbA6N8RWK', 'BaseNodeTimer', __filename);
// Script/Scene/Play/BaseNodeTimer.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        labelTime: cc.Label,
        labelTimeMill: cc.Label
    },

    prependZero: function prependZero(num, len) {
        while (num.toString().length < len) {
            num = "0" + num;
        }if (num.toString().length > len) return '00';
        return num;
    },
    getTimeString: function getTimeString(sec) {
        sec = Math.round(sec);
        //var hours = Math.floor(sec / (60 * 60));

        var divisor_for_minutes = sec % (60 * 60);
        var minutes = Math.floor(divisor_for_minutes / 60);

        var divisor_for_seconds = divisor_for_minutes % 60;
        var seconds = Math.ceil(divisor_for_seconds);

        return ("0" + seconds).slice(-2) + ':';
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
        //# sourceMappingURL=BaseNodeTimer.js.map
        