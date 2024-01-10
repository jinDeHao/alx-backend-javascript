export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') {
    return '';
  }
  const newArray = Array.from(set);
  return newArray
    .filter((item) => item.startsWith(startString))
    .map((item) => item.slice(startString.length))
    .join('-');
}
