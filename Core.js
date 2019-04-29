var Game = {
  canvas: document.createElement("canvas"),
  start: function() {
    this.canvas.width = 1080;
    this.canvas.height = 768;
    this.context = this.canvas.getContext("2d");
    this.canvas.style = "border-style: solid; border-width: 2px; display: block; margin: auto;"
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.frame = 0;
    this.animID = window.requestAnimationFrame(updateGame);
    this.music = new Audio();
    this.sfx = new Audio();
    this.music.loop = true;
    if (localStorage.muted === undefined) {
      localStorage.setItem("muted", "false");
    }
    this.music.handler = {
      playAudio: async function(src, volume) {
        try {
          if (this.soundPromise != undefined) {
            Game.music.pause();
            Game.music.src = src;
            Game.music.volume = volume;
            Game.music.muted = JSON.parse(localStorage.muted);
            this.soundPromise = Game.music.play();
            console.log("playing: " + src);
          } else {
            Game.music.src = src;
            Game.music.volume = volume;
            Game.music.muted = JSON.parse(localStorage.muted);
            this.soundPromise = Game.music.play();
            console.log("playing: " + src);
          }
        } catch (err) {
          throw new Error(err);
        }
      },
      mute: function() {
        localStorage.muted = !Game.music.muted
        Game.music.muted = !Game.music.muted;
      }
    }
    this.sfx.handler = {
      playAudio: async function(src, volume) {
        try {
          if (this.soundPromise != undefined) {
            Game.sfx.pause();
            Game.sfx.src = src;
            Game.sfx.volume = volume;
            Game.sfx.muted = JSON.parse(localStorage.muted);
            this.soundPromise = Game.sfx.play();
            console.log("playing: " + src);
          } else {
            Game.sfx.src = src;
            Game.sfx.volume = volume;
            Game.sfx.muted = JSON.parse(localStorage.muted);
            this.soundPromise = Game.sfx.play();
            console.log("playing: " + src);
          }
        } catch (err) {
          throw new Error(err);
        }
      },
      mute: function() {
        localStorage.muted = !Game.sfx.muted
        Game.sfx.muted = !Game.sfx.muted;
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
    this.click = [];
    this.click.isNull = function() {
      if (Game.click[0] == null || Game.click[1] == null) {
        return true;
      } else {
        return false;
      }
    }
    this.click.clear = function() {
      Game.click[0] = null;
      Game.click[1] = null;
    }
    Game.canvas.addEventListener('click', function(e) {
      Game.click[0] = e.clientX - Game.canvas.getBoundingClientRect().left;
      Game.click[1] = e.clientY - Game.canvas.getBoundingClientRect().top;
    });
  },
  checkFrame: function(ticks) {
    if ((this.frame / ticks) % 1 == 0) {
      return true;
    }
    return false;
  },
  clear: function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  reset: function() {
    location.reload();
  },
  load: function(map) {
    this.click.clear();
    this.current = map
    this.current.start();
  },
  debug: {
    screenshot: function() {
      var link = document.createElement("a");
      link.download = "image.png";

      this.canvas.toBlob(function(blob) {
        link.href = URL.createObjectURL(blob);
        console.log(blob);
        console.log(link.href);
      }, 'image/png');

      link.click();
    },
    refreshRate: function(){
      function getRate(){
        return new Promise((resolve) => {
          requestAnimationFrame((time1) => {
            requestAnimationFrame((time2) => {
              resolve(1000/ (time2 - time1));
            });
          });
        });
      }

      getRate().then((rate) => console.log(rate));
    }
  }
}
