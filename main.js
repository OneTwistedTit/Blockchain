//Initialize Game elements
var Player;
var Elements = [];

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
  var direction = new Vector2(0, 0);
  if (Game.keys) {
    if (Game.keys[65]) direction.Set(-1, direction.y);
    if (Game.keys[68]) direction.Set(1, direction.y);
    if (Game.keys[87]) direction.Set(direction.x, -1);
    if (Game.keys[83]) direction.Set(direction.x, 1);
  }
  Player.x = prevPos.x + direction.x;
  Player.y = prevPos.y + direction.y;
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
  //document.getElementById('debug').innerText = ``
  Player.Draw(Game.context, "blue");
}

