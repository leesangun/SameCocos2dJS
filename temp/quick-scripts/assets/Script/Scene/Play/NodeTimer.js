(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Scene/Play/NodeTimer.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '2284eHh6YNMDqQ/neb3DKa3', 'NodeTimer', __filename);
// Script/Scene/Play/NodeTimer.js

'use strict';

var BaseNodeTimer = require('BaseNodeTimer');
cc.Class({
    extends: BaseNodeTimer,

    properties: {
        colorFont: {
            default: cc.Color.WHITE,
            type: cc.Color
        },

        callBack: {
            get: function get() {
                return this._callBack;
            },
            set: function set(value) {
                this._callBack = value;
            }
        }
    },

    startTimer: function startTimer(sec) {
        var callBack = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        this.callBack = callBack;

        sec--;

        this.secEnd = new Date().getTime() / 1000 + sec;
        this.tempTime = 100;
        this.isRun = true;

        this.labelTime.string = this.getTimeString(sec);
        this.schedule(this.stepSec, 1);

        this.setColor(this.colorFont);
    },
    stepSec: function stepSec() {
        var time = this.secEnd - new Date().getTime() / 1000;
        this.tempTime = 100;

        if (time < -0.5) {
            this.unschedule(this.stepSec);
            this.isRun = false;

            this.labelTimeMill.string = '00';

            if (this.callBack !== null) this.callBack();

            return;
        } else {
            this.labelTime.string = this.getTimeString(time);
        }

        if (time <= 4.5) this.setColor(cc.Color.RED);else this.setColor(this.colorFont);
    },
    setColor: function setColor(color) {
        this.labelTimeMill.node.color = color;
        this.labelTime.node.color = color;
    },
    update: function update(dt) {
        if (!this.isRun) return;

        if (this.tempTime <= 0) {
            this.tempTime = 0;
        }
        this.labelTimeMill.string = this.prependZero(this.tempTime.toFixed(0), 2);
        this.tempTime -= 100 * dt;
    },
    stop: function stop() {
        this.unschedule(this.stepSec);
        this.isRun = false;

        if (this.tempTime <= 0) {
            this.tempTime = 0;
        }
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
        //# sourceMappingURL=NodeTimer.js.map
        