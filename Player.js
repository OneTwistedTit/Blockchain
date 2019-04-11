playerObj = function(x, y, width, height, color){
	this.rect = new Rectangle(x, y, width, height, color);
	this.prevPos = new Vector2(this.rect.x, this.rect.y);
	this.direction = new Vector2(0, 0);
	this.update = function(){
		this.prevPos.set(this.rect.x, this.rect.y);

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
		if (Game.keys) {
		    if (Game.keys[65]) this.direction.set(-1, this.direction.y);
		    if (Game.keys[68]) this.direction.set(1, this.direction.y);
		    if (Game.keys[87]) this.direction.set(this.direction.x, -1);
		    if (Game.keys[83]) this.direction.set(this.direction.x, 1);
		}
		for (var i = Elements.length - 1; i >= 0; i--) {
			if(this.rect.intersects(Elements[i])){
		    	this.rect.x = this.prevPos.x;
		    	this.rect.y = this.prevPos.y;
			}	
		}
		this.direction.set(0, 0);
	}
	this.draw = function(){
		this.rect.draw();
	}
}
