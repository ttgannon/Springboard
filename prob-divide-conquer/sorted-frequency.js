function sortedFrequency(arr, num) {
    
    function findLeft(arr, num) {
      let left = 0;
      let right = arr.length - 1;
      let leftmost = -1;
  
      while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] >= num) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
        if (arr[mid] === num) {
          leftmost = mid;
        }
      }
  
      return leftmost;
    }
  
    function findRight(arr, num) {
      let left = 0;
      let right = arr.length - 1;
      let rightmost = -1;
  
      while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] <= num) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
        if (arr[mid] === num) {
          rightmost = mid;
        }
      }
  
      return rightmost;
    }
  
    const leftmostIdx = findLeft(arr, num);
    const rightmostIdx = findRight(arr, num);
  
    if (leftmostIdx === -1 || rightmostIdx === -1) {
      return -1;
    }
  
    return rightmostIdx - leftmostIdx + 1;
  }
  