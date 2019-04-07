var Start_Screen = {
	Start: function(){
		console.log("Game started");
		Game.PlayAudio("Sounds/Start_Screen.mp3");
	},
	Update: function(){
		if(Game.click.x && Game.click.y){
			if(Game.Elements["stopButton"].Contains(Game.click)){
				Game.click.Set(null, null);
				Game.Stop();
			}
			/*if(Game.Elements["playButton"].Contains(Game.click)){
				//Game.Load("")
				Game.click.Set(null, null);
				console.log("Loading Game");
			}*/
		}
	},
	"background": new Rectangle(0, 0, 1080, 768, "rgb(138, 0, 255"),
	"credits": new Text(540, 768 - 15, "Created by John Doe 2019", "15px Comic Sans MS"),
	"titleBG": new Rectangle(120, 35, 796 + 50, 120 + 20, "cyan"),
	"title": new Text(540, 140, "WEENUSMAN", "120px Comic Sans MS"),
	"playButton": new Rectangle(340, 334, 400, 200, "green"),
	"playText": new Text(540, 474, "PLAY", "120px Comic Sans MS"),
	"stopButton": new Circle(0, 0, 50, "red"),
	"stopText": new Text(50, 100 - 35, "STOP", "35px Comic Sans MS")
}
var Game_Selection = {
	Start: function(){
		console.log("Moved to Game Selection");
	},
	Update: function(){

	},

}
