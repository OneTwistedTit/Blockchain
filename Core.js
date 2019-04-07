var Game = {
  canvas: document.createElement("canvas"),
  Start: function() {
    this.canvas.width = 1080;
    this.canvas.height = 768;
    this.context = this.canvas.getContext("2d");
    this.canvas.style = "border-style: solid; border-width: 2px; display: block; margin: auto;"
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.interval = setInterval(UpdateGame, 1);
    this.frame = 0;
    //Creates a boolean array for each key
    //Allows for subcardinal movement
    window.addEventListener('keydown', function(e) {
      Game.keys = (Game.keys || []);
      Game.keys[e.keyCode] = true;
    });
    window.addEventListener('keyup', function(e) {
      Game.keys[e.keyCode] = false;
    });
  },
  Clear: function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  Stop: function() {
    clearInterval(this.interval);
  }
}
//Interval function for Game ticks
function CheckInterval(ticks) {
  if ((Game.frame / ticks) % 1 == 0) {
    return true;
  }
  return false;
}
