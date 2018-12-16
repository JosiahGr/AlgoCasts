// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

export default function reverse(str) {
  let newString = '';
  for (let i = 0; i < str.length; i++) {
    newString = `${str[i]}${newString}`;
  }
  return newString;
}

