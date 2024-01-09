export default function getListStudentIds(arrayOfObjects) {
  if (typeof arrayOfObjects !== 'array') {
    return [];
  }
  return arrayOfObjects.map((item) => item.id);
}
