//Initialize Game elements

function StartGame() {
  Game.Start();
  Game.Load(Start_Screen);
}
function UpdateGame(){
  Game.Clear();
  Game.frame++;
  for (var i = 0; i < Object.keys(Game.Elements).length; i++) {
    Game.Elements[Object.keys(Game.Elements)[i]].Draw();
    Game.ElementUpdate();
  }
}

