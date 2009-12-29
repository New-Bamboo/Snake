function draw() {
 canvas = document.getElementById("canvas");  
 if (canvas.getContext) {
   this.x = canvas.width / 2;
   this.y = canvas.height / 2;
   this.av = 10;
   ctx = canvas.getContext("2d");
   arr = ['Up', 'Down', 'Left', 'Right'];
   setInterval(autodraw,100);
  }  
}

function autodraw() {
  if (arr[Math.floor(Math.random()*arr.length)] == 'Up') {
    goUp();                                    
  };                                           
  if (arr[Math.floor(Math.random()*arr.length)] == 'Down') {
    goDown();                                  
  };                                           
  if (arr[Math.floor(Math.random()*arr.length)] == 'Left') {
    goLeft();                                  
  };                                           
  if (arr[Math.floor(Math.random()*arr.length)] == 'Right') {
    goRight();
  };
}

function createSquare(x, y, w, h) {
  if (x < canvas.width && y < canvas.height) {
    ctx.fillStyle = "rgba(200,0,0, 0.1)";
    ctx.fillRect (x, y, w, h);
    ctx.strokeStyle = "rgba(200,0,0, 0.5)";
    ctx.strokeRect (x, y, w, h);
  }
}

document.onkeydown = function(event) {
  var keyCode; 
  
  if(event == null)
  {
    keyCode = window.event.keyCode; 
  }
  else 
  {
    keyCode = event.keyCode; 
  }
 
  switch(keyCode)
  {
    // left 
    case 37:
      goLeft();
      break; 
     
    // up 
    case 38:
      goUp();
      break; 
      
    // right 
    case 39:
      goRight();
      break; 
    
    // down
    case 40:
      goDown();
      break; 
    
    default: 
      break; 
  } 
}

function goLeft() {
  if ((x - av) >= 0) {
    x = x - av;
    createSquare(x, y, 10, 10);
  }
}

function goRight() {
  if ((x + av) < canvas.width) {
    x = x + av;
    createSquare(x, y, 10, 10);
  }
}

function goUp() {
  if ((y - av) >= 0)
  y = y - av;
  createSquare(x, y, 10, 10);
}

function goDown() {
  if ((y + av) < canvas.height) {
    y = y + av;
    createSquare(x, y, 10, 10);
  }
}

