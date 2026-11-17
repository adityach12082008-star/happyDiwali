const { areEqual } = require("./deepEquality");

function test(message, expected, value1, value2) {
  const actual = areEqual(value1, value2);
  const isPassed = actual === expected ? "☑️" : "❌";
  console.log(`${isPassed}  |  ${message}`);
}
function testNumbers() {
  test("different numbers should be un-equal", false, 1, 2);
  test("same numbers should be equal", true, 1, 1);
}
function testBooleans() {
  test("different booleans", false, false, true);
  test("same booleans", true, true, true);
}
function testStrings() {
  test("different alphabets", false, "a", "b");
  test("case sensitive", false, "aditya-superstar", "Aditya-superstar");
}
function testArrays() {
  test("empty arrays", true, [], []);
  test("different sizes", false, [1], [1, 2]);
  test("nested array with different elements", false, [1, [2]], [1, [3]]);
  test("nested array wuth same elements", true, [1, 2, [4]], [1, 2, [4]]);
}
function testObjects() {
  test("empty objects", true, {}, {});
  test("objects with differnt keys", false, { a: 1 }, { b: 1 });
  test("objects with same keys", true, { a: 1 }, { a: 1 });
  test("Nested object,differentkeys", false, { a: { c: 2 } }, { a: { b: 2 } });
  test("Nested objects with same keys", true, { a: { b: 2 } }, { a: { b: 2 } });
  test("Nested objects,diff values", false, { a: { b: 3 } }, { a: { b: 2 } });
}
function testNanNullUndefined() {
  test("both values are undefined", true, undefined, undefined);
  test("both values are null", true, null, null);
  test("both values are NaN", true, NaN, NaN);
  test("NaN and undefined", false, NaN, undefined);
  test("NaN and null", false, NaN, null);
}
function main() {
  console.log("Booleans");
  testBooleans();

  console.log("\nNumbers");
  testNumbers();

  console.log("\nStrings");
  testStrings();

  console.log("\nArrays");
  testArrays();

  console.log("\nObjects");
  testObjects();

  console.log("\nnan,null,undefined");
  testNanNullUndefined();
}
main();
