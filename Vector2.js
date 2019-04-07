Vector2 = function(x, y){
	this.x = 0;
	this.y = 0;

	if (x == null || y == null){
		var err = "Missing parameters for Vector2: ";
		if(x == null) err += "'x' ";
		if(y == null) err += "'y'";
		throw new Error(err);
	}
	this.x = x;
	this.y = y;

	this.prevX = 0;
	this.prevY = 0;

	this.Set = function(){
		if(x == null || y == null){
			var err = "Missing parameters for Vector2.Set: ";
			if(x == null) err += "'x' ";
			if(y == null) err += "'y'";
			throw new Error(err);
		}
		this.prevX = this.x;
		this.prevY = this.y;

		this.x = x;
		this.y = y;
	}
	this.Normalize = function(){
		var tmp = Vector2(this.x, this.y)

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