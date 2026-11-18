const d = require("./deepEquality");

function run(array) {
  const run = [];
  let temp = [];
  let direction = 0;
  if (array.length === 0) return run;

  temp.push(array[0]);

  for (let i = 1; i < array.length; i++) {
    direction = array[i] - array[i - 1];
    if (direction >= 1 || direction === 0) {
      temp.push(array[i]);
    } else if (direction <= -1 || direction === 0) {
      temp.push(array[i]);
    } else {
      // else block is never executing
      run.push(temp);
      temp = [array[i]];
    }
  }

  run.push(temp);

  return run;
}

function test(message, a, expected) {
  const isPassed = d.areEqual(expected, run(a)) ? "☑️" : "❌";
  console.log(isPassed, "|", expected, "  |  ", run(a), "|", message);
}

function main() {
  test("array with single element", [], []);
  test("array with single element", [0], [[0]]);
  test("array with multiple same element", [1, 1, 1, 1], [[1, 1, 1, 1]]);
  test(
    "array with two ascending runs",
    [1, 2, 4, 3, 4, 5],
    [
      [1, 2, 4],
      [3, 4, 5],
    ],
  );
  test("array with  descending run", [4, 3, 2], [[4, 3, 2]]);
}
main();
