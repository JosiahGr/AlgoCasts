// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

export default function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChars = '';

  for (let char of str) { // eslint-disable-line
    if (charMap[char]) {
      charMap[char] += 1;
    } else {
      charMap[char] = 1;
    }
  }

  for (let char in charMap) { // eslint-disable-line
    if (charMap[char] > max) {
      max = charMap[char];
      maxChars = char;
    }
  }
  return maxChars;
}

