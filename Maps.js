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
    if (!Game.music.src.includes("Sounds/Main.mp3")) {
      Game.music.handler.playAudio("Sounds/Main.mp3", 1.0);
    }
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
    background: new Rectangle(0, 0, 1080, 768, "rgba(138, 0, 255, 1)"),
    credits: new Text(540, 768 - 15, "Created by John Doe 2019", "15px Comic Sans MS"),
    titleBG: new Rectangle(120, 35, 846, 140, "cyan"),
    title: new Text(540, 140, "BLOCKCHAIN", "120px Comic Sans MS"),
    playButton: new RectButton(340, 334, 400, 200, "green", "PLAY", "120px Comic Sans MS"),
  }
}
var GameSelection = {
  start: function() {
    console.log("Moved to Game Selection");
    if (!Game.music.src.includes("Sounds/Main.mp3")) {
      Game.music.handler.playAudio("Sounds/Main.mp3", 1.0);
    }
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
      if (this.elements["teetrysIMG"].rect.contains(Game.click)) {
        console.log("Moving to Teetrys");
        Game.music.handler.playAudio("Sounds/Teetrys.mp3", 0.5);
        Game.load(Teetrys);
      }
      if (this.elements["backButton"].container.contains(Game.click)) {
        console.log("Moving to Game Selection");
        Game.load(StartScreen);
      }

    }
  },
  elements: {
    background: new Rectangle(0, 0, 1080, 768, "black"),
    pingPongText: new Text(215, 180, "Ping Pong", "50px Comic Sans MS", null, "white"),
    pingPongIMG: new ImageObj(57, 200, 315, 225, "Images/Thumbnails/PingPongThumb.png"),
    wormText: new Text(540, 180, "Worm", "50px Comic Sans MS", null, "white"),
    wormIMG: new ImageObj(382, 200, 315, 225, "Images/Thumbnails/WormThumb.png"),
    hopperText: new Text(865, 180, "Hopper", "50px Comic Sans MS", null, "white"),
    hopperIMG: new ImageObj(708, 200, 315, 225, "Images/Thumbnails/HopperThumb.png"),
    teetrysText: new Text(215, 475, "Teetrys", "50px Comic Sans MS", null, "white"),
    teetrysIMG: new ImageObj(57, 495, 315, 225, "Images/Thumbnails/TeetrysThumb.png"),
    backButton: new RectButton(810, 0, 270, 75, "blue", "<- BACK", "60px Comic Sans MS"),
  }
}

var PingPong = {
  start: function() {
    console.log("loaded PingPong");
    this.points = [0, 0];
    this.playerSpeed = 5
    this.leftPlayer = new Rectangle(65, 360, 20, 150, "green");
    this.rightPlayer = new Rectangle(995, 360, 20, 150, "green");
    this.ball = new Rectangle(532, 435, 20, 20, "red");
    this.ballVel = [5, 5];
    this.moveBall = function() {
      if (this.ball.y <= 108) this.ballVel[1] = -this.ballVel[1];
      if (this.ball.y + this.ball.height >= 758) this.ballVel[1] = -this.ballVel[1];
      if (this.ball.intersects(this.leftPlayer)) {
        this.ballVel[0] = 5;
        Game.sfx.handler.playAudio("Sounds/bounce.mp3", 1.0);
      }
      if (this.ball.intersects(this.rightPlayer)) {
        this.ballVel[0] = -5;
        Game.sfx.handler.playAudio("Sounds/bounce.mp3", 1.0);
      }
      if (this.ball.x <= 15) {
        this.points[1]++;
        this.ballVel = [5, 5];
        this.ball.x = 532;
        this.ball.y = 435;
      }
      if (this.ball.x + this.ball.width >= 1070) {
        this.points[0]++;
        this.ballVel = [-5, 5];
        this.ball.x = 532;
        this.ball.y = 435;
      }

      this.ball.x += this.ballVel[0];
      this.ball.y += this.ballVel[1];

    }
  },
  update: function() {
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

    if (this.leftPlayer.y <= 108) {
      this.leftPlayer.y = 108;
    }
    if (this.leftPlayer.y + this.leftPlayer.height >= 758) {
      this.leftPlayer.y = 758 - this.leftPlayer.height;
    }
    if (this.rightPlayer.y <= 108) {
      this.rightPlayer.y = 108;
    }
    if (this.rightPlayer.y + this.rightPlayer.height >= 758) {
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
    backButton: new RectButton(810, 0, 270, 75, "blue", "<- BACK", "60px Comic Sans MS"),
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
    this.pos = [15, 108];
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
          if (this.apple == null) break;
          if (part[0] == this.apple[0] && part[1] == this.apple[1]) this.apple = null;
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
      if (this.elements["restart"].enabled) {
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
    if (this.ended) {
      this.playing = false;
      this.elements.restart.enabled = true;
    } else {
      this.playing = true;
      this.elements.restart.enabled = false;
    }
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
            Game.context.fillRect(part[0] * 25 + Worm.pos[0], part[1] * 25 + Worm.pos[1], 25, 25);
          }
        }
      }
    },
    apple: {
      enabled: true,
      draw: function() {
        if (Worm.apple != null) {
          Game.context.fillStyle = "red";
          Game.context.fillRect(Worm.apple[0] * 25 + Worm.pos[0], Worm.apple[1] * 25 + Worm.pos[1], 25, 25);
        }
      }
    },
    score: new Text(540, 98, "Points: 0", "80px Comic Sans MS"),
    backButton: new RectButton(810, 0, 270, 75, "blue", "<- BACK", "60px Comic Sans MS"),
    restart: new RectButton(65, 138, 950, 589, "rgba(31, 31, 31, 0.875)", "Click to play again!", "100px Comic Sans MS")
  }
}

