function wakeDog(dogName, dogBreed) {
  return (`Wake ${dogName} the ${dogBreed}`);
}

function leashDog(dogName, dogBreed) {
  return (`Leash ${dogName} the ${dogBreed}`);
}

function walkToPark(dogName, dogBreed) {
  return (`Walk to the park with ${dogName} the ${dogBreed}`);
}

function throwFrisbee(dogName, dogBreed) {
  return (`Throw the frisbee for ${dogName} the ${dogBreed}`);
}

function walkHome(dogName, dogBreed) {
  return (`Walk home with ${dogName} the ${dogBreed}`);
}

function unleashDog(dogName, dogBreed) {
  return (`Unleash ${dogName} the ${dogBreed}`);
}



const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

// Iterate over the routine Array
// Call each function in the array and
// pass the dogName and dogBreed received by exerciseDog() to the function as they are called
// capture the result of each function's call
// return an Array of all those functions' return values
let result = []

function exerciseDog(dogName, dogBreed) {
  let i = 0
  for (i = 0; i < routine.length; i++) {
      let routineToRun = routine[i]
      let resultToSave = routineToRun(dogName, dogBreed)
      result.push(resultToSave)
  }

  return result

}
