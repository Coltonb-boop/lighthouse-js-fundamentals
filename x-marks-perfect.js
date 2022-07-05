const finalPosition = (movements) => {
  let position = [0, 0];    // [x, y]

  for (let move of movements) {
    switch (move) {
      case 'north':
        position[1] += 1;
        break;
      case 'south':
        position[1] -= 1;
        break;
      case 'west':
        position[0] -= 1;
        break;
      case 'east':
        position[0] += 1;
        break;
    }
  }
  
  return position;
}





const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

finalPosition(moves);
