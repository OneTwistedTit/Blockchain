function startGame() {
  Game.start();
  Game.load(Init_Screen);
}
function updateGame(){
  	Game.clear();
  	Game.frame++;
  	for (var i = 0; i < Object.keys(Game.Elements).length; i++) {
    	Game.Elements[Object.keys(Game.Elements)[i]].draw();
    	Game.updateElements();
 	}
  	if (Game.keys) {
      		if (Game.keys[77]){ 
      		Game.music.handler.mute();
      		Game.keys[77] = false;
      	}
  	}
}

