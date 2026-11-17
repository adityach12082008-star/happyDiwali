const array = [1, 2, 3, 1, 2, 3, 1, 1, 1, 4, 5, 1, 2, 3, 5, 1, 1, 2];

function decideDirection(array, start) {
  if (array.length === 0 || array.length === 1) return;
  for (let index = start; index < array.length; index++) {
    if (array[index] < array[index + 1]) return 1; //ascending
    if (array[index] > array[index + 1]) return 0; //descending
  }
  return null;
}

function findTheRun(array, direction) {
  const run = [];
  run.push([]);
  let i = 0;

  for (let index = 0; index < array.length; index++) {
    if (index === array.length - 2)
      if (direction === decideDirection(array, index)) {
        run[i].push(array[index]);
        run[i].push(array[index + 1]);
        return run;
      } else {
        run[i].push(array[index]);
        run.push([]);
        run[i + 1].push(array[index + 1]);
        return run;
      }

    if (
      (direction === 1 && array[index] <= array[index + 1]) ||
      (direction === 0 && array[index] >= array[index + 1]) ||
      (direction === null && array[index] === array[index + 1])
    )
      run[i].push(array[index]);
    else {
      run[i].push(array[index]);
      run.push([]);
      i++;
      direction = decideDirection(array, index + 1);
    }
  }
  return run;
}

console.log(findTheRun(array, decideDirection(array, 0)));
