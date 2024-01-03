export default function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    return Error('can not divide by 0');
  }
  return (numerator / denominator);
}
