(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Scene/BaseScene.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '5f5dbMeE85G/6vC1Kc+hAK5', 'BaseScene', __filename);
// Script/Scene/BaseScene.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        prefabPopup2: {
            default: null,
            type: cc.Prefab
        }
    },

    clickSceneIntro: function clickSceneIntro() {
        var self = this;
        this.startPopup2('종료?', function (index) {
            if (index === 1) {
                self.sceneIntro();
            }
        });
    },
    clickScenePlay: function clickScenePlay() {
        cc.director.loadScene("Play");
    },
    sceneIntro: function sceneIntro() {
        cc.director.loadScene("Intro");
    },
    startPopup2: function startPopup2(message, callback) {
        if (this.prefabPopup2 === null) {
            if (confirm(message)) {
                callback();
            }
            return;
        }

        var popup = cc.instantiate(this.prefabPopup2);

        var popup2 = popup.getComponent('BasePopup');
        popup2.setMessage(message);
        popup2.setCallback(callback);
        this.getCanvasNode().addChild(popup);
    },


    getCanvasNode: function getCanvasNode() {
        return cc.find('Canvas');
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
        //# sourceMappingURL=BaseScene.js.map
        