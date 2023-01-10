function distanceFromHqInBlocks(someValue) {
   if (someValue >= 42)
        return (someValue - 42)
    else (someValue < 42)
        return (42 - someValue)

   
  }

  function distanceFromHqInFeet(someValue) {
    distanceFromHqInBlocks(someValue);
    if (someValue >= 42)
        return (someValue - 42) * 264
    else (someValue < 42)
        return (42 - someValue) *264
  }

  function distanceTravelledInFeet(start, destination) {
    if ( start <= destination)
        return (destination - start) * 264
    else ( start > destination)
        return (start - destination) * 264 

  }

  function calculatesFarePrice(start, destination) {
    if (start - destination <= 400)
         return (0)
    

  }