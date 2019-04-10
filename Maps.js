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
			if(Game.Elements["tableTennisIMG"]){
				if(Game.Elements["tableTennisIMG"].rect.Contains(Game.click)){
					Game.click.Set(null, null);
					console.log("Moving to TableTennisThumb");
					Game.Load(TableTennisThumb);
				}
			}
			if(Game.Elements["wormIMG"]){
				if(Game.Elements["wormIMG"].rect.Contains(Game.click)){
					Game.click.Set(null, null);
					console.log("Moving to WormThumb");
					Game.Load(WormThumb);
				}
			}
			if(Game.Elements["barrelRollerIMG"]){
				if(Game.Elements["barrelRollerIMG"].rect.Contains(Game.click)){
					Game.click.Set(null, null);
					console.log("Moving to BarrelRollerThumb");
					Game.Load(BarrelRollerThumb);
				}
			}
			if(Game.Elements["backButton"]){
				if(Game.Elements["backButton"].Contains(Game.click)){
					Game.click.Set(null, null);
					console.log("Moving to Start Screen");
					Game.Load(Start_Screen);
				}
			}
			if(Game.Elements["resetButton"]){
				if(Game.Elements["resetButton"].Contains(Game.click)){
					Game.click.Set(null, null);
					Game.Reset();
				}
			}
		}
	},
	"background": new Rectangle(0, 0, 1080, 768, "black"),
	"tableTennisText": new Text(215, 195, "Table Tennis", "50px Comic Sans MS", null, "white"),
	"tableTennisIMG": new ImageObj(57, 200, 315, 225, "Images/Thumbnails/TableTennisThumb.png"),
	"wormText": new Text(540, 195, "Worm", "50px Comic Sans MS", null, "white"),
	"wormIMG": new ImageObj(382, 200, 315, 225, "Images/Thumbnails/WormThumb.png"),
	"barrelRollerIMG": new ImageObj(708, 200, 315, 225, "Images/Thumbnails/BarrelRollerThumb.png"),
	"barrelRollerText": new Text(865, 200, "Barrel Roller", "50px Comic Sans MS", null, "white"),
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
			console.log("Moving to Game Selection");
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
		/*if(Game.Elements["resetButton"].Contains(Game.click)){
			Game.click.Set(null, null);
			Game.Reset();
		}
		if(Game.Elements["backButton"].Contains(Game.click)){
			Game.click.Set(null, null);
			console.log("Moving to Game Selection");
			Game.Load(Game_Selection);
		}*/
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
	"apple": new Rectangle(365, 430, 25, 25, "red")
	/*"length": new Text(540, 105 - 30, "Length: 26", "60px Comic Sans MS"),
	"backButton": new Rectangle(780, 0, 315, 75, "cyan"),
	"backText": new Text(780 + 150, 60, "<- BACK", "60px Comic Sans MS"),
	"resetButton": new Circle(0, 0, 50, "red"),
	"resetText": new Text(50, 100 - 35, "RESET", "30px Comic Sans MS")*/
}

