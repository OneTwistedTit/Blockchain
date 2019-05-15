class Rectangle {
  constructor(x, y, width, height, color) {
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
  }
  contains(arrXY) {
    if (arrXY[0] >= this.x && arrXY[0] <= this.x + this.width && arrXY[1] >= this.y && arrXY[1] <= this.y + this.height) {
      return true;
    } else {
      return false;
    }
  }
  intersects(other) {
    if (this.contains([other.x, other.y]) || this.contains([other.x + other.width, other.y]) ||
      this.contains([other.x, other.y + other.height]) ||
      this.contains([other.x + other.width, other.y + other.height])) {
      return true;
    } else if (other.contains([this.x, this.y]) || other.contains([this.x + this.width, this.y]) ||
      other.contains([this.x, this.y + this.height]) ||
      other.contains([this.x + this.width, this.y + this.height])) {
      return true;
    } else {
      return false;
    }
  }
  draw() {
    Game.context.fillStyle = this.color;
    Game.context.fillRect(this.x, this.y, this.width, this.height);
  }
}

class Text {
  constructor(x, y, text, font, align, color) {
    this.x = x;
    this.y = y;
    this.value = text;
    this.enabled = true;
    this.font = font;
    if (align == null || !align) {
      this.align = "center";
    } else {
      this.align = align;
    }
    if (color == null || !color) {
      this.color = "rgba(0, 0, 0, 1)";
    } else {
      this.color = color;
    }
  }
  draw() {
    Game.context.font = this.font;
    Game.context.textAlign = this.align
    Game.context.fillStyle = this.color;
    Game.context.fillText(this.value, this.x, this.y);
  }
}
class Circle {
  constructor(x, y, radius, color) {
    this.radius = radius;
    this.x = x + this.radius;
    this.y = y + this.radius;
    this.color = color;
    this.enabled = true;
  }
  draw() {
    Game.context.fillStyle = color;
    Game.context.beginPath();
    Game.context.arc(this.x, this.y, radius, 0, 2 * Math.PI);
    Game.context.fill();
  }
  contains(arrXY) {
    return (((arrXY[0] - this.x) ** 2 + (arrXY[1] - this.y) ** 2) <= (this.radius) ** 2);
  }

}
class ImageObj {
  constructor(x, y, width, height, src) {
    this.rect = new Rectangle(x, y, width, height);
    this.image = new Image();
    this.image.src = src;
    this.enabled = true;
  }
  draw() {
    Game.context.drawImage(this.image, this.rect.x, this.rect.y, this.rect.width, this.rect.height);
  }
}
class RectButton {
  constructor(x, y, width, height, color, text, font) {
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
  }
  draw() {
    this.container.draw();
    if (this.text != null) {
      this.text.draw();
    }
  }
}
class CircleButton {
  constructor(x, y, radius, color, text, font) {
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
  }

  draw() {
    this.container.draw();
    if (text != null) {
      this.text.draw();
    }
  }
}
