function checkSupported() {
  canvas = document.getElementById('canvas');
  if (canvas.getContext){
    ctx = canvas.getContext('2d');
    this.gridSize = 10;
    addCar(60,60);
  } else {
    alert("We're sorry, but your browser does not support the canvas tag. Please use any web browser other than Internet Explorer.");
  }
}

function addCar(x,y){
  car = new Image();   
  car.src = '../car.png';
  speed = 0;
  drawCar(x,y);
}

function drawCar(x,y){
  ctx.drawImage(car, x, y);
  currentPosition = {'x':x, 'y':y}  
}

function removeCar(x,y){
  ctx.clearRect(x-10,y-10, 70+(70*speed),70+(70*speed));
}

function moveCar(newPosition){
  removeCar(currentPosition['x'], currentPosition['y']);
  drawCar(newPosition['x'], newPosition['y']);  
}

function goUp(){
  speed = speed + 1;
  newPosition = currentPosition;
  newPosition['y'] = currentPosition['y'] - speed;
  moveCar(newPosition);
}

function goDown(){
  newPosition = currentPosition;
  newPosition['y'] = currentPosition['y'] + 2;
  moveCar(newPosition);
}

function goRight(){
  newPosition = currentPosition;
  ctx.rotate(1.0);
  moveCar(newPosition);
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