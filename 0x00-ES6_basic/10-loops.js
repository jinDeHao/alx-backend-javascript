export default function appendToEachArrayValue (array, appendString) {
  const _array = [];
  for (const idx in array) {
    _array.push(appendString + idx);
  }
  return _array;
}
