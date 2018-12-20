// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

export default function chunk(array, size) {
  let chunkCount = 0;
  const chunkedArr = [];
  let subArr = [];

  for (let i = 0; i < array.length; i++) {
    if (chunkCount < size) {
      subArr.push(array[i]);
      chunkCount += 1;
    }

    if (chunkCount === size) {
      chunkCount = 0;
      chunkedArr.push(subArr);
      subArr = [];
    }
  }

  if (array.length % size !== 0) {
    chunkedArr.push(subArr);
  }
  
  return chunkedArr;
}
