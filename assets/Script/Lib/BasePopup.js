cc.Class({
    extends: cc.Component,

    properties: {
        labelMessage:{
            default: null,
            type: cc.Label,
        },
        
        callback:{
            get(){      return this._callback;},
            set(value){ this._callback = value;}
        },

    },

    onLoad () {
        //this.callback = null;
    },

    
    setMessage(message){
        this.labelMessage.string = message;  

    },
    
    setCallback(callback){
        this.callback = callback;
    },
    
    click(event, customEventData){
        if(this.callback !== null){
            this.callback(parseInt(customEventData));
        }
        
        this.node.destroy();  
    },
    
});