Hopper = {
  start: function() {
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
    this.points = 0;
    this.move = function() {
      for (i = this.obstacles.length - 1; i >= 0; i--) {
        if (this.obstacles[i].x > -64) {
          this.obstacles[i].x -= this.speed;
          if (this.obstacles[i].intersects(this.elements.player)) {
            return false;
          }
        } else {
          this.obstacles.splice(i, 1);
        }
      }
      this.player.velY += 1.5; //gravity
      this.player.y += this.player.velY;
      this.player.velY *= 0.95; //friction
      if (this.player.y + this.player.height > this.elements.floor.y) {
        this.player.jumping = false;
        this.player.velY = 0;
        this.player.y = this.elements.floor.y - this.player.height;
      }
      this.elements.player.y = this.player.y;
      this.points++;
      return true;
    }
  },
  update: function() {
    if (!Game.click.isNull()) {
      if (this.elements["restart"].enabled) {
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
      if ((Game.keys[87] || Game.keys[38] || Game.keys[32]) && !this.player.jumping) {
        this.player.velY -= 30;
        Game.sfx.handler.playAudio("Sounds/jump.mp3", 1.0);
        this.player.jumping = true;
      }
    }
    if (this.playing && !this.ended) {
      if (Hopper.obstacles.length > 0) {
        if (Hopper.obstacles[Hopper.obstacles.length - 1].x <= 400) {
          var n = Math.round(Math.random() * 32) + 32
          var c = `rgb(${Math.round(Math.random() * 127)}, ${Math.round(Math.random() * 127)}, ${Math.round(Math.random() * 127)})`
          this.obstacles.push(new Rectangle(1080, 512 - n, n, n, c));
        }
      } else {
        var n = Math.round(Math.random() * 32) + 32
        var c = `rgb(${Math.round(Math.random() * 127)}, ${Math.round(Math.random() * 127)}, ${Math.round(Math.random() * 127)})`
        this.obstacles.push(new Rectangle(1080, 512 - n, n, n, c));
      }

      if (Game.checkFrame(150)) {
        this.speed *= 1.005
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
      draw: function() {
        for (i = Hopper.obstacles.length - 1; i >= 0; i--) {
          Hopper.obstacles[i].draw();
        }
      }
    },
    score: new Text(540, 98, "Points: 0", "80px Comic Sans MS"),
    backButton: new RectButton(810, 0, 270, 75, "blue", "<- BACK", "60px Comic Sans MS"),
    restart: new RectButton(65, 138, 950, 589, "rgba(31, 31, 31, 0.875)", "Click to play again!", "100px Comic Sans MS")
  }
}

var Teetrys = {
  start: function() {
    this.playing = true;
    this.sqsize = 33
    this.points = 0;
    this.dropC = 0;
    this.rotate = false;
    this.colors = [
      "rgba(0, 15, 31, 0)",
      "#00FFFF",
      "#FFFF00",
      "#7F00FF",
      "#00FF00",
      "#FF0000",
      "#0000FF",
      "#FF7F00"
    ];
    this.pieces = 'IOTSZJL';
    this.Piece = class {
      constructor(pos, type) {
        this.pos = pos;
        this.enabled = true;
        switch (type.toUpperCase()) {
          case "I":
            this.matrix = [
              [0, 1, 0, 0],
              [0, 1, 0, 0],
              [0, 1, 0, 0],
              [0, 1, 0, 0]
            ];
            break;
          case "O":
            this.matrix = [
              [2, 2],
              [2, 2]
            ]
            break;
          case "T":
            this.matrix = [
              [0, 3, 0],
              [3, 3, 3],
              [0, 0, 0]
            ];
            break;
          case "S":
            this.matrix = [
              [4, 0, 0],
              [4, 4, 0],
              [0, 4, 0]
            ];
            break;
          case "Z":
            this.matrix = [
              [0, 5, 0],
              [5, 5, 0],
              [5, 0, 0]
            ];
            break;
          case "J":
            this.matrix = [
              [0, 6, 0],
              [0, 6, 0],
              [6, 6, 0]
            ];
            break;
          case "L":
            this.matrix = [
              [7, 0, 0],
              [7, 0, 0],
              [7, 7, 0]
            ];
            break;
          default:
            throw new Error("Bad matrix argument");
        }
      }
      draw(offset) {
        for (var i = 0; i < this.matrix.length; i++) {
          for (var j = 0; j < this.matrix[i].length; j++) {
            Game.context.fillStyle = Teetrys.colors[this.matrix[i][j]];
            Game.context.fillRect(offset[0] + this.pos[0] * Teetrys.sqsize + j * Teetrys.sqsize, offset[1] + this.pos[1] * Teetrys.sqsize + i * Teetrys.sqsize, Teetrys.sqsize, Teetrys.sqsize);
          }
        }
      }
      rotate(dir) {
        var offset = 1;
        var pos = this.pos[0]
        for (var y = 0; y < this.matrix.length; y++) {
          for (var x = 0; x < y; x++) {
            [
              this.matrix[x][y],
              this.matrix[y][x]
            ] = [
              this.matrix[y][x],
              this.matrix[x][y]
            ];
          }
        }
        if (dir > 0) {
          this.matrix.forEach(row => row.reverse());
        } else {
          this.matrix.reverse();
        }
        while(Teetrys.collide()){
          this.pos[0] += offset;
          offset = -(offset + (offset > 0 ? 1 : -1));
          if(offset > this.matrix[0].length){
            this.rotate(-dir);
            this.pos[0] = pos;
          }
        }
      }
      drop() {
        this.pos[1]++;
        if(Teetrys.collide()){
          this.pos[1]--;
          Teetrys.merge();
          Teetrys.sweep();
          Teetrys.spawn();
        }
      }
      move(dir) {
        this.pos[0] += dir;
        if(Teetrys.collide()){
          this.pos[0] -= dir;
        }
      }
    }

    this.player = null;
    this.arena = [];
    for(i = 0; i < 20; i++) {
      this.arena.push(new Array(12).fill(0));
    }
    this.merge = function() {
      this.player.matrix.forEach((row, y) => {
        row.forEach((value, x) => {
          if(value != 0){
            this.arena[y + this.player.pos[1]][x + this.player.pos[0]] = value;
          }
        });
      });
      Game.sfx.handler.playAudio("Sounds/fall.mp3", 1.0);
    }
    this.collide = function() {
      let m = this.player.matrix;
      let p = this.player.pos;
      for (var y = 0; y < m.length; y++){
        for(var x = 0; x < m[y].length; x++){
          if(m[y][x] != 0 && (this.arena[y + p[1]] && this.arena[y + p[1]][x + p[0]]) != 0) {
            return true;
          }
        }
      }
      return false;
    }
    this.sweep = function(){
      var rows = 0;
      outer: for (var y = this.arena.length - 1; y > 0; y--){
        for (var x = 0; x < this.arena[y].length; x++){
          if(this.arena[y][x] == 0){
            continue outer;
          }
        }
        var row = this.arena.splice(y, 1)[0].fill(0);
        this.arena.unshift(row);
        y++;

        rows++;
      }
      switch(rows){
        case 0:
          return;
          break;
        case 1:
          this.points += 40;
          break;
        case 2:
          this.points += 100;
          break;
        case 3:
          this.points += 300;
          break;
        case 4:
          this.points += 1200;
          break;
        default:
          throw new Error("Check");
      }
    }
    this.spawn = function(){
      var type = this.pieces[this.pieces.length * Math.random() | 0];
      this.player = new Teetrys.Piece([0, 0], type);
      this.player.pos[0] = (this.arena[0].length / 2 | 0) - (this.player.matrix[0].length / 2 | 0);

      if(this.collide()){
        this.arena.forEach((row) => row.fill(0));
        this.score = 0;
      }
    }
  },
  update: function() {
    if (!Game.click.isNull()) {
      if (this.elements["backButton"].container.contains(Game.click)) {
        console.log("Moving to Game Selection");
        Game.load(GameSelection);
      }
    }
    if(this.playing){
      if(this.player != null){
        if(this.dropC >= 75){
          this.player.drop();
          this.dropC = 0;
        }
        this.dropC++;

        if (Game.keys) {
          if(Game.frame % 10 == 0){
            if(Game.keys[83]) this.player.drop();
          }
          if(Game.frame % 5 == 0) {
            if(Game.keys[65]) this.player.move(-1);
            if(Game.keys[68]) this.player.move(1);
            if(Game.keys[87] && !this.rotate) this.player.rotate(-1); this.rotate = true;
            if(!Game.keys[87]) this.rotate = false;
          }
        }
      }

      if(this.player == null){
        this.spawn();
      }
      this.elements.score.value = `Points: ${this.points}`;
    }

  },
  elements: {
    background: new Rectangle(0, 0, 1080, 768, "rgb(138, 0, 255)"),
    score: new Text(540, 45, "Points: 0", "40px Comic Sans MS"),
    arena: {
      enabled: true,
      draw: function() {
        Game.context.lineWidth = 6;
        Game.context.strokeRect(339, 51, 402, 666);
        Game.context.fillStyle = "white"//"rgba(0, 23, 47, 1)";
        Game.context.fillRect(342, 54, 396, 660);
        if (Teetrys.arena != null) {
          for (var i = 0; i < Teetrys.arena.length; i++) {
            for (var j = 0; j < Teetrys.arena[i].length; j++) {
              Game.context.fillStyle = Teetrys.colors[Teetrys.arena[i][j]];
              Game.context.fillRect(342 + j * Teetrys.sqsize, 54 +  i * Teetrys.sqsize, Teetrys.sqsize, Teetrys.sqsize);
            }
          }
        }
      }
    },
    player: {
      enabled: true,
      draw: function() {
        if(Teetrys.player != null) {
          Teetrys.player.draw([342, 54]);
        }
      }
    },
    backButton: new RectButton(810, 0, 270, 75, "blue", "<- BACK", "60px Comic Sans MS"),
    instructions: {
      enabled: true,
      draw: function(){
        Game.context.font = "30px Comic Sans MS";
        Game.context.textAlign = "center";
        Game.context.fillStyle = "black";
        Game.context.fillText("INSTRUCTIONS:", 169, 314);
        Game.context.fillText("Stack the pieces to", 169, 349);
        Game.context.fillText("clear the rows", 169, 384);
        Game.context.fillText("1 line: 40 points", 169, 419);
        Game.context.fillText("2 lines: 100 points", 169, 454);
        Game.context.fillText("3 lines: 300 points", 169, 489);
        Game.context.fillText("4 lines: 1200 points", 169, 524);
        Game.context.fillText("CONTROLS", 913, 314);
        Game.context.fillText("W: Rotate piece left", 913, 349);
        Game.context.fillText("A: Move piece left", 913, 384);
        Game.context.fillText("D: Move piece right", 913, 419);
        Game.context.fillText("S: Drop piece", 913, 454);
      }
    }
  }
}
