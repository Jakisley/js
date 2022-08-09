const fillMatrix = (size) => {
  const initMatrix = new Array(size).fill(null).map(() => new Array(size).fill(null));
  let count = -1;
  let step = size;
  let x = 0;
  let y = -1;
  while (step >= 0) {
    for (let iterIndex = 0; iterIndex < step; iterIndex++) { 
      y++; 
      count++; 
      initMatrix[x][y] = count; 
    }
    step--;
    if (step === 0) { break; }
    for (let iterIndex = 0; iterIndex < step; iterIndex++) { 
      x++; 
      count++; 
      initMatrix[x][y] = count; }
    for (let iterIndex = 0; iterIndex < step; iterIndex++) { 
      y--; 
      count++; 
      initMatrix[x][y] = count; }
    step--;
    if (step === 0) { break; }
    for (let iterIndex = 0; iterIndex < step; iterIndex++) { 
      x--; 
      count++; 
      initMatrix[x][y] = count; }
  }
  return initMatrix;
};

console.log(fillMatrix(5));
