(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Scene/Play/Card0.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'ac4b2dGw+FHt5v1s4cz45sS', 'Card0', __filename);
// Script/Scene/Play/Card0.js

'use strict';

var BaseCard = require('BaseCard');
var TIME = 0.1;
cc.Class({
    extends: BaseCard,

    properties: {
        buttonCard: cc.Button,
        spriteFrameOns: {
            default: [],
            type: cc.SpriteFrame
        }
        // spriteFrameOff:cc.SpriteFrame,
        //  spriteCard:cc.Sprite,
        /*
                spriteFrameOff:{
                    get(){
                        return this._spriteFrameOff;
                    },
                    set(value){
                        this._spriteFrameOff = value;
                    }
                },
          */
    },

    start: function start() {
        this._spriteCard = this.buttonCard.getComponent(cc.Sprite);
        this._spriteFrameOff = this._spriteCard.spriteFrame;
    },
    click: function click() {
        if (BaseCard.isLock) {
            return;
        } else if (BaseCard.cardOpen === null) {
            BaseCard.cardOpen = this;
        } else {
            BaseCard.isLock = true;
            this.node.runAction(cc.sequence(cc.delayTime(TIME * 5), cc.callFunc(function () {
                if (BaseCard.cardOpen.index === this.index) {
                    BaseCard.cardOpen.end();
                    this.end();
                } else {
                    BaseCard.cardOpen.close();
                    this.close();
                }
                BaseCard.isLock = false;
                BaseCard.cardOpen = null;
            }, this)));
        }

        this.buttonCard.interactable = false;
        this.buttonCard.node.runAction(cc.sequence(cc.scaleTo(TIME, 0, 1), cc.callFunc(function () {
            this._spriteCard.spriteFrame = this.spriteFrameOns[this.index];
        }, this), cc.scaleTo(TIME, 1, 1)));
    },
    open: function open() {
        this.buttonCard.node.runAction(cc.sequence(cc.scaleTo(TIME, 0, 1), cc.callFunc(function () {
            this._spriteCard.spriteFrame = this.spriteFrameOns[this.index];
        }, this), cc.scaleTo(TIME, 1, 1), cc.callFunc(function () {
            this.buttonCard.interactable = false;
        }, this)));
    },
    close: function close() {
        this.buttonCard.node.runAction(cc.sequence(cc.scaleTo(TIME, 0, 1), cc.callFunc(function () {
            this._spriteCard.spriteFrame = this._spriteFrameOff;
        }, this), cc.scaleTo(TIME, 1, 1), cc.callFunc(function () {
            this.buttonCard.interactable = true;
        }, this)));
    },
    end: function end() {
        this.node.runAction(cc.sequence(cc.fadeOut(TIME), cc.callFunc(function () {
            this.node.destroy();
            this.callBackEnd();
        }, this)));
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
        //# sourceMappingURL=Card0.js.map
        