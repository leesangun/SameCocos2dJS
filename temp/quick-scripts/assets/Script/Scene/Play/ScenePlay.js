(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Scene/Play/ScenePlay.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '24f5cOZ289EW7RoR7h5H+a2', 'ScenePlay', __filename);
// Script/Scene/Play/ScenePlay.js

'use strict';

var BaseCard = require('BaseCard');
var NodeTimer = require('NodeTimer');
var NodeTimerUp = require('NodeTimerUp');
var NodeCounter = require('NodeCounter');
var BaseScene = require('BaseScene');
cc.Class({
    extends: BaseScene,

    properties: {
        prefabCard0: cc.Prefab,
        nodeTimer: NodeTimer,
        nodeTimerUp: NodeTimerUp,
        nodeCounter: NodeCounter,
        nodeRootCard: cc.Node
    },

    start: function start() {
        BaseCard.isLock = false;
        BaseCard.cardOpen = null;

        var X;
        var Y;
        var array;
        switch (BaseScene.dataGet['mode']) {
            case 0:
                {
                    X = 4;
                    Y = 4;
                    array = this.shuffle(this.createArray(8, 2));
                    break;
                }
            case 1:
                {
                    X = 6;
                    Y = 4;
                    array = this.shuffle(this.createArray(6, 4));
                    break;
                }
            case 2:
                {
                    X = 8;
                    Y = 8;
                    array = this.shuffle(this.createArray(8, 8));
                    break;
                }
            default:
                {
                    X = 4;
                    Y = 4;
                    array = this.shuffle(this.createArray(8, 2));
                    break;
                }
        }

        var GAP = 100;
        BaseCard.count = X * Y;

        var halfX;
        if (X % 2 === 0) halfX = -GAP * (X / 2 - 0.5);else halfX = -GAP * Math.floor(X / 2);

        var halfY;
        if (Y % 2 === 0) halfY = -GAP * (Y / 2 - 0.5);else halfY = -GAP * Math.floor(Y / 2);

        var i = 0;
        var baseCard;
        var self = this;
        var arrayCards = [];
        for (var y = 0; y < Y; y++) {
            for (var x = 0; x < X; x++) {
                var nodeCard0 = cc.instantiate(this.prefabCard0);
                this.nodeRootCard.addChild(nodeCard0);
                nodeCard0.setPosition(cc.p(halfX + GAP * x, halfY + GAP * y));
                nodeCard0.setScale(0.25);
                baseCard = nodeCard0.getComponent(BaseCard);
                arrayCards.push(baseCard);
                baseCard.index = array[i];
                baseCard.open();
                baseCard.callBackEnd = function () {
                    BaseCard.count--;
                    if (BaseCard.count === 0) {
                        self.nodeTimer.stop();
                        self.nodeTimerUp.stop(function (sec, timeTemp) {
                            alert(sec + ':' + timeTemp);
                            self.sceneIntro();
                        });
                    }
                };
                i++;
            }
        }

        this.nodeCounter.startCounter(function () {
            for (var i = 0; i < arrayCards.length; i++) {
                arrayCards[i].close();
            }

            self.nodeTimer.startTimer(300, function () {
                alert('time over');
            });

            self.nodeTimerUp.startTimer();
        });
    },
    shuffle: function shuffle(a) {
        var j, x, i;
        for (i = a.length; i; i -= 1) {
            j = Math.floor(Math.random() * i);
            x = a[i - 1];
            a[i - 1] = a[j];
            a[j] = x;
        }

        return a;
    },
    createArray: function createArray(size, same) {
        var result = [];

        for (var i = 0; i < size; i++) {
            for (var j = 0; j < same; j++) {
                result.push(i);
            }
        }

        return result;
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
        //# sourceMappingURL=ScenePlay.js.map
        