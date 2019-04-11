Vector2 = function(x, y){
	this.x = x;
	this.y = y;

	this.prevX = null;
	this.prevY = null;

	this.set = function(x, y){
		this.prevX = this.x;
		this.prevY = this.y;

		this.x = x;
		this.y = y;
	}
	this.distance = function(vec2){
		if(vec2 != null){
			return Math.sqrt((vec2.x - this.x) ** 2 + (vec2.y - this.y) ** 2);
		} else {
			return Math.sqrt((this.prevX - this.x) ** 2 + (this.prevY - this.y) ** 2);
		}
	}
	this.hasChanged = function(){
		if(this.x != this.prevX || this.y != this.prevY) return true;
		return false;
	}
	this.toArray = function(){
		return [this.x, this.y];
	}
	this.writeArray = function(arrXY){
		this.set(arrXY[0], arrXY[1]);
	}
}

Rectangle = function(x, y, width, height, color){
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	if(color == null || !color){
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
	this.intersects = function(other){
	    if (this.contains(other.x, other.y) || this.contains(other.x + other.width, other.y)
	    || this.contains(other.x, other.y + other.height) ||
	    this.contains(other.x + other.width,other.y + other.height)){
	    	return true;
	    } else if (other.contains(this.x, this.y) || other.contains(this.x + this.width, this.y)
	      || other.contains(this.x, this.y + this.height) ||
	      other.contains(this.x + this.width, this.y + this.height)) {
	   		return true;
	    } else {
	    	return false;
	    }
  	}
  	this.draw = function(){
	  	Game.context.fillStyle = color;
	  	Game.context.fillRect(this.x, this.y, this.width, this.height);
  	}
}

Text = function(x, y, text, font, textAlign, color){
	this.x = x;
	this.y = y;
	this.value = text;
	if(color == null || !color){
		this.color = "rgba(0, 0, 0, 1)";
	} else {
		this.color = color;
	}
	this.draw = function(){
		Game.context.font = font;
		if (textAlign == null || !textAlign){
			Game.context.textAlign = "center";
		} else {
			Game.context.textAlign = textAlign;
		}
		Game.context.fillStyle = this.color;
		Game.context.fillText(this.value, this.x, this.y);
	}
}
Circle = function(x, y, radius, color){
	this.radius = radius;
	this.x = x + this.radius;
	this.y = y + this.radius;
	this.color = color;
	this.draw = function(){
		Game.context.fillStyle = color;
		Game.context.beginPath();
		Game.context.arc(this.x, this.y, radius, 0, 2 * Math.PI);
		Game.context.fill();
	}
	this.contains = function(arrXY){
		return (((arrXY[0] - this.x)**2 + (arrXY[1] - this.y)**2) <= (this.radius)**2);
	}
	
}
ImageObj = function(x, y, width, height, src){
	this.rect = new Rectangle(x, y, width, height);
	this.image = new Image();
	this.image.src = src;
	this.draw = function(){
		Game.context.drawImage(this.image, this.rect.x, this.rect.y, this.rect.width, this.rect.height);
	}
}
