function getType(value) {
  if (Array.isArray(value)) return "array";
  if (value === null) return "null";
  if (Number.isNaN(value)) return "NaN";
  return typeof value;
}

function areEqualArrays(value1, value2) {
  if (value1.length !== value2.length) return false;

  for (let index = 0; index < value1.length; index++) {
    if (!areEqual(value1[index], value2[index])) return false;
  }
  return true;
}

function areEqualObjects(value1, value2) {
  const keysA = Object.keys(value1);
  const keysB = Object.keys(value2);

  if (keysA.length !== keysB.length) return false;

  for (const keys of keysA) {
    if (!Object.hasOwn(value2, keys)) return false;
    if (!areEqual(value1[keys], value2[keys])) return false;
  }
  return true;
}

function areSameType(value1, value2) {
  if (getType(value1) === getType(value2)) return true;
  return false;
}

function areEqual(value1, value2) {
  if (!areSameType(value1, value2)) return false;

  switch (getType(value1)) {
    case "NaN":
      return true;
    case "array":
      return areEqualArrays(value1, value2);
    case "object":
      return areEqualObjects(value1, value2);
    default:
      return value1 === value2;
  }
}

module.exports = {
  areEqual,
};
