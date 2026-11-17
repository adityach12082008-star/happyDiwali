function getType(value) {
  if (Array.isArray(value)) return "array";
  return typeof value;
}

function areEqual(value1, value2) {
  if (getType(value1) != getType(value2)) return false;

  if (getType(value1) === "array") {
    if (value1.length != value2.length) return false;

    for (let index = 0; index < value1.length; index++) {
      if (!areEqual(value1[index], value2[index])) return false;
    }
    return true;
  }

  if (value1 != value2) return false;

  return true;
}
module.exports = {
  areEqual,
};
