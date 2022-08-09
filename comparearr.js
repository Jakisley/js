const compareArr = (arr) => {
  const resultArr = [];

  for (let i = 0; i < arr.length - 1; i++) {
    let currentString = arr[i];
    let nextString = arr[i + 1];

    const isFirstCharMatch = currentString[0] === nextString[0];
    const isLastCharMatch = currentString[currentString.length - 1] === nextString[nextString.length - 1];

    resultArr.push(isFirstCharMatch && isLastCharMatch);
  }

  return resultArr;
};

console.log(compareArr(["ass", "afffd", "ad", "ad"]));
