const d = require("./deepEquality");

// function run(array) {
//   const run = [];
//   const temp = [];

//   if (array.length === 0 || array.length === 1) {
//     temp.push(array[0]);
//     run.push(temp);
//     return run;
//   }

//   for (i = 0; i < array.length; i++) {
//     const direction = array[i] <= array[i + 1];
//     if (direction) temp.push(array[i]);
//     else {
//       temp.splice(0, temp.length);
//     }
//   }
//   return run;
// }
function test(message, a, expected) {
  const isPassed = d.areEqual(expected, run(a)) ? "☑️" : "❌";
  console.log(isPassed, "|", run(a), "  |  ", a, "|", message);
}

function main() {
  test("array with single element", [], []);
  test("array with single element", [0], [[0]]);
  test("array with multiple same element", [1, 2, 3, 1], [[1, 2, 3], [1]]);
}
main();

function run(array) {
  const run = [];
  let temp = [];

  if (array.length === 0) return run;

  temp.push(array[0]);

  for (let i = 1; i < array.length; i++) {
    if (array[i] >= array[i - 1]) {
      temp.push(array[i]);
    } else {
      run.push(temp);
      temp = [array[i]];
    }
  }

  run.push(temp);

  return run;
}
