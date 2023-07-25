function findFloor(arr, num) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  let midIdx;
  let desired = num - 1;
  
  while (leftIdx < rightIdx) {
    midIdx = Math.floor((leftIdx + rightIdx) / 2);

    if (arr[midIdx] > num) {
        if (arr[midIdx-1] <= desired) {
            return arr[midIdx-1];
        }
        rightIdx = midIdx;
    }
    else if (arr[midIdx] < num) {
        if (arr[midIdx+1] > desired) {
            return arr[midIdx];
        }
        else if (arr[midIdx+1] = desired) {
            return desired;
        }
        leftIdx = midIdx+1;
    }
    else {
        return 0;
    }
  }
  return -1;
}
