//Initialize Game elements
var Player;
var Elements = [];

function StartGame() {
  Game.Start();
  Player = new PlayerObj(50, 50, 50, 50, "blue");
  Elements.push(new Rectangle(400, 400, 50, 50))
  Elements.push(new Rectangle(400, 500, 50, 50))
}
function UpdateGame(){
  Game.Clear();
  Game.frame++;
  if (Game.keys) {
      if (Game.keys[65]) Player.direction.Set(-1, Player.direction.y);
      if (Game.keys[68]) Player.direction.Set(1, Player.direction.y);
      if (Game.keys[87]) Player.direction.Set(Player.direction.x, -1);
      if (Game.keys[83]) Player.direction.Set(Player.direction.x, 1);
    }
  for (var i = Elements.length - 1; i >= 0; i--) {
    Elements[i].Draw(Game.context, "red");
      
  }
  //document.getElementById('debug').innerText = ``
  Player.Update();
  Player.Draw();
}

