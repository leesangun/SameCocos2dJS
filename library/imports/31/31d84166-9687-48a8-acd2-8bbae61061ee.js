"use strict";
cc._RF.push(module, '31d84FmlodIqKzSi7rmEGHu', 'BasePopup');
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