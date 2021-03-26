function isTouching(){

    if(car.x - wall1.x < car.width/2 + wall1.width/2 && wall1.x - car.x < car.width/2 + wall1.width/2){
      return true;
    }
    else{
      return false;
    }
  
  }
  
  function BounceOff(){
  
    if(car.x - wall.x < car.width/2 + wall.width/2 && wall.x - car.x < car.width/2 + wall.width/2){
      return true;
    }
    else{
      return false;
    }
  
  }

  function Bounce(){

    if(car.x - wall.x < car.width/2 + wall.width/2 && wall.x - car.x < car.width/2 + wall.width/2){
        return true;
      }
      else{
        return false;
      }
      
  }