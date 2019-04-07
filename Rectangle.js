Rectangle = function(x, y, width, height){
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
  this.Draw = function(ctx, color){
  	ctx.fillStyle = color;
  	ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
