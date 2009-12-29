function checkSupported() {
  canvas = document.getElementById('canvas');
  if (canvas.getContext){
    ctx = canvas.getContext('2d');
    // Canvas is supported

    // The current position of the Snake's head, as xy coordinates
    this.currentPosition = {'x':50, 'y':50};
    
    // Sets the grid dimensions as one value
    this.gridSize = 10;


    // This sets the fill color to red
    ctx.fillStyle = "rgb(200,0,0)";
    drawSnake();
    direction = 'right';
    setInterval(moveSnake,100);
  } else {
    // Canvas is not supported
    alert("We're sorry, but your browser does not support the canvas tag. Please use any web browser other than Internet Explorer.");
  }
}

function drawSnake() {
  ctx.fillRect(currentPosition['x'], currentPosition['y'], gridSize, gridSize);
}

function leftPosition(){
 return currentPosition['x'] - gridSize;  
}

function rightPosition(){
  return currentPosition['x'] + gridSize;
}

function upPosition(){
  return currentPosition['y'] - gridSize;  
}

function downPosition(){
  return currentPosition['y'] + gridSize;
}

function moveUp(){
  if (upPosition() >= 0) {
    executeMove('up', 'y', upPosition());
  }
}

function moveDown(){
  if (downPosition() < canvas.height) {
    executeMove('down', 'y', downPosition());    
  }
}

function moveLeft(){
  if (leftPosition() >= 0) {
    executeMove('left', 'x', leftPosition());
  }
}

function moveRight(){
  if (rightPosition() < canvas.width) {
    executeMove('right', 'x', rightPosition());
  }
}

function executeMove(dirValue, axisType, axisValue) {
  direction = dirValue;
  currentPosition[axisType] = axisValue;
  drawSnake();
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
      moveLeft();
      break;
     
    // up 
    case 38:
      moveUp();
      break; 
      
    // right 
    case 39:
      moveRight();
      break; 
    
    // down
    case 40:
      moveDown();
      break; 
    
    default: 
      break; 
  } 
}

function moveSnake(){
  switch(direction){
    case 'up':
      moveUp();
      break;

    case 'down':
      moveDown();
      break;
      
    case 'left':
      moveLeft();
      break;

    case 'right':
      moveRight();
      break;
  }
}