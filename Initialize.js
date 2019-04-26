function startGame() {
  Game.start();
  Game.load(Init_Screen);
}

var fps = 120;
var now;
var then = Date.now();
var interval = 1000/fps;
var delta;
function updateGame() {
  window.requestAnimationFrame(updateGame);
  now = Date.now();
  delta = now - then;
  if (delta > interval){
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
        Game.keys[77] = false;
      }
    }
  }
}
