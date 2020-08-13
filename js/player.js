class Player{
    constructor(){
        this.index = null;
        this.name = null;
        this.distance = 0;
    }
    getCount(){
        var pcref = database.ref('playerCount');
        pcref.on("value",function(data){
            playerCount = data.val();

        })
    }
    updateCount (c){
        database.ref('/').update({
            playerCount:c
        })
    }
    update (){
        var playerindex = "players/player"+this.index;
        database.ref (playerindex).set({
            name:this.name,
            distance:this.distance
        })
    }
    static getplayerinfo(){
        var playerinforef = database.ref('players');
        playerinforef.on("value",(data)=>{
            allplayer = data.val();
        })
    }
}