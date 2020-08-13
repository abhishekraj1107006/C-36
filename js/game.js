class Game {
    constructor(){}
    getState(){
        var gameStateref = database.ref ('gameState');
        gameStateref.on ("value",function(data){
            gameState = data.val ();
        })
    }
    update (state){
        database.ref('/').update({
            gameState:state
        })
    }
    async start(){
        if(gameState == 0){
            player = new Player();
            var pcref = await database.ref('playerCount').once("value");
            if(pcref.exists()){
                playerCount = pcref.val();
                 player.getCount();
            }
            form = new Form();
            form.display();
        }
    }
    play(){
        form.hide(); 
        textSize(30);
        text("gamestarted",120,100);
        Player.getplayerinfo();
        if(allplayer !== undefined){
            var displayposition = 130;
            for(var plr in allplayer){
                if(plr == "player"+player.index){
                    fill ("red");
                               
                }else{
                    fill("black");
                }
                displayposition += 20;
                textSize(15);
                text(allplayer[plr].name+" : "+allplayer[plr].distance,120,displayposition);
            }
        }   
        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance += 50;
            player.update ();
        }
    }
}