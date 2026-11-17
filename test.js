const { areEqual } = require("./deepEquality");

function test(message, expected, value1, value2) {
  const actual = areEqual(value1, value2);
  const isPassed = actual === expected ? "☑️" : "❌";
  console.log(`${isPassed}  |  ${message}`);
}
function testNumbers() {
  test("different numbers should be un-qual", false, 1, 2);
  test("same numbers should be equal", true, 1, 1);
}
function testBooleans() {
  test("different booleans should be unequal", false, false, true);
  test("same booleans should be equal", true, true, true);
}
function testStrings() {
  test("different alphabets should be unequal", false, "a", "b");
  test("case sensitive,unequal", false, "aditya-superstar", "Aditya-superstar");
}
function testArrays() {
  test("empty arrays,equal", true, [], []);
  test("different sizes,un-equal", false, [1], [1, 2]);
  test(
    "nested array with different elements,unequal",
    false,
    [1, [2]],
    [1, [3]],
  );
  test("nested array wuth same elements,equal", true, [1, 2, [4]], [1, 2, [4]]);
}
function testObjects() {
  test("empty objects,equal", true, {}, {});
  test("objects with differnt keys,unequal", false, { a: 1 }, { b: 1 });
  test("objects with same keys,equal", true, { a: 1 }, { a: 1 });
  test(
    "Nested object,differentkeys,unequal",
    false,
    { a: { c: 2 } },
    { a: { b: 2 } },
  );
  test(
    "Nested objects with same keys,equal",
    true,
    { a: { b: 2 } },
    { a: { b: 2 } },
  );
  test(
    "Nested objects,diff values,unequal",
    false,
    { a: { b: 3 } },
    { a: { b: 2 } },
  );
}
function testNanNullUndefined() {
  test("both values are undefined,equal", true, undefined, undefined);
  test("both values are null,equal", true, null, null);
  test("both values are NaN,equal", true, NaN, NaN);
  test("NaN and undefined,unequal", false, NaN, undefined);
  test("NaN and null,unequal", false, NaN, null);
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
