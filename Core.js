var Game = {
  canvas: document.createElement("canvas"),
  Start: function() {
    this.canvas.width = 1080;
    this.canvas.height = 768;
    this.context = this.canvas.getContext("2d");
    this.canvas.style = "border-style: solid; border-width: 2px; display: block; margin: auto;"
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.interval = setInterval(UpdateGame, 20);
    this.frame = 0;
    this.Elements = {}
    this.music = new Audio();
    this.ElementUpdate = null;
    this.music.loop = true;
    this.music.handler = {
      PlayAudio: async function(src){
        try{
          Game.music.src = src;
          await Game.music.play();
          console.log("Playing: " + src);
        } catch(err) {
          throw new Error(err);
        }
      },
      Mute: function(){
        Game.music.muted = !Game.music.muted;
      }
    }
    //Creates a boolean array for each key
    //Allows for subcardinal movement
    window.addEventListener('keydown', function(e) {
      Game.keys = (Game.keys || []);
      Game.keys[e.keyCode] = true;
    });
    window.addEventListener('keyup', function(e) {
      Game.keys[e.keyCode] = false;
    });
    this.click = new Vector2(null, null);
    Game.canvas.addEventListener('click', function(e){
      Game.click.Set(e.clientX - Game.canvas.getBoundingClientRect().left, e.clientY - Game.canvas.getBoundingClientRect().top);
    });
  },
  CheckTick: function(ticks) {
    if ((this.frame / ticks) % 1 == 0) {
      return true;
    }
    return false;
  },
  Clear: function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  Reset: function() {
    location.reload();
  },
  Load: function(map) {
    this.Elements = {}
    var i;
    for (i in map){
      this.Elements[i] = map[i];
    }
    this.ElementUpdate = this.Elements.Update;
    delete this.Elements.Update;
    this.Elements.Start();
    delete this.Elements.Start;
    
  },
  Screenshot: function(){
    var link = document.createElement("a");
    link.download = "image.png";

    this.canvas.toBlob(function(blob){
      link.href = URL.createObjectURL(blob);
      console.log(blob);
      console.log(link.href);
    },'image/png');

    link.click();
  }
}
