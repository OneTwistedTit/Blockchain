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
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	if(color == null || !color){
		this.color = "rgba(0, 0, 0, 0";
	} else {
		this.color = color;
	}
	this.Contains = function(vec2) {
	    if (vec2.x >= this.x && vec2.x <= this.x + this.width && vec2.y >= this.y && vec2.y <= this.y + this.height) {
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
	    } else if (other.Contains(this.x, this.y) || other.Contains(this.x + this.width, this.y)
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

Text = function(x, y, text, font, textAlign, color){
	this.x = x;
	this.y = y;
	this.value = text;
	if(color == null || !color){
		this.color = "rgba(0, 0, 0, 1)";
	} else {
		this.color = color;
	}
	this.Draw = function(){
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
	this.Draw = function(){
		Game.context.fillStyle = color;
		Game.context.beginPath();
		Game.context.arc(this.x, this.y, radius, 0, 2 * Math.PI);
		Game.context.fill();
	}
	this.Contains = function(vec2){
		return (((vec2.x - this.x)**2 + (vec2.y - this.y)**2) <= (this.radius)**2);
	}
	
}
ImageObj = function(x, y, width, height, src){
	this.rect = new Rectangle(x, y, width, height);
	this.image = new Image();
	this.image.src = src
	this.Draw = function(){
		Game.context.drawImage(this.image, this.rect.x, this.rect.y, this.rect.width, this.rect.height);
	}
}
