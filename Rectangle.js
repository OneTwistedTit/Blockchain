Rectangle = function(x, y, width, height){
	if(x == null || y == null || width == null || height == null){
		var err = "";
		if(x == null){
			err += "'x' ";
		}
		if(y == null){
			err += "'y' ";
		}
		if(width == null){
			err += "'width' ";
		}
		if(height == null){
			err += "'height'"''
		}
		throw new Error(err);
	}
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.contains = function(x, y) {
    if (x >= this.x && x <= this.x + this.width && y >= this.y && y <= this.y + this.height) {
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
     }
     else if (other.contains(this.x, this.y) || other.contains(this.x + this.width, this.y)
      || other.contains(this.x, this.y + this.height) ||
      other.contains(this.x + this.width, this.y + this.height)) {
        return true;
      } else {
        return false;
      }
  }
  this.draw = function(ctx, color){
  	ctx.fillStyle = color;
  	ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
