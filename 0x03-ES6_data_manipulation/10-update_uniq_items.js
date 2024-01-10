export default function updateUniqueItems(map) {
  if (map.constructor.name !== 'Map') throw Error('Cannot process');
  map.forEach((val, key, map) => {
    if (val === 1) return map.set(key, 100);
    return null;
  });
}
