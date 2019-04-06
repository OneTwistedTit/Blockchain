/* ===================================================
The core file for the game.
start: Initializes all canvas properties and core variables
clear: Clears the canvas
stop: Closes the interval

=================================================== */
//The speed at which the update function is called
var GAME_SPEED = 20;

var game = {
  canvas: document.createElement("canvas"),
  start: function() {
    this.canvas.width = 1080;
    this.canvas.height = 768;
    this.context = this.canvas.getContext("2d");
    this.canvas.style = "border-style: solid; border-width: 2px; display: block; margin: auto;"
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.interval = setInterval(updateGame, 100 / GAME_SPEED);
    this.frame = 0;
    //Creates a boolean array for each key
    //Allows for subcardinal movement
    window.addEventListener('keydown', function(e) {
      game.keys = (game.keys || []);
      game.keys[e.keyCode] = true;
    });
    window.addEventListener('keyup', function(e) {
      game.keys[e.keyCode] = false;
    });
  },
  clear: function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  stop: function() {
    clearInterval(this.interval);
  }
}
//Interval function for game ticks
function checkInterval(ticks) {
  if ((game.frame / ticks) % 1 == 0) {
    return true;
  }
  return false;
}
