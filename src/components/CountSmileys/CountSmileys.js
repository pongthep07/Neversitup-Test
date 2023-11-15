export function countSmileys(arr) {
  const validSmileys = arr.filter((face) => /^[:;][-~]?[)D]$/.test(face));
  return validSmileys.length;
}
