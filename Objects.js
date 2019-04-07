Vector2 = function(x, y){
	this.x = x;
	this.y = y;

	this.prevX = null;
	this.prevY = null;

	this.Set = function(x, y){
		this.prevX = this.x;
		this.prevY = this.y;

		this.x = x;
		this.y = y;
	}
	this.Normalize = function(){
		var tmp = new Vector2(this.x, this.y);

		var mag = Math.sqrt(tmp.x ** 2 + tmp.y ** 2);

		tmp.x = tmp.x / mag;
		tmp.y = tmp.y / mag;

		return tmp;
	}
	this.Distance = function(vec2){
		if(vec2 != null){
			return Math.sqrt((vec2.x - this.x) ** 2 + (vec2.y - this.y) ** 2);
		} else {
			return Math.sqrt((this.prevX - this.x) ** 2 + (this.prevY - this.y) ** 2);
		}
	}
	this.HasChanged = function(){
		if(this.x != this.prevX || this.y != this.prevY) return true;
		return false;
	}
	this.Difference = function(vec2){
		if(vec2 != null) return new Vector2(this.x - this.prevX, this.y - this.prevY);
		return new Vector2(this.x - vec2.x, this.y - vec2.y);
	}
}

Rectangle = function(x, y, width, height, color){
	if(x == null || y == null || width == null || height == null){
		var err = "Missing parameters for Rectangle:";
		if(x == null) err += "'x' ";
		if(y == null) err += "'y' ";
		if(width == null) err += "'width' ";
		if(height == null) err += "'height'";
		throw new Error(err);
	}
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.Contains = function(x, y) {
    if (x >= this.x && x <= this.x + this.width && y >= this.y && y <= this.y + this.height) {
      return true;
    } else {
      return false;
    }
  }
  this.Intersects = function(other){
    if (this.Contains(other.x, other.y) || this.Contains(other.x + other.width, other.y)
     || this.Contains(other.x, other.y + other.height) ||
     this.Contains(other.x + other.width,other.y + other.height)){
       return true;
     }
     else if (other.Contains(this.x, this.y) || other.Contains(this.x + this.width, this.y)
      || other.Contains(this.x, this.y + this.height) ||
      other.Contains(this.x + this.width, this.y + this.height)) {
        return true;
      } else {
        return false;
      }
  }
  this.Draw = function(){
  	Game.context.fillStyle = color;
  	Game.context.fillRect(this.x, this.y, this.width, this.height);
  }
}

Text = function(x, y, text, font, color){
	if (x == null || y == null || text == null || font == null){
		var err = "Missing parameters for Text: ";
		if (x == null) err += "'x' ";
		if (y == null) err += "'y' ";
		if (text == null) err += "'text '";
		if (font == null) err += "'font'";
		throw new Error(err);
	}
	this.x = x;
	this.y = y;
	this.value = text;
	if(color == null || !color){
		this.color = "rgba(255, 255, 255, 1)";
	} else {
		this.color = color;
	}
	this.Draw = function(){
		Game.context.font = font;
		Game.context.textAlign = "center";
		Game.context.fillStyle = this.color;
		Game.context.fillText(this.value, this.x, this.y + parseInt(font));
	}
}
