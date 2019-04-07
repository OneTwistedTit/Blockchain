var Start_Screen = {
	Start: function(){
		console.log("Game started");
	},
	Update: function(){
		if(Game.click.x && Game.click.y){
			if(Game.Elements["stopButton"].Contains(Game.click.x, Game.click.y)){
				Game.Stop()
			}
		}
	},
	"stopButton": new Rectangle(0, 0, 200, 50, "red"),
	"stopText": new Text(100, 0, "STOP", "40px Arial", "black"),
	"testObj": new Rectangle(400, 400, 75, 75, "green")
}