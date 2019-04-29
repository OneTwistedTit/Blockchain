function startGame() {
  Game.start();
  Game.load(InitScreen);
}

function updateGame() {
  window.requestAnimationFrame(updateGame);
  Game.clear();
  Game.frame++;
  for (var i = 0; i < Object.keys(Game.current.elements).length; i++) {
    if (Game.current.elements[Object.keys(Game.current.elements)[i]].enabled) {
      Game.current.elements[Object.keys(Game.current.elements)[i]].draw();
    }
  }
  Game.current.update();
  if (Game.keys) {
    if (Game.keys[77]) {
      Game.music.handler.mute();
      Game.sfx.handler.mute();
      Game.keys[77] = false;
    }
  }
}
