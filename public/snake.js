function checkSupported() {
  canvas = document.getElementById('canvas');
  if (canvas.getContext){
    ctx = canvas.getContext('2d');
    this.currentPosition = {'x':50, 'y':50};
    this.gridSize = 10;
    snakeBody = [];
    snakeLength = 3;
    makeFoodItem();
    drawSnake();
    direction = 'right';
    setInterval(moveSnake,100);
  } else {
    alert("We're sorry, but your browser does not support the canvas tag. Please use any web browser other than Internet Explorer.");
  }
}

function drawSnake() {
  snakeBody.push([currentPosition['x'], currentPosition['y']]);
  ctx.fillStyle = "rgb(200,0,0)";
  ctx.fillRect(currentPosition['x'], currentPosition['y'], gridSize, gridSize);
  if (snakeBody.length > snakeLength) {
    var itemToRemove = snakeBody.shift();
    ctx.clearRect(itemToRemove[0], itemToRemove[1], gridSize, gridSize);
  }
  if (currentPosition['x'] == suggestedPoint[0] && currentPosition['y'] == suggestedPoint[1]) {
    makeFoodItem();
    snakeLength += 1;
  }
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

function whichWayToGo(axisType){  
  if (axisType=='x') {
    a = (currentPosition['x'] > canvas.width / 2) ? moveLeft() : moveRight();
  } else {
    a = (currentPosition['y'] > canvas.height / 2) ? moveUp() : moveDown();
  }
}

function moveUp(){
  if (upPosition() >= 0) {
    executeMove('up', 'y', upPosition());
  } else {
    whichWayToGo('x');
  }
}

function moveDown(){
  if (downPosition() < canvas.height) {
    executeMove('down', 'y', downPosition());    
  } else {
    whichWayToGo('x');
  }
}

function moveLeft(){
  if (leftPosition() >= 0) {
    executeMove('left', 'x', leftPosition());
  } else {
    whichWayToGo('y');
  }
}

function moveRight(){
  if (rightPosition() < canvas.width) {
    executeMove('right', 'x', rightPosition());
  } else {
    whichWayToGo('y');
  }
}

function executeMove(dirValue, axisType, axisValue) {
  direction = dirValue;
  currentPosition[axisType] = axisValue;
  drawSnake();
}

function makeFoodItem(){
  suggestedPoint = [Math.floor(Math.random()*(canvas.width/gridSize))*gridSize, Math.floor(Math.random()*(canvas.height/gridSize))*gridSize];
  if (snakeBody.some(hasPoint)) {
    makeFoodItem();
  } else {
    ctx.fillStyle = "rgb(10,100,0)";
    ctx.fillRect(suggestedPoint[0], suggestedPoint[1], gridSize, gridSize);
  };
}

function hasPoint(element, index, array) {
  return (element[0] == suggestedPoint[0] && element[1] == suggestedPoint[1]);
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
    case 37:
      moveLeft();
      break;
     
    case 38:
      moveUp();
      break; 
      
    case 39:
      moveRight();
      break; 
    
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