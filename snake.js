class Snake {

  constructor() {
		this.body = [];
		this.body [0] = createVector (1,1);
		this.xdir = 0;
		this.ydir = 0;
  }

	update() {
		//this.body[0].x = this.body.[0].x + this.xdir == this.body[0].x += this.xdir;
		let head = this.body[0].copy();
		this.body.pop();
		head.x += this.xdir;
		head.y += this.ydir;
		this.body.unshift(head);

	}

	show() {
		fill(0);
		for(let i = 0; i <= this.body.length - 1; i++){
			rect(this.body[i].x,this.body[i].y,1,1);
		}

	}

	endGame(){
		let head = this.body[0];
		if(head.x < 0 || head.x > w - 1 || head.y < 0 || head.y > h - 1) {
			 return true;
		}
		for(let i = 1; i < this.body.length; i++){
			let part = this.body[i];
			if (head.x == part.x && head.y == part.y){
				return true;
			}

		}
		return false;

	}

	eat(food){
		let head = this.body[0];
		if (head.x == food.x && head.y == food.y) {
			print("FOOD EATEN");
			this.grow();
			return true;		// para de executar no primeiro return caso seja true
		}
		return false;

	}

	grow(){
		let tail = this.body[this.body.length - 1].copy();
		this.body.push(tail);
	}

}
