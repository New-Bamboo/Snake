function imAlive(){
 interval = setInterval(whereShallIGo,5);
}

function imAsleep(){
  clearInterval(interval);  
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
  if (xOffset() >= 0) xDirection = 'right';
  if (xOffset() < 0) xDirection = 'left';
  if (yOffset() >= 0) yDirection = 'down';
  if (yOffset() < 0) yDirection = 'up';
  if (range(xOffset()) > (range(yOffset()))){
    if (xDirection == 'right' && direction != 'left') moveRight();
    if (xDirection == 'left' && direction != 'right') moveLeft();
  } else {
    if (yDirection == 'down' && direction != 'up') moveDown();
    if (yDirection == 'up' && direction != 'down') moveUp();    
  }
}

function willIBumpIntoMyself(axisDirection){
  var answer = false;
  var pathBeginsAt = currentPosition;
  switch(axisDirection) {
    case 'left':
    while(pathBeginsAt['x'] >= 0){
      answer = snakeBody.some(couldEatItself);
      leftPosition(pathBeginsAt);
    }
    if (answer==true) return answer;
    break;
    
    
    case 'right':
    while(pathBeginsAt['x'] < canvas.width){
      answer = snakeBody.some(couldEatItself);
      rightPosition(pathBeginsAt);
    }
    if (answer==true) return answer;
    break;
    
    
    case 'up':
    while(pathBeginsAt['y'] >= 0){
      answer = snakeBody.some(couldEatItself);
      upPosition(pathBeginsAt);
    }
    if (answer==true) return answer;
    break;
    
    
    case 'down':
    while(pathBeginsAt['y'] < canvas.height){
      answer = snakeBody.some(couldEatItself);
      downPosition(pathBeginsAt);
    }
    if (answer==true) return answer;
    break;    
  }
}

function couldEatItself(element, index, array) {
  return (element[0] == currentPosition['x'] && element[1] == currentPosition['y']);  
}
