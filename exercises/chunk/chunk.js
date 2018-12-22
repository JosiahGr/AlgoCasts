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
