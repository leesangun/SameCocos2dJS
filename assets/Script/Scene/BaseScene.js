cc.Class({
    extends: cc.Component,

    properties: {
        prefabPopup2: {
            default: null,
            type: cc.Prefab,
        },
    },

    clickSceneIntro(){
        var self = this;
        this.startPopup2('종료?',function(index){
            if(index === 1){
                self.sceneIntro();
            }
        }); 
    },
    clickScenePlay(){
        cc.director.loadScene("Play");  
    },
    sceneIntro(){
        cc.director.loadScene("Intro"); 
    },

    startPopup2(message, callback){
        if(this.prefabPopup2 === null){
            if (confirm(message)){
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

    getCanvasNode: function(){
        return cc.find('Canvas');
    },
});
