var Init_Screen = {
  start: function() {
    console.log("Initializing Game...");
  },
  update: function() {
    if (!Game.click.isNull()) {
      Game.music.handler.playAudio("Sounds/Start_Screen.mp3");

      Game.load(Start_Screen);
    }
  },
  elements: {
    initText: new Text(540, 384, "Click to Play!", "150px Comic Sans MS")
  }
}

var Start_Screen = {
  start: function() {
    console.log("Game started!");
  },
  update: function() {
    if (!Game.click.isNull()) {
      if (this.elements["playButton"].container.contains(Game.click)) {

        console.log("loading Game");
        Game.load(Game_Selection);
      }
    }
  },
  elements: {
    background: new Rectangle(0, 0, 1080, 768, "rgb(138, 0, 255"),
    credits: new Text(540, 768 - 15, "Created by John Doe 2019", "15px Comic Sans MS"),
    titleBG: new Rectangle(120, 35, 846, 140, "rgba(0, 255, 255, 1)"),
    title: new Text(540, 140, "BLOCKCHAIN", "120px Comic Sans MS"),
    playButton: new RectButton(340, 334, 400, 200, "green", "PLAY", "120px Comic Sans MS"),
  }
}
var Game_Selection = {
  start: function() {
    console.log("Moved to Game Selection");
  },
  update: function() {
    if (!Game.click.isNull()) {
      if (this.elements["tableTennisIMG"].rect.contains(Game.click)) {
        console.log("Moving to TableTennisThumb");
        Game.load(TableTennisThumb);
      }
      if (this.elements["wormIMG"].rect.contains(Game.click)) {
        console.log("Moving to Worm");
        Game.load(Worm);
      }
      if (this.elements["hopperIMG"].rect.contains(Game.click)) {
        console.log("Moving to Hopper");
        Game.load(Hopper);
      }
      if (this.elements["backButton"].container.contains(Game.click)) {
        console.log("Moving to Game Selection");
        Game.load(Start_Screen);
      }

    }
  },
  elements: {
    background: new Rectangle(0, 0, 1080, 768, "black"),
    tableTennisText: new Text(215, 195, "Table Tennis", "50px Comic Sans MS", null, "white"),
    tableTennisIMG: new ImageObj(57, 200, 315, 225, "Images/Thumbnails/TableTennisThumb.png"),
    wormText: new Text(540, 195, "Worm", "50px Comic Sans MS", null, "white"),
    wormIMG: new ImageObj(382, 200, 315, 225, "Images/Thumbnails/WormThumb.png"),
    hopperIMG: new ImageObj(708, 200, 315, 225, "Images/Thumbnails/BarrelRollerThumb.png"),
    hopperText: new Text(865, 200, "Hopper", "50px Comic Sans MS", null, "white"),
    backButton: new RectButton(780, 0, 315, 75, "blue", "<- BACK", "60px Comic Sans MS")
  }
}

var TableTennisThumb = {
  start: function() {
    console.log("loaded TableTennisThumb");
  },
  update: function() {
    if (!Game.click.isNull()) {
      if (this.elements["backButton"].container.contains(Game.click)) {
        console.log("Moving to Game Selection");
        Game.load(Game_Selection);
      }
    }
  },
  elements: {
    background: new Rectangle(0, 0, 1080, 768, "white"),
    table: new Rectangle(200, 134, 680, 500, "rgba(0, 100, 255"),
    horizontal: new Rectangle(200, 381, 680, 5, "white"),
    netBG: new Rectangle(535, 134, 10, 500, "black"),
    net: new Rectangle(537, 134, 6, 500, "white"),
    ball: new Circle(300, 550, 7.5, "orange"),
    leftPlayer: {
      enabled: true,
      draw: function() {
        Game.context.beginPath();
        Game.context.lineWidth = 20;
        Game.context.strokeStyle = "black";
        Game.context.moveTo(45, 507);
        Game.context.lineTo(55, 607)
        Game.context.stroke();
      }
    },
    rightPlayer: {
      enabled: true,
      draw: function() {
        Game.context.beginPath();
        Game.context.lineWidth = 20;
        Game.context.strokeStyle = "black";
        Game.context.moveTo(1020, 150);
        Game.context.lineTo(1040, 250)
        Game.context.stroke();
      }
    },
    backButton: new RectButton(780, 0, 315, 75, "blue", "<- BACK", "60px Comic Sans MS")
  },
}

