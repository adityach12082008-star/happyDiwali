const d = require("./deepEquality");

function run(array) {
  const run = [];
  run.push([]);
  return run;
}
function test(message, a, expected) {
  const isPassed = d.areEqual(expected, run(a)) ? "☑️" : "❌";
  console.log(`${isPassed} | | exp:${expected}| ${message}`);
}

function main() {
  test("two empty arrays", [], [[]]);
}
main();
