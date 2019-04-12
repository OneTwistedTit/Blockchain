var Init_Screen = {
	start: function(){
		console.log("Initializing Game...");
	},
	update: function(){
		if(!Game.click.isNull()){
			Game.music.handler.playAudio("Sounds/Start_Screen.mp3");
			Game.click.clear();
			Game.load(Start_Screen);
		}
	},
	"initText": new Text(540, 384, "Click to Play!", "150px Comic Sans MS")
}

var Start_Screen = {
	start: function(){
		console.log("Game started!"); 
	},
	update: function(){
		if(!Game.click.isNull()){
			if(Game.Elements["resetButton"].contains(Game.click)){
				Game.click.clear();
				Game.reset();
			}
			if(Game.Elements["playButton"].contains(Game.click)){
				Game.click.clear();;
				console.log("loading Game");
				Game.load(Game_Selection);
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
	start: function(){
		console.log("Moved to Game Selection");
	},
	update: function(){
		if(!Game.click.isNull()){
			if(Game.Elements["tableTennisIMG"]){
				if(Game.Elements["tableTennisIMG"].rect.contains(Game.click)){
					Game.click.clear();;
					console.log("Moving to TableTennisThumb");
					Game.load(TableTennisThumb);
				}
			}
			if(Game.Elements["wormIMG"]){
				if(Game.Elements["wormIMG"].rect.contains(Game.click)){
					Game.click.clear();;
					console.log("Moving to WormThumb");
					Game.load(WormThumb);
				}
			}
			if(Game.Elements["barrelRollerIMG"]){
				if(Game.Elements["barrelRollerIMG"].rect.contains(Game.click)){
					Game.click.clear();;
					console.log("Moving to BarrelRollerThumb");
					Game.load(BarrelRollerThumb);
				}
			}
			if(Game.Elements["backButton"]){
				if(Game.Elements["backButton"].contains(Game.click)){
					Game.click.clear();;
					console.log("Moving to Start Screen");
					Game.load(Start_Screen);
				}
			}
			if(Game.Elements["resetButton"]){
				if(Game.Elements["resetButton"].contains(Game.click)){
					Game.click.clear();;
					Game.reset();
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
	start: function(){
		console.log("loaded TableTennisThumb");
	},
	update: function(){
		if(!Game.click.isNull()){
			if(Game.Elements["resetButton"].contains(Game.click)){
				Game.click.clear();
				Game.reset();
			}
			if(Game.Elements["backButton"].contains(Game.click)){
				Game.click.clear();
				console.log("Moving to Game Selection");
				Game.load(Game_Selection);
			}
		}
	},
	"background": new Rectangle(0, 0, 1080, 768, "white"),
	"table": new Rectangle(200, 134, 680, 500, "rgba(0, 100, 255"),
	"horizontal": new Rectangle(200, 381, 680, 5, "white"),
	"netBG": new Rectangle(535, 134, 10, 500, "black"),
	"net": new Rectangle(537, 134, 6, 500, "white"),
	"ball": new Circle(300, 550, 7.5, "orange"),
	"leftPlayer": {
		draw: function(){
			Game.context.beginPath();
			Game.context.lineWidth = 20;
			Game.context.strokeStyle = "black";
			Game.context.moveTo(45, 507);
			Game.context.lineTo(55, 607)
			Game.context.stroke();
		}
	},
	"rightPlayer": {
		draw: function(){
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
	start: function(){
		console.log("loaded WormThumb");
	},
	update: function(){
		if(!Game.click.isNull()){
			if(Game.Elements["resetButton"].contains(Game.click)){
				Game.click.clear();
				Game.reset();
			}
			if(Game.Elements["backButton"].contains(Game.click)){
				Game.click.clear();;
				console.log("Moving to Game Selection");
				Game.load(Game_Selection);
			}
		}
	},
	"background": new Rectangle(0, 0, 1080, 768, "white"),
	"border": {
		draw: function(){
			Game.context.lineWidth = 5;
			Game.context.strokeRect(12, 105, 1055, 655);
		}
	},
	"bottomSegment": new Rectangle(62, 655, 200, 25, "green"),
	"middleSegment": new Rectangle(62, 455, 25, 200, "green"),
	"topSegment": new Rectangle(62, 430, 250, 25, "green"),
	"apple": new Rectangle(365, 430, 25, 25, "red"),
	"backButton": new Rectangle(780, 0, 315, 75, "cyan"),
	"backText": new Text(780 + 150, 60, "<- BACK", "60px Comic Sans MS"),
	"resetButton": new Circle(0, 0, 50, "red"),
	"resetText": new Text(50, 100 - 35, "RESET", "30px Comic Sans MS")
}

var BarrelRollerThumb = {
	start: function(){
		console.log("loaded BarrelRollerThumb");
	},
	update: function(){
		if(!Game.click.isNull()){
			if(Game.Elements["resetButton"].contains(Game.click)){
				Game.click.clear();
				Game.reset();
			}
			if(Game.Elements["backButton"].contains(Game.click)){
				Game.click.clear();;
				console.log("Moving to Game Selection");
				Game.load(Game_Selection);
			}
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
	
	//drawing Barrel
	/*"barrelOuter": new Circle(156, 0, 384, "grey"),
	"barrelTop": new Circle(166, 10, 374, "#654321"),
	"barrelLines": {
		draw: function(){
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
	start: function(){
		console.log("loaded Worm");
		Game.gh = {
			direction: [1, 0],
			started: false,
			points: 0,
			gridDim: [42, 26],
			worm: [[20, 12]],
			apple: null,
			prevMovement: [],
			blockSize: 25,
			changeDir: function(v){
				if (v.map(Math.abs).indexOf(1) != this.direction.map(Math.abs).indexOf(1)){
					direction.writeArray(v);
				}
			}
		}
	},
	update: function(){
		if(this.started){
			if(Game.keys){
				if (Game.keys[65]) Game.gh.changeDir(-1, 0);
				if (Game.keys[68]) Game.gh.changeDir(1, 0);
				if (Game.keys[87]) Game.gh.changeDir(0, -1);
				if (Game.keys[83]) Game.gh.changeDir(0, 1);
			}

		}
	},
	"background": new Rectangle(0, 0, 1080, 768, "white"),
	"border": {
		draw: function(){
			Game.context.lineWidth = 5;
			Game.context.strokeRect(12, 105, 1055, 655);
		}
	},
	"GameArea": new Rectangle(15, 108, 1050, 650),
	"player": {
		draw: function(){
			if(Game.gh != null){
				for(var part of Game.gh.worm){
					Game.context.fillStyle = "green";
					Game.context.fillRect(part[0] * Game.gh.blockSize + 15, part[1] * Game.gh.blockSize + 108, Game.gh.blockSize, Game.gh.blockSize);
				}
			}
		}
	}

	/*


	var vel = [1, 0],
		notstarted = true,
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
		if(notstarted){
			if(!localStorage.getItem("mute"))
				music.play();
			notstarted = false;
			GameLoop();
		}
	}


	function changeVel(v){
		if(lastMoved[1-v.indexOf(0)] != -v[1-v.indexOf(0)] || body.length == 1)
			vel = v;
	}


	function GameOver(m){
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

	function GameLoop(){
		let n = [].concat(body[body.length - 1]);

		n[0] += vel[0];
		n[1] += vel[1];

		if(n[0] >= gridSize || n[0] < 0 || n[1] >= gridSize || n[1] < 0)
			return GameOver("you ran into a wall and binged your head :(");

		for(var b of body){
			if(b[0] == n[0] && b[1] == n[1])
				return GameOver("you have crashed into one of your fellow ptings, causing a quite a dispute :(");
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
			GameLoop();
		}, t);
	}
	
	draw();

	*/
	
	//"score": new Text(540, 78, "Length: 1")

}