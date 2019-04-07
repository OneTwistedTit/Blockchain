//Initialize Game elements
var Player;
var Elements = [];

//Change the speed of the interval function
//Base interval is 100


function StartGame() {
  Game.Start();
  Player = new Rectangle(50, 50, 50, 50);
  Elements.push(new Rectangle(400, 400, 50, 50))
  Elements.push(new Rectangle(400, 500, 50, 50))
}
function UpdateGame(){
  var prevPos = new Vector2(Player.x, Player.y);
  
  Game.Clear();
  Game.frame++;
  if (Game.keys) {
    if (Game.keys[65]) Player.x += -1;
    if (Game.keys[68]) Player.x += 1;
    if (Game.keys[87]) Player.y += -1;
    if (Game.keys[83]) Player.y += 1;
  }
  if (Player.x < 0){
    Player.x = 0;
  }
  if (Player.y < 0){
    Player.y = 0;
  }
  if (Player.x > Game.canvas.width - Player.width){
    Player.x = Game.canvas.width - Player.width;
  }
  if (Player.y > Game.canvas.height - Player.height){
    Player.y = Game.canvas.height - Player.height;
  }
  for (var i = Elements.length - 1; i >= 0; i--) {
    Elements[i].Draw(Game.context, "red");
      if(Player.Intersects(Elements[i])){
        Player.x = prevPos.x;
        Player.y = prevPos.y;
    }
  }
  Elements[0].Draw(Game.context, "red");
  //document.getElementById('debug').innerText = `Entities: ${Elements.length}; X, Y: ${Player.x}, ${Player.y} `
  Player.Draw(Game.context, "blue");
}



//Updates the graphics and the data of the Game elements
/*function updateGame() {

  document.getElementById('debug').innerText = `Entities: ${Elements.length}; X, Y: ${Player.x}, ${Player.y} `

  //Binds the Player to the Game board
  if (Player.x < 0){
    Player.x = 0;
  }
  if (Player.y < 0){
    Player.y = 0;
  }
  if (Player.x > Game.canvas.width - Player.width){
    Player.x = Game.canvas.width - Player.width;
  }
  if (Player.y > Game.canvas.height - Player.height){
    Player.y = Game.canvas.height - Player.height;
  }
  Player.update();
}*/