var BarrelRollerThumb = {
	Start: function(){
		console.log("Loaded BarrelRollerThumb");
	},
	Update: function(){
		if(Game.Elements["resetButton"].Contains(Game.click)){
			Game.click.Set(null, null);
			Game.Reset();
		}
		if(Game.Elements["backButton"].Contains(Game.click)){
			Game.click.Set(null, null);
			console.log("Moving to Game Selection");
			Game.Load(Game_Selection);
		}
	},
	"background": new ImageObj(0, 0, 1080, 768, "Images/BarrelRoller/BarrelRollerBG.png"),
	"floor": new Rectangle(0, 512, 1080, 5, "black"),
	"barrel": new ImageObj(110, 452, 60, 60, "Images/BarrelRoller/BarrelRollerPlayer.png"),
	"barrelRoller": new ImageObj(50, 452, 60, 60, "Images/BarrelRoller/BarrelRollerPlayerRoller.png"),
	"enemyShort": new ImageObj(550, 472, 60, 40, "Images/BarrelRoller/BarrelRollerEnemy.png"),
	"enemyTall": new ImageObj(830, 437, 60, 75, "Images/BarrelRoller/BarrelRollerEnemy.png"),
	"backButton": new Rectangle(780, 0, 315, 75, "cyan"),
	"backText": new Text(780 + 150, 60, "<- BACK", "60px Comic Sans MS"),
	"resetButton": new Circle(0, 0, 50, "red"),
	"resetText": new Text(50, 100 - 35, "RESET", "30px Comic Sans MS")
	
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

var WormGame = {
	Start: function(){
		console.log("Loaded Worm");
		var velocity = new Vector2(1, 0),
			length			
	},
	Update: function(){

	},
	"background": new Rectangle(0, 0, 1080, 768, "white"),
	"border": {
		Draw: function(){
			Game.context.lineWidth = 5;
			Game.context.strokeRect(12, 105, 1055, 655);
		}
	},
	/*


	var vel = [1, 0],
		notStarted = true,
		t = 300,
		lemon = null,
		timeToLemon = 1,
		points = 0,
		gridSize = 20,
		body = [[(gridSize/2|0)-1, (gridSize/2|0)-1]],
		lastMoved = [],
		highScore = Number(localStorage.getItem("highScore")) || 0,
		canvas = document.getElementById("c"),
		squareSize = canvas.width / gridSize,
		ctx = canvas.getContext("2d");

	var ptingImg = new Image();
	ptingImg.src = "pting.png";

	var lemonImg = new Image();
	lemonImg.src = "lemon.png";


	addEventListener("keydown", function(e){
		startGame();

		switch(e.key){
			case "w":
			case "ArrowUp":
				changeVel([0, -1]);
				break;
			case "d":
			case "ArrowRight":
				changeVel([1, 0]);
				break;
			case "s":
			case "ArrowDown":
				changeVel([0, 1]);
				break;
			case "a":
			case "ArrowLeft":
				changeVel([-1, 0]);
				break;

			case "m":
				music.playing() ? music.stop() : music.play();
				localStorage.setItem("mute", music.playing() ? "" : "1");
				break;
		}
	});

	canvas.addEventListener("click", function(e){
		startGame();

		e.preventDefault();
		let bounds = canvas.getBoundingClientRect();
		let x = (e.clientX - bounds.x) - canvas.width/2,
			y = (e.clientY - bounds.y) - canvas.height/2;

		if(y > Math.abs(x)){
			changeVel([0, 1]);
		} else if(-y > Math.abs(x)){
			changeVel([0, -1]);
		} else if(x > Math.abs(y)){
			changeVel([1, 0]);
		} else if(-x > Math.abs(y)){
			changeVel([-1, 0]);
		}
	});

	function startGame(){
		if(notStarted){
			if(!localStorage.getItem("mute"))
				music.play();
			notStarted = false;
			gameLoop();
		}
	}


	function changeVel(v){
		if(lastMoved[1-v.indexOf(0)] != -v[1-v.indexOf(0)] || body.length == 1)
			vel = v;
	}

	function gameOver(m){
		if(points > highScore)
			localStorage.setItem("highScore", points.toString());

		music.stop();
		(new Audio("rarg.mp3")).play().then(function(){
			alert(m + "\n\npting has collected " + points + " lemon" + (points == 1 ? "" : "s"));
			location.reload();
		});
	}

	function draw(){
		ctx.fillStyle = "#222";
		ctx.fillRect(0, 0, canvas.width, canvas.width);

		if(lemon)
			ctx.drawImage(lemonImg, lemon[0] * squareSize, lemon[1] * squareSize, squareSize, squareSize);

		for(var b of body)
			ctx.drawImage(ptingImg, b[0] * squareSize, b[1] * squareSize, squareSize, squareSize);

		ctx.fillStyle = "#fff";
		ctx.font = "20px Georgia";
		ctx.fillText("lemons: " + points, 3, 23);
		ctx.fillText("highscore: " + highScore, 3, 46);
	}

	function gameLoop(){
		let n = [].concat(body[body.length - 1]);

		n[0] += vel[0];
		n[1] += vel[1];

		if(n[0] >= gridSize || n[0] < 0 || n[1] >= gridSize || n[1] < 0)
			return gameOver("you ran into a wall and binged your head :(");

		for(var b of body){
			if(b[0] == n[0] && b[1] == n[1])
				return gameOver("you have crashed into one of your fellow ptings, causing a quite a dispute :(");
		}

		if(timeToLemon <= 0 && !lemon){
			timeToLemon = 10;
			lemon = [(Math.random() * gridSize)|0, (Math.random() * gridSize)|0];
			t = Math.max(t - (t/20)|0, 100);
		} else
			timeToLemon--;

		if(lemon)
			if(body[body.length-1][0] == lemon[0] && body[body.length-1][1] == lemon[1]){
				lemon = null;
				points += 1;
				(new Audio("munch.mp3")).play();

				body = [body[0]].concat(body);
			}

		lastMoved = vel;

		body.push(n);
		body = body.slice(1);

		draw();
		setTimeout(function(){
			gameLoop();
		}, t);
	}
	
	draw();

	*/
	"gameArea": new Rectangle(15, 108, 1050, 650)
	//"score": new Text(540, 78, "Length: 1")

}