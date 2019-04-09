var Init_Screen = {
	Start: function(){
		console.log("Initializing game...");
		Game.PlayAudio("Sounds/Start_Screen.mp3");
		Game.Load(Start_Screen);
	},
	Update: function(){
		
	}
}

var Start_Screen = {
	Start: function(){
		console.log("Game started!"); 
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
			if(Game.Elements["tableTennisIMG"].rect.Contains(Game.click)){
				Game.click.Set(null, null);
				console.log("Moving to TableTennisThumb");
				Game.Load(TableTennisThumb);
			}
			if(Game.Elements["wormIMG"].rect.Contains(Game.click)){
				Game.click.Set(null, null);
				console.log("Moving to WormThumb");
				Game.Load(WormThumb);
			}
			if(Game.Elements["backButton"].Contains(Game.click)){
				Game.click.Set(null, null);
				console.log("Moving to Start Screen");
				Game.Load(Start_Screen);
			}
			if(Game.Elements["resetButton"].Contains(Game.click)){
				Game.click.Set(null, null);
				Game.Reset();
			}
		}
	},
	"background": new Rectangle(0, 0, 1080, 768, "black"),
	"tableTennisText": new Text(215, 195, "Table Tennis", "50px Comic Sans MS", null, "white"),
	"tableTennisIMG": new ImageObj(57, 200, 315, 225, "Images/Thumbnails/TableTennisThumb.png"),
	"wormText": new Text(540, 195, "Worm", "50px Comic Sans MS", null, "white"),
	"wormIMG": new ImageObj(382, 200, 315, 225, "Images/Thumbnails/WormThumb.png"),
	//"barrelRollerButton": new ImageObj(708, 200, 315, 225, "Images/Thumbnails/BarrelRollerThumb.png"),
	//"barrelRollerText": new Text
	"backButton": new Rectangle(780, 0, 315, 75, "cyan"),
	"backText": new Text(780 + 150, 60, "<- BACK", "60px Comic Sans MS"),
	"resetButton": new Circle(0, 0, 50, "red"),
	"resetText": new Text(50, 100 - 35, "RESET", "30px Comic Sans MS")
}

var TableTennisThumb = {
	Start: function(){
		console.log("Loaded TableTennisThumb");
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

var WormThumb = {
	Start: function(){
		console.log("Loaded WormThumb");
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
	"border": {
		Draw: function(){
			Game.context.lineWidth = 5;
			Game.context.strokeRect(15, 105, 1050, 650);
		}
	},
	"bottomSegment": new Rectangle(65, 655, 200, 25, "green"),
	"middleSegment": new Rectangle(65, 455, 25, 200, "green"),
	"topSegment": new Rectangle(65, 430, 250, 25, "green"),
	"apple": new Rectangle(365, 430, 25, 25, "red"),
	"length": new Text(540, 105 - 30, "Length: 26", "60px Comic Sans MS"),
	"backButton": new Rectangle(780, 0, 315, 75, "cyan"),
	"backText": new Text(780 + 150, 60, "<- BACK", "60px Comic Sans MS"),
	"resetButton": new Circle(0, 0, 50, "red"),
	"resetText": new Text(50, 100 - 35, "RESET", "30px Comic Sans MS")
}

var BarrelRollerThumb = {
	Start: function(){
		console.log("Loaded BarrelRollerThumb");
	},
	Update: function(){

	},
	"background": new ImageObj(0, 0, 1080, 768, "Images/BarrelRoller/BarrelRollerBG.png"),
	"floor": new Rectangle(0, 512, 1080, 5, "black"),
	"barrel": new ImageObj(110, 452, 60, 60, "Images/BarrelRoller/BarrelRollerPlayer.png"),
	"barrelRoller": new ImageObj(50, 452, 60, 60, "Images/BarrelRoller/BarrelRollerPlayerRoller.png"),
	"enemyShort": new ImageObj(550, 472, 60, 40, "Images/BarrelRoller/BarrelRollerEnemy.png"),
	"enemyTall": new ImageObj(830, 437, 60, 75, "Images/BarrelRoller/BarrelRollerEnemy.png")
	
	//Drawing Barrel
	/*"barrelOuter": new Circle(156, 0, 384, "grey"),
	"barrelTop": new Circle(166, 10, 374, "#654321"),
	"barrelLines": {
		Draw: function(){
			Game.context.beginPath();
			Game.context.lineWidth = 5;
			Game.context.moveTo(540, 10);
			Game.context.lineTo(540, 758);
			Game.context.stroke();
			Game.context.beginPath();
			Game.context.moveTo(353, 61);
			Game.context.lineTo(353, 709);
			Game.context.stroke();
			Game.context.beginPath();
			Game.context.moveTo(727, 61);
			Game.context.lineTo(727, 709);
			Game.context.stroke();
		}
	},
	"barrelText": new Text(536, 384, "DMC", "80px Comic Sans MS"),*/
}