/*var WormThumb = {
  start: function() {
    console.log("loaded WormThumb");
  },
  update: function() {
    if (!Game.click.isNull()) {
      if (this.elements["backButton"].container.contains(Game.click)) {
        console.log("Moving to Game Selection");
        Game.load(Game_Selection);
      }
    }
  },
  elements: {
    "background": new Rectangle(0, 0, 1080, 768, "white"),
    "border": {
      enabled: true,
      draw: function() {
        Game.context.lineWidth = 5;
        Game.context.strokeRect(12, 105, 1055, 655);
      }
    },
    "bottomSegment": new Rectangle(62, 655, 200, 25, "green"),
    "middleSegment": new Rectangle(62, 455, 25, 200, "green"),
    "topSegment": new Rectangle(62, 430, 250, 25, "green"),
    "apple": new Rectangle(365, 430, 25, 25, "red"),
    "backButton": new RectButton(780, 0, 315, 75, "blue", "<- BACK", "60px Comic Sans MS")
  }
}*/

var BarrelRollerThumb = {
  start: function() {
    console.log("loaded BarrelRollerThumb");
  },
  update: function() {
    if (!Game.click.isNull()) {
      if (this.elements["backButton"].container.contains(Game.click)) {
        console.log("Moving to Game Selection");
        Game.load(Game_Selection);
      }
    }
  },
  elements: {
    background: new ImageObj(0, 0, 1080, 768, "Images/BarrelRoller/BarrelRollerBG.png"),
    floor: new Rectangle(0, 512, 1080, 5, "black"),
    barrel: new ImageObj(110, 452, 60, 60, "Images/BarrelRoller/BarrelRollerPlayer.png"),
    barrelRoller: new ImageObj(50, 452, 60, 60, "Images/BarrelRoller/BarrelRollerPlayerRoller.png"),
    enemyShort: new ImageObj(550, 472, 60, 40, "Images/BarrelRoller/BarrelRollerEnemy.png"),
    enemyTall: new ImageObj(830, 437, 60, 75, "Images/BarrelRoller/BarrelRollerEnemy.png"),
    backButton: new RectButton(780, 0, 315, 75, "blue", "<- BACK", "60px Comic Sans MS")
  }
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

var PingPong = {
  start: function(){

  },
  update: function(){

  },
  elements:{

  }
}

var Worm = {
  start: function() {
    console.log("loaded Worm");
    this.dim = [41, 25];
    this.worm = [
      [Math.floor(this.dim[0] / 2), Math.floor(this.dim[1] / 2)]
    ];
    this.apple = null;
    this.direction = [1, 0];
    this.playing = false;
    this.offset = [15, 108];
    this.lastMoved = [1, 0];
    this.points = 0;
    this.ended = false;
    this.newDir = function(v) {
      if (v.map(Math.abs).indexOf(1) != this.lastMoved.map(Math.abs).indexOf(1) || Worm.worm.length == 1) {
        this.direction = v;
      }
    }
    this.move = function() {
      let head = [].concat(this.worm[this.worm.length - 1]);
      head[0] += this.direction[0];
      head[1] += this.direction[1];
      for (part of this.worm) {
        if (part[0] == head[0] && part[1] == head[1]) {
          return false;
        }
      }
      if (head[0] > this.dim[0] || head[0] < 0 || head[1] > this.dim[1] || head[1] < 0) {
        return false;
      }
      if (this.apple != null) {
        this.points = this.worm.length - 1;
        if (head[0] == this.apple[0] && head[1] == this.apple[1]) {
          this.worm = [this.worm[0]].concat(this.worm);
          this.apple = null;
        }
      }
      while (this.apple == null) {
        this.apple = [Math.floor(Math.random() * this.dim[0]), Math.floor(Math.random() * this.dim[1])];
        for (part of this.worm) {
          if (part == this.apple) this.apple = null;
        }
      }
      this.worm.push(head);
      this.worm = this.worm.slice(1);
      this.lastMoved = this.direction;
      return true;
    }
  },
  update: function() {
    if (!Game.click.isNull()) {
      if(this.elements["restart"].enabled){
        if (this.elements["restart"].container.contains(Game.click)) {
          console.log("Moving to Worm");
          Game.load(Worm);
        }
      }
      if (this.elements["backButton"].container.contains(Game.click)) {
        console.log("Moving to Game Selection");
        Game.load(Game_Selection);
      }
    }
    this.elements.score.value = `Points: ${this.points}`;
    if (this.playing && !this.ended) {
      if (Game.keys) {
        if (Game.keys[65] || Game.keys[37]) this.newDir([-1, 0]);
        if (Game.keys[68] || Game.keys[39]) this.newDir([1, 0]);
        if (Game.keys[87] || Game.keys[38]) this.newDir([0, -1]);
        if (Game.keys[83] || Game.keys[40]) this.newDir([0, 1]);
      }
      if (Game.checkTick(8)) {
        this.ended = !this.move()
      }
    }
    if (this.ended) {
      this.playing = false;
      this.elements.restart.enabled = true;
    } else {
      this.playing = true;
      this.elements.restart.enabled = false;
    }
  },
  elements: {
    background: new Rectangle(0, 0, 1080, 768, "white"),
    border: {
      enabled: true,
      draw: function() {
        Game.context.lineWidth = 5;
        Game.context.strokeRect(12, 105, 1055, 655);
      }
    },
    player: {
      enabled: true,
      draw: function() {
        if (Worm.worm != null) {
          for (part of Worm.worm) {
            Game.context.fillStyle = "green";
            Game.context.fillRect(part[0] * 25 + Worm.offset[0], part[1] * 25 + Worm.offset[1], 25, 25);
          }
        }
      }
    },
    apple: {
      enabled: true,
      draw: function() {
        if (Worm.apple != null) {
          Game.context.fillStyle = "red";
          Game.context.fillRect(Worm.apple[0] * 25 + Worm.offset[0], Worm.apple[1] * 25 + Worm.offset[1], 25, 25);
        }
      }
    },
    score: new Text(540, 98, "Points: 0", "80px Comic Sans MS"),
    backButton: new RectButton(780, 0, 315, 75, "blue", "<- BACK", "60px Comic Sans MS"),
    restart: new RectButton(65, 138, 950, 589, "rgba(31, 31, 31, 0.875)", "Click to play again!", "100px Comic Sans MS")
  }
}

Hopper = {
  start: function(){
    this.player = {
      jumping: true,
      x: Hopper.elements.player.x,
      y: Hopper.elements.player.y,
      height: Hopper.elements.player.height,
      velY: 0
    }
    this.playing = true;
    this.ended = false;
    this.obstacles = [];
    this.acceleration = 0.01;
    this.speed = 20;
    this.points = 0;
    this.move = function(){
      for (i = this.obstacles.length - 1; i >= 0; i--){
        if(this.obstacles[i].x > -64){
          this.obstacles[i].x -= this.speed;
          if(this.obstacles[i].intersects(this.elements.player)){
            return false;
          }
        } else {
          this.obstacles.splice(i, 1);
        }
      }
      this.player.velY += 4; //gravity
      this.player.y += this.player.velY;
      this.player.velY *= 0.85; //friction
      if(this.player.y + this.player.height > this.elements.floor.y){
        this.player.jumping = false;
        this.player.velY = 0;
        this.player.y = this.elements.floor.y - this.player.height;
      }
      this.elements.player.y = this.player.y;
      return true;
    }
  },
  update: function(){
    if (!Game.click.isNull()) {
      if(this.elements["restart"].enabled){
        if (this.elements["restart"].container.contains(Game.click)) {
          console.log("Moving to Hopper");
          Game.load(Hopper);
        }
      }
      if (this.elements["backButton"].container.contains(Game.click)) {
        console.log("Moving to Game Selection");
        Game.load(Game_Selection);
      }
    }
    if (Game.keys) {
      if ((Game.keys[87] || Game.keys[38] || Game.keys[32]) && !this.player.jumping){
        this.player.velY -= 64;
        this.player.jumping = true;
      }
    }
    if(Game.checkTick(1000 / this.speed)){
      this.obstacles.push(new Rectangle(1080, 464, 48, 48, "red"))
    }
    if(this.playing && !this.ended){
      this.ended = !this.move()
      this.points++;
    }
    this.elements.score.value = `Points: ${this.points}`;
    if (this.ended) {
      this.playing = false;
      this.elements.restart.enabled = true;
    } else {
      this.playing = true;
      this.elements.restart.enabled = false;
    }



  },
  elements: {
    background: new Rectangle(0, 0, 1080, 768, "white"),
    floor: new Rectangle(0, 512, 1080, 5, "black"),
    player: new Rectangle(64, 448, 64, 64, "green"),
    obstacles: {
      enabled: true,
      draw: function(){
        for (i = Hopper.obstacles.length - 1; i >= 0; i--){
          Hopper.obstacles[i].draw();
        }
      }
    },
    score: new Text(540, 98, "Points: 0", "80px Comic Sans MS"),
    backButton: new RectButton(780, 0, 315, 75, "blue", "<- BACK", "60px Comic Sans MS"),
    restart: new RectButton(65, 138, 950, 589, "rgba(31, 31, 31, 0.875)", "Click to play again!", "100px Comic Sans MS")
  }
}
