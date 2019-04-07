PlayerObj = function(x, y, width, height, color){
	this.rect = new Rectangle(x, y, width, height);
	this.prevPos = new Vector2(this.rect.x, this.rect.y);
	this.direction = new Vector2(0, 0);
	this.Update = function(){
		this.prevPos.Set(this.rect.x, this.rect.y);
		
		this.rect.x = this.prevPos.x + this.direction.x;
		this.rect.y = this.prevPos.y + this.direction.y;
		if (this.rect.x < 0){
		  this.rect.x = 0;
		}
		if (this.rect.y < 0){
		  this.rect.y = 0;
		}
		if (this.rect.x > Game.canvas.width - this.rect.width){
		  this.rect.x = Game.canvas.width - this.rect.width;
		}
		if (this.rect.y > Game.canvas.height - this.rect.height){
		  this.rect.y = Game.canvas.height - this.rect.height;
		}
		for (var i = Elements.length - 1; i >= 0; i--) {
			if(this.rect.Intersects(Elements[i])){
		    	this.rect.x = this.prevPos.x;
		    	this.rect.y = this.prevPos.y;
			}	
		}
		this.direction.Set(0, 0);
	}
	this.Draw = function(){
		this.rect.Draw(Game.context, color);
	}
}
