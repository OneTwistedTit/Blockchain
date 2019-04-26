var InitScreen = {
  start: function() {
    console.log("Initializing Game...");
  },
  update: function() {
    if (!Game.click.isNull()) {
      Game.load(StartScreen);
    }
  },
  elements: {
    initText: new Text(540, 384, "Click to Play!", "150px Comic Sans MS")
  }
}

var StartScreen = {
  start: function() {
    console.log("Game started!");
    Game.music.handler.playAudio("Sounds/Main.mp3", 1.0);
  },
  update: function() {
    if (!Game.click.isNull()) {
      if (this.elements["playButton"].container.contains(Game.click)) {

        console.log("loading Game");
        Game.load(GameSelection);
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
var GameSelection = {
  start: function() {
    console.log("Moved to Game Selection");
    Game.music.handler.playAudio("Sounds/Main.mp3", 1.0);
  },
  update: function() {
    if (!Game.click.isNull()) {
      if (this.elements["pingPongIMG"].rect.contains(Game.click)) {
        console.log("Moving to PingPong");
          Game.music.handler.playAudio("Sounds/PingPong.mp3", 0.5);
        Game.load(PingPong);
      }
      if (this.elements["wormIMG"].rect.contains(Game.click)) {
        console.log("Moving to Worm");
        Game.music.handler.playAudio("Sounds/Worm.mp3", 0.25);
        Game.load(Worm);
      }
      if (this.elements["hopperIMG"].rect.contains(Game.click)) {
        console.log("Moving to Hopper");
        Game.music.handler.playAudio("Sounds/Hopper.mp3", 0.5);
        Game.load(Hopper);
      }
      if (this.elements["backButton"].container.contains(Game.click)) {
        console.log("Moving to Game Selection");
        Game.load(StartScreen);
      }

    }
  },
  elements: {
    background: new Rectangle(0, 0, 1080, 768, "black"),
    pingPongText: new Text(215, 170, "Ping Pong", "50px Comic Sans MS", null, "white"),
    pingPongIMG: new ImageObj(57, 200, 315, 225, "Images/Thumbnails/PingPongThumb.png"),
    wormText: new Text(540, 170, "Worm", "50px Comic Sans MS", null, "white"),
    wormIMG: new ImageObj(382, 200, 315, 225, "Images/Thumbnails/WormThumb.png"),
    hopperIMG: new ImageObj(708, 200, 315, 225, "Images/Thumbnails/HopperThumb.png"),
    hopperText: new Text(865, 170, "Hopper", "50px Comic Sans MS", null, "white"),
    backButton: new RectButton(780, 0, 315, 75, "blue", "<- BACK", "60px Comic Sans MS")
  }
}

var PingPong = {
  start: function(){
    console.log("loaded PingPong");
    this.points = [0, 0];
    this.playerSpeed = 5
    this.leftPlayer = new Rectangle(65, 360, 20, 150, "green");
    this.rightPlayer = new Rectangle(995, 360, 20, 150, "green");
    this.ball = new Rectangle(532, 435, 20, 20, "red");
    this.ballVel = [5, 5];
    this.moveBall = function(){
      if(this.ball.y <= 108) this.ballVel[1] = -this.ballVel[1];
      if(this.ball.y + this.ball.height >= 758) this.ballVel[1] = -this.ballVel[1];
      if(this.ball.intersects(this.leftPlayer)){
        this.ballVel[0] = 5;
        Game.sfx.handler.playAudio("Sounds/bounce.mp3", 1.0);
      }
      if(this.ball.intersects(this.rightPlayer)){
        this.ballVel[0] = -5;
        Game.sfx.handler.playAudio("Sounds/bounce.mp3", 1.0);
      }
      if(this.ball.x <= 15){
        this.points[1]++;
        this.ballVel = [5, 5];
        this.ball.x = 532;
        this.ball.y = 435;
      }
      if(this.ball.x + this.ball.width >= 1070){
        this.points[0]++;
        this.ballVel = [-5, 5];
        this.ball.x = 532;
        this.ball.y = 435;
      }

      this.ball.x += this.ballVel[0];
      this.ball.y += this.ballVel[1];

    }
  },
  update: function(){
    if (!Game.click.isNull()) {
      if (this.elements["backButton"].container.contains(Game.click)) {
        console.log("Moving to Game Selection");
        Game.load(GameSelection);
      }
    }
    if (Game.keys) {
      if (Game.keys[83]) this.leftPlayer.y += this.playerSpeed;
      if (Game.keys[87]) this.leftPlayer.y -= this.playerSpeed;
      if (Game.keys[40]) this.rightPlayer.y += this.playerSpeed;
      if (Game.keys[38]) this.rightPlayer.y -= this.playerSpeed;
    }

    if(this.leftPlayer.y <= 108){
      this.leftPlayer.y = 108;
    }
    if(this.leftPlayer.y + this.leftPlayer.height >= 758){
      this.leftPlayer.y = 758 - this.leftPlayer.height;
    }
    if(this.rightPlayer.y <= 108){
      this.rightPlayer.y = 108;
    }
    if(this.rightPlayer.y + this.rightPlayer.height >= 758){
      this.rightPlayer.y = 758 - this.rightPlayer.height;
    }

    this.moveBall();

    this.elements.score.value = `${this.points[0]} : ${this.points[1]}`;
    this.elements.leftPlayer = this.leftPlayer;
    this.elements.rightPlayer = this.rightPlayer;
    this.elements.ball = this.ball;
  },
  elements: {
    border: {
      enabled: true,
      draw: function() {
        Game.context.lineWidth = 5;
        Game.context.strokeRect(12, 105, 1055, 655);
      }
    },
    score: new Text(540, 98, "0 : 0", "80px Comic Sans MS"),
    backButton: new RectButton(780, 0, 315, 75, "blue", "<- BACK", "60px Comic Sans MS")
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
          Game.sfx.handler.playAudio("Sounds/eat.mp3", 1.0);
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
        Game.load(GameSelection);
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
      if (Game.checkFrame(8)) {
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
    console.log("loaded Hopper");
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
    this.speed = 10;
    this.nextTime = 15 + (Math.random() * 10);
    this.nextSize = 48 + (Math.random() * 16);
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
      this.player.velY += 1.5; //gravity
      this.player.y += this.player.velY;
      this.player.velY *= 0.95; //friction
      if(this.player.y + this.player.height > this.elements.floor.y){
        this.player.jumping = false;
        this.player.velY = 0;
        this.player.y = this.elements.floor.y - this.player.height;
      }
      this.elements.player.y = this.player.y;
      this.points++;
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
        Game.load(GameSelection);
      }
    }
    if (Game.keys) {
      if ((Game.keys[87] || Game.keys[38] || Game.keys[32]) && !this.player.jumping){
        this.player.velY -= 30;
        Game.sfx.handler.playAudio("Sounds/jump.mp3", 1.0);
        this.player.jumping = true;
      }
    }
    if(this.playing && !this.ended){
      if(Game.checkFrame(Math.round(1000 / this.nextTime))){
        this.obstacles.push(new Rectangle(1080, 512 - this.nextSize, this.nextSize, this.nextSize, "red"));
        this.nextSize = 32 + (Math.random() * 16);
        this.nextTime = this.nextSize / 6;
        if(this.obstacles.length >= 2){
          if(this.obstacles[this.obstacles.length - 1].intersects(this.obstacles[this.obstacles.length - 2])){
            this.obstacles.pop()
          }
        }
      }
      this.ended = !this.move();
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
