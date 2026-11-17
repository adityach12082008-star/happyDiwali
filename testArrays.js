const d = require("./deepEquality");

const testData = [
  {
    a: 1,
    b: 2,
    type: "different numbers",
    expectedOutput: false,
  },
  {
    a: 1,
    b: "a",
    type: "different types",
    expectedOutput: false,
  },
  {
    a: "b",
    b: "a",
    type: "different characters",
    expectedOutput: false,
  },
  {
    a: true,
    b: false,
    type: "different booleans",
    expectedOutput: false,
  },
  {
    a: undefined,
    b: undefined,
    type: "both undefined",
    expectedOutput: true,
  },
  {
    a: undefined,
    b: false,
    type: "undefined and false",
    expectedOutput: false,
  },
  {
    a: null,
    b: null,
    type: "both null",
    expectedOutput: true,
  },
  {
    a: null,
    b: {},
    type: "null and empty object",
    expectedOutput: false,
  },
  {
    a: [],
    b: [],
    type: "empty array",
    expectedOutput: true,
  },
  {
    a: [1],
    b: [1],
    type: "same array",
    expectedOutput: true,
  },
  {
    a: [1],
    b: [1, 2],
    type: "different array sizes",
    expectedOutput: false,
  },
  {
    a: [1, 3],
    b: [1, 2],
    type: "different numbers inside array",
    expectedOutput: false,
  },

  {
    a: [undefined],
    b: [null],
    type: "array with undefined and null",
    expectedOutput: false,
  },
  {
    a: [undefined],
    b: [],
    type: "array with undefined and empty array",
    expectedOutput: false,
  },
  {
    a: [1, undefined, 3],
    b: [1, undefined, 3],
    type: "same array with undefined in middle",
    expectedOutput: true,
  },
  {
    a: [1, undefined, 3],
    b: [1, null, 3],
    type: "different array values with undefined and null",
    expectedOutput: false,
  },
  {
    a: [1, [1, [1, [1]]]],
    b: [1, [1, [1, [2]]]],
    type: "nested array",
    expectedOutput: false,
  },
  {
    a: {},
    b: [],
    type: "different types: object and array",
    expectedOutput: false,
  },
  {
    a: {},
    b: {},
    type: "empty objects",
    expectedOutput: true,
  },
  {
    a: { a: 1 },
    b: { a: 1 },
    type: "same object",
    expectedOutput: true,
  },
  {
    a: { a: 1 },
    b: { b: 1 },
    type: "different object keys",
    expectedOutput: false,
  },
  {
    a: { a: 1, b: 2 },
    b: { b: 2, a: 1 },
    type: "same object with different key order",
    expectedOutput: true,
  },
  {
    a: { a: undefined },
    b: {},
    type: "object with undefined and empty object",
    expectedOutput: false,
  },
  {
    a: { a: undefined, b: 1 },
    b: { a: 1, b: undefined },
    type: "different object values with undefined",
    expectedOutput: false,
  },
  {
    a: { a: { b: 1 } },
    b: { a: { b: 1 } },
    type: "same nested object",
    expectedOutput: true,
  },
  {
    a: { a: { b: 1 } },
    b: { a: { b: 2 } },
    type: "nested object with different values",
    expectedOutput: false,
  },
  {
    a: { a: { b: undefined } },
    b: { a: { b: undefined } },
    type: "nested object with undefined",
    expectedOutput: true,
  },
  {
    a: { a: { b: undefined } },
    b: { a: {} },
    type: "nested object with missing undefined key",
    expectedOutput: false,
  },
  {
    a: { a: [undefined, { b: undefined }] },
    b: { a: [undefined, { b: undefined }] },
    type: "nested array and object with undefined",
    expectedOutput: true,
  },
];

for (const data of testData) {
  console.log(
    `expected: ${data.expectedOutput}`,
    `actual:${d.areEqual(data.a, data.b)}`,
    `type: ${data.type}`,
  );
}
