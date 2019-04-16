Rectangle = function(x, y, width, height, color) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.enabled = true;
  if (color == null || !color) {
    this.color = "rgba(0, 0, 0, 0";
  } else {
    this.color = color;
  }
  this.contains = function(arrXY) {
    if (arrXY[0] >= this.x && arrXY[0] <= this.x + this.width && arrXY[1] >= this.y && arrXY[1] <= this.y + this.height) {
      return true;
    } else {
      return false;
    }
  }
  this.intersects = function(other) {
    if (this.contains(other.x, other.y) || this.contains(other.x + other.width, other.y) ||
      this.contains(other.x, other.y + other.height) ||
      this.contains(other.x + other.width, other.y + other.height)) {
      return true;
    } else if (other.contains(this.x, this.y) || other.contains(this.x + this.width, this.y) ||
      other.contains(this.x, this.y + this.height) ||
      other.contains(this.x + this.width, this.y + this.height)) {
      return true;
    } else {
      return false;
    }
  }
  this.draw = function() {
    Game.context.fillStyle = color;
    Game.context.fillRect(this.x, this.y, this.width, this.height);
  }
}

Text = function(x, y, text, font, textAlign, color) {
  this.x = x;
  this.y = y;
  this.value = text;
  this.enabled = true;
  if (color == null || !color) {
    this.color = "rgba(0, 0, 0, 1)";
  } else {
    this.color = color;
  }
  this.draw = function() {
    Game.context.font = font;
    if (textAlign == null || !textAlign) {
      Game.context.textAlign = "center";
    } else {
      Game.context.textAlign = textAlign;
    }
    Game.context.fillStyle = this.color;
    Game.context.fillText(this.value, this.x, this.y);
  }
}
Circle = function(x, y, radius, color) {
  this.radius = radius;
  this.x = x + this.radius;
  this.y = y + this.radius;
  this.color = color;
  this.enabled = true;
  this.draw = function() {
    Game.context.fillStyle = color;
    Game.context.beginPath();
    Game.context.arc(this.x, this.y, radius, 0, 2 * Math.PI);
    Game.context.fill();
  }
  this.contains = function(arrXY) {
    return (((arrXY[0] - this.x) ** 2 + (arrXY[1] - this.y) ** 2) <= (this.radius) ** 2);
  }

}
ImageObj = function(x, y, width, height, src) {
  this.rect = new Rectangle(x, y, width, height);
  this.image = new Image();
  this.image.src = src;
  this.enabled = true;
  this.draw = function() {
    Game.context.drawImage(this.image, this.rect.x, this.rect.y, this.rect.width, this.rect.height);
  }
}
RectButton = function(x, y, width, height, color, text, font) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.color = color;
  this.enabled = true;
  if (!font || font == null) {
    this.font = "100px Comic Sans MS";
  } else {
    this.font = font
  }

  this.container = new Rectangle(this.x, this.y, this.width, this.height, this.color);
  if (text != null) {
    this.text = new Text(this.x + this.width / 2, this.y + this.height / 2 + (parseInt(this.font) / 3), text, this.font, null, "black");
  }

  this.draw = function() {
    this.container.draw();
    this.text.draw();
  }
}
CircleButton = function(x, y, radius, color, text, font) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color
  this.enabled = true;
  if (!font || font == null) {
    this.font = "100px Comic Sans MS";
  } else {
    this.font = font
  }
  this.container = new Circle(this.x, this.y, this.radius, this.color);
  if (text != null) {
    this.text = new Text(this.x + this.radius, this.y + this.radius + (parseInt(this.font)) / 3, text, this.font, null, "black");
  }

  this.draw = function() {
    this.container.draw();
    this.text.draw();
  }
}
