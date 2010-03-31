function checkSupported(){
  map = Raphael(0,0,800,600);
  addCar(300,300);
}

function addCar(x,y){
  car = map.rect(x,y, 50, 90, 5);
  car.attr('fill', '#f00');
  angle = 0;
  speed = 0;
  direction = '';
}

function moveForward(){
  direction = 'forward';
  speed += 1.1;
  // x = -10 * Math.cos(angle*(Math.PI/180));
  // y = -10 * Math.sin(angle*(Math.PI/180));
  x = 0;
  y = -5 * speed;
  car.translate(x,y);
}



function moveBackward(){
  direction = 'backward';
  x = 0;
  y = 5;
  car.translate(x,y);
}

function goLeft(){
  angle -= 20;
  car.rotate(-20);
}

function goRight(){
  angle += 20;
  car.rotate(20);
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
      moveForward();
      break; 
      
    // right 
    case 39:
      goRight();
      break; 
    
    // down
    case 40:
      moveBackward();
      break; 
    
    default: 
      break; 
  } 
}