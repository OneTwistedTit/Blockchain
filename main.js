//Initialize game elements
var Player;
var Elements = [];

//Change the speed of the interval function
//Base interval is 100


function startGame() {
  game.start();
  Player = new Rectangle(50, 50, "blue", 50, 50);
  Elements.push(new Rectangle(50, 50, "red", 400, 400))
}



//Updates the graphics and the data of the game elements
/*function updateGame() {
  var x, y;
  game.clear();
  game.frame++;
  var previousPostion = {
    x: Player.x,
    y: Player.y
  }
  if (game.keys) {
    if (game.keys[65]) Player.x += -1;
    if (game.keys[68]) Player.x += 1;
    if (game.keys[87]) Player.y += -1;
    if (game.keys[83]) Player.y += 1;
  }
  for (var i = 0; i < Elements.length; i++) {
    Elements[i].update();
    if(Elements[i].intersects(Player)){
      Player.x = previousPostion.x;
      Player.y = previousPostion.y;
    }
  }
  document.getElementById('debug').innerText = `Entities: ${Elements.length}; X, Y: ${Player.x}, ${Player.y} `

  //Binds the Player to the game board
  if (Player.x < 0){
    Player.x = 0;
  }
  if (Player.y < 0){
    Player.y = 0;
  }
  if (Player.x > game.canvas.width - Player.width){
    Player.x = game.canvas.width - Player.width;
  }
  if (Player.y > game.canvas.height - Player.height){
    Player.y = game.canvas.height - Player.height;
  }
  Player.update();
}*/
