function StartGame() {
  Game.Start();
  Game.Load(Init_Screen);
}
function UpdateGame(){
  Game.Clear();
  Game.frame++;
  for (var i = 0; i < Object.keys(Game.Elements).length; i++) {
    Game.Elements[Object.keys(Game.Elements)[i]].Draw();
    Game.ElementUpdate();
  }
}

