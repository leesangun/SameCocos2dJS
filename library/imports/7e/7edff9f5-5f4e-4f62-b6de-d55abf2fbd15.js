"use strict";
cc._RF.push(module, '7edffn1X05PYrbe1Vq/L70V', 'NodeTimerUp');
// Script/Scene/Play/NodeTimerUp.js

'use strict';

var BaseNodeTimer = require('BaseNodeTimer');
cc.Class({
    extends: BaseNodeTimer,

    properties: {},

    startTimer: function startTimer() {
        this.tempTime = 0;
        this.isRun = true;

        this.secEnd = new Date().getTime() / 1000;

        this.labelTime.string = this.getTimeString(0);
        this.schedule(this.stepSec, 1);
    },
    stepSec: function stepSec() {
        this.tempTime = 0;
        this.labelTime.string = this.getTimeString(this.getSec());
    },
    update: function update(dt) {
        if (!this.isRun) return;

        if (this.tempTime >= 100) {
            this.tempTime = 99;
        }
        this.labelTimeMill.string = this.prependZero(this.tempTime.toFixed(0), 2);

        this.tempTime += 100 * dt;
    },
    stop: function stop(callBack) {
        this.unschedule(this.stepSec);
        this.isRun = false;

        this.node.runAction(cc.sequence(cc.delayTime(0.5), cc.callFunc(function () {
            if (this.tempTime >= 100) {
                this.tempTime = 99;
            }
            var sec = Math.floor(this.getSec());
            var secM = Math.floor(this.tempTime);
            this.labelTime.string = this.getTimeString(sec);
            this.labelTimeMill.string = this.prependZero(secM.toFixed(0), 2);

            callBack(sec, secM);
        }, this)));
    },
    getSec: function getSec() {
        return new Date().getTime() / 1000 - this.secEnd;
    }
});

cc._RF.pop();