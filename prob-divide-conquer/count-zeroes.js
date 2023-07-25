function countZeroes(arr) {
  let counter = 0;
  let rightIdx = arr.length-1;
  let leftIdx = 0;
  
  while (leftIdx < rightIdx) {
    let midIdx = Math.floor((rightIdx + leftIdx) / 2);
    
    if (arr[midIdx] === 1) {
        leftIdx = midIdx + 1;
    }
    else if (arr[midIdx] === 0) {
        rightIdx = midIdx;
    }
  }
  
  if (arr[rightIdx] === 1 && arr[leftIdx] === 1) {
    return 0;
  }
  else {
    counter = arr.length - leftIdx;
    return counter;
  }
  

}

// module.exports = countZeroes