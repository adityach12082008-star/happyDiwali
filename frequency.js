const input = [4, 6, 4, 6, "aditya", "aditya", false, null, 1, 1];

function counter(element, array) {
  let elementCounter = 0;

  for (let index = 0; index < array.length; index++)
    if (array[index] === element) {
      elementCounter++;
    }

  return elementCounter;
}

function implementFrequency(array) {
  const resultObject = {};
  const uniqueElements = [];

  for (let count = 0; count < array.length; count++)
    if (!uniqueElements.includes(array[count])) {
      uniqueElements.push(array[count]);
    }

  for (let count = 0; count < uniqueElements.length; count++)
    resultObject[uniqueElements[count]] = counter(uniqueElements[count], array);

  return resultObject;
}

console.log(implementFrequency(input));
