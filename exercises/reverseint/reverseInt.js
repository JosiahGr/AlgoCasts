// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

export default function reverseInt(n) {
  const myNumber = n.toString().split('').reverse().join('');

  if (n < 0) {
    return parseInt(myNumber, 10) * -1;
  }
  
  return parseInt(myNumber, 10);
}
