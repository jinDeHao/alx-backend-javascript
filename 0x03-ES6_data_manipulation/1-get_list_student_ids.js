export default function getListStudentIds(arrayOfObjects) {
  if (typeof arrayOfObjects !== 'object') {
    return [];
  }
  return arrayOfObjects.map((item) => item.id);
}
