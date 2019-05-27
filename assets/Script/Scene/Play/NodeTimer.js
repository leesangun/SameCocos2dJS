var BaseNodeTimer = require('BaseNodeTimer');
cc.Class({
    extends: BaseNodeTimer,

    properties: {
        colorFont:{
            default: cc.Color.WHITE,
            type: cc.Color,
        },
        
        callBack:{
            get(){      return this._callBack;},
            set(value){ this._callBack = value;}
        },
    },

    startTimer(sec, callBack = null) {
        this.callBack = callBack;
        
        sec--;

        this.secEnd = (new Date().getTime() / 1000) + sec;
        this.tempTime = 100;
        this.isRun = true;

        this.labelTime.string = this.getTimeString(sec);
        this.schedule(this.stepSec,  1);
        
        this.setColor(this.colorFont);
    },

    stepSec() {
        var time = this.secEnd - (new Date().getTime() / 1000);
        this.tempTime = 100;

        if (time < -0.5) {
            this.unschedule(this.stepSec);
            this.isRun = false;

            this.labelTimeMill.string = '00';

            if(this.callBack!==null)this.callBack();
            
            return;
        } else {
            this.labelTime.string = this.getTimeString(time);
        }

        if(time <= 4.5) this.setColor(cc.Color.RED);
        else this.setColor(this.colorFont); 
        
    },
    
    setColor(color){
        this.labelTimeMill.node.color = color;
        this.labelTime.node.color = color;
    },

    update(dt) {
        if (!this.isRun) return;

        if (this.tempTime <= 0) {
            this.tempTime = 0;
        } 
        this.labelTimeMill.string = this.prependZero(this.tempTime.toFixed(0),2);
        this.tempTime -= 100 * dt;
    },


    stop(){
        this.unschedule(this.stepSec);
        this.isRun = false;

        if (this.tempTime <= 0) {
            this.tempTime = 0;
        } 
    },

});
