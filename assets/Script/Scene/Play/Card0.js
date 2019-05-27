var BaseCard = require('BaseCard');
var TIME = 0.1;
cc.Class({
    extends: BaseCard,

    properties: {
        buttonCard:cc.Button,
        spriteFrameOns:{
            default:[],   
            type:cc.SpriteFrame,
        },
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

    start () {
        this._spriteCard = this.buttonCard.getComponent(cc.Sprite);
        this._spriteFrameOff = this._spriteCard.spriteFrame;
    },

    click(){
        if(BaseCard.isLock){
            return;
        }else if(BaseCard.cardOpen === null){
            BaseCard.cardOpen = this;
        }else{
            BaseCard.isLock = true;
            this.node.runAction(
                cc.sequence(
                    cc.delayTime(TIME*5),
                    cc.callFunc(
                        function(){
                            if(BaseCard.cardOpen.index === this.index){
                                BaseCard.cardOpen.end();
                                this.end();
                            }else{
                                BaseCard.cardOpen.close();
                                this.close();
                            }
                            BaseCard.isLock = false;
                            BaseCard.cardOpen = null;
                        },
                        this
                    )
                )
            );
        }
        

        this.buttonCard.interactable = false;
        this.buttonCard.node.runAction(
            cc.sequence(
                cc.scaleTo(TIME,0,1),
                cc.callFunc(
                    function(){
                        this._spriteCard.spriteFrame = this.spriteFrameOns[this.index];
                    },
                    this
                ),
                cc.scaleTo(TIME,1,1)
            )
            
        );
    },

    open(){
        this.buttonCard.node.runAction(
            cc.sequence(
                cc.scaleTo(TIME,0,1),
                cc.callFunc(
                    function(){
                        this._spriteCard.spriteFrame = this.spriteFrameOns[this.index];
                    },
                    this
                ),
                cc.scaleTo(TIME,1,1),
                cc.callFunc(
                    function(){
                        this.buttonCard.interactable = false;
                    },
                    this
                )
            )
        );
    },

    close(){
        this.buttonCard.node.runAction(
            cc.sequence(
                cc.scaleTo(TIME,0,1),
                cc.callFunc(
                    function(){
                        this._spriteCard.spriteFrame = this._spriteFrameOff;
                    },
                    this
                ),
                cc.scaleTo(TIME,1,1),
                cc.callFunc(
                    function(){
                        this.buttonCard.interactable = true;
                    },
                    this
                )
            )
        );
    },

    end(){
        this.node.runAction(
            cc.sequence(
                cc.fadeOut(TIME),
                cc.callFunc(
                    function(){
                        this.node.destroy();
                        this.callBackEnd();
                    },
                    this
                )
            )
        );
    },
});
