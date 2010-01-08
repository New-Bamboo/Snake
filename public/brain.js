function imAlive(){
 interval = setInterval(whereShallIGo,70);
}


function xOffset(){
  return suggestedPoint[0] - currentPosition['x'];
}

function yOffset(){
  return suggestedPoint[1] - currentPosition['y'];
}

function range(value){
  if (value > 0 ) {
    return value
  } else {
    return value - (value * 2)
  }
}

function whereShallIGo(){
  xDirection = '';
  yDirection = '';
  if (xOffset() > 0) xDirection = 'right';
  if (xOffset() < 0) xDirection = 'left';
  if (yOffset() > 0) yDirection = 'down';
  if (yOffset() < 0) yDirection = 'up';
  if (range(xOffset()) > (range(yOffset()))){
    if (xDirection == 'right' && direction != 'left') moveRight();
    if (xDirection == 'left' && direction != 'right') moveLeft();
  } else {
    if (yDirection == 'down' && direction != 'up') moveDown();
    if (yDirection == 'up' && direction != 'down') moveUp();    
  }
}