cc.Class({
    extends: cc.Component,

    properties: {
        labelCounter:cc.Label,
    },


    startCounter(callback){
        this.labelCounter.string = 'READY';

        this.node.setScale(0.1);
        this.node.runAction(
            cc.sequence(
                cc.scaleTo(0.2,1),
                cc.delayTime(0.8),
                cc.callFunc(
                    function(){
                        this.labelCounter.string = 'STEADY';
                        this.node.setScale(0.1);
                    },
                    this
                ),
                cc.scaleTo(0.2,1),
                cc.delayTime(0.8),
                cc.callFunc(
                    function(){
                        this.labelCounter.string = 'GO';
                        this.node.setScale(0.1);
                    },
                    this
                ),
                cc.scaleTo(0.2,1),
                cc.delayTime(0.8),
                cc.callFunc(
                    function(){
                        callback();
                    },
                    this
                ),
                cc.fadeOut(0.5),
                cc.removeSelf()
            )
        );
    },
    
});
