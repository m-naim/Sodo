
    
function Ball(){
    this.x= canvas.width*Math.random()
    this.y= canvas.height-7
    this.vy= Math.random()+0.2
    this.radius= 5*Math.random()+3
    this.color= (Math.random()<0.5)?'firebrick': 'gray';
    this.draw= function () {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
      ctx.closePath();
      ctx.fillStyle = this.color;
      ctx.fill();
    }
    this.mouveUp= function (){        
        this.y -= this.vy;
        this.draw();
    }
  };

  var balls=[];
  function creatBall(){
    balls.push(new Ball());
}
window.setInterval(creatBall,100);
  

  (function animate() {
    ctx.clearRect(0,0, canvas.width, canvas.height);
    balls.forEach(e=>e.mouveUp());
    balls=balls.filter(e =>
            (e.y + e.vy > canvas.height || e.y + e.vy < 0)? false : true
        )
    var raf = window.requestAnimationFrame(animate);
  })()
 
  