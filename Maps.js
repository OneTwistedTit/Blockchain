var Start_Screen = {
	Start: function(){
		console.log("Game started");
		Game.PlayAudio("Sounds/Start_Screen.mp3");
	},
	Update: function(){
		if(Game.click.x && Game.click.y){
			if(Game.Elements["resetButton"].Contains(Game.click)){
				Game.click.Set(null, null);
				Game.Reset();
			}
			if(Game.Elements["playButton"].Contains(Game.click)){
				Game.click.Set(null, null);
				console.log("Loading Game");
				Game.Load(Game_Selection);
			}
		}
	},
	"background": new Rectangle(0, 0, 1080, 768, "rgb(138, 0, 255"),
	"credits": new Text(540, 768 - 15, "Created by John Doe 2019", "15px Comic Sans MS"),
	"titleBG": new Rectangle(120, 35, 796 + 50, 120 + 20, "cyan"),
	"title": new Text(540, 140, "BLOCKCHAIN", "120px Comic Sans MS"),
	"playButton": new Rectangle(340, 334, 400, 200, "green"),
	"playText": new Text(540, 474, "PLAY", "120px Comic Sans MS"),
	"resetButton": new Circle(0, 0, 50, "red"),
	"resetText": new Text(50, 100 - 35, "RESET", "30px Comic Sans MS")
}
var Game_Selection = {
	Start: function(){
		console.log("Moved to Game Selection");
	},
	Update: function(){
		if(Game.click.x && Game.click.y){
			if(Game.Elements["resetButton"].Contains(Game.click)){
				Game.click.Set(null, null);
				Game.Reset();
			}
			if(Game.Elements["backButton"].Contains(Game.click)){
				Game.click.Set(null, null);
				console.log("Moving to Start Screen");
				Game.Load(Start_Screen);
			}
			if(Game.Elements["tableTennisIMG"].rect.Contains(Game.click)){
				Game.click.Set(null, null);
				console.log("Moving to PingPongThumb");
				Game.Load(TableTennisThumb);
			}
		}
	},
	"background": new Rectangle(0, 0, 1080, 768, "black"),
	"tableTennisText": new Text(215, 195, "Table Tennis", "50px Comic Sans MS", null, "white"),
	"tableTennisIMG": new ImageObj(57, 200, 315, 225, "Images/TableTennisThumb.png"),
	"wormButton": new Rectangle(382, 200, 315, 225, "white"),
	"footballButton": new Rectangle(708, 200, 315, 225, "white"),
	"backButton": new Rectangle(780, 0, 315, 75, "cyan"),
	"backText": new Text(780 + 150, 60, "<- BACK", "60px Comic Sans MS"),
	"resetButton": new Circle(0, 0, 50, "red"),
	"resetText": new Text(50, 100 - 35, "RESET", "30px Comic Sans MS")
}

var TableTennisThumb = {
	Start: function(){

	},
	Update: function(){
		if(Game.Elements["resetButton"].Contains(Game.click)){
			Game.click.Set(null, null);
			Game.Reset();
		}
		if(Game.Elements["backButton"].Contains(Game.click)){
			Game.click.Set(null, null);
			console.log("Moving to Start Screen");
			Game.Load(Game_Selection);
		}
	},
	"background": new Rectangle(0, 0, 1080, 768, "white"),
	"table": new Rectangle(200, 134, 680, 500, "rgba(0, 100, 255"),
	"horizontal": new Rectangle(200, 381, 680, 5, "white"),
	"netBG": new Rectangle(535, 134, 10, 500, "black"),
	"net": new Rectangle(537, 134, 6, 500, "white"),
	"ball": new Circle(300, 550, 7.5, "orange"),
	"leftPlayer": {
		Draw: function(){
			Game.context.beginPath();
			Game.context.lineWidth = 20;
			Game.context.strokeStyle = "black";
			Game.context.moveTo(45, 507);
			Game.context.lineTo(55, 607)
			Game.context.stroke();
		}
	},
	"rightPlayer": {
		Draw: function(){
			Game.context.beginPath();
			Game.context.lineWidth = 20;
			Game.context.strokeStyle = "black";
			Game.context.moveTo(1020, 150);
			Game.context.lineTo(1040, 250)
			Game.context.stroke();
		}
	},
	"backButton": new Rectangle(780, 0, 315, 75, "cyan"),
	"backText": new Text(780 + 150, 60, "<- BACK", "60px Comic Sans MS"),
	"resetButton": new Circle(0, 0, 50, "red"),
	"resetText": new Text(50, 100 - 35, "RESET", "30px Comic Sans MS")
}
