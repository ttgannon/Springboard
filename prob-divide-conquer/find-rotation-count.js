function findRotationCount(arr) {
    let rightIdx = arr.length-1;
    let leftIdx = 0;
    let midIdx;

    while (leftIdx < rightIdx) {
        midIdx = Math.floor((rightIdx + leftIdx) / 2);
        
        if (arr[leftIdx] < arr[rightIdx]) {
            return 0;
        }
        else if (arr[midIdx] < arr[rightIdx]) {
            rightIdx = midIdx;
        }
        else if (arr[midIdx] > arr[rightIdx]) {
            leftIdx = midIdx + 1;
        }
        
    }
    return midIdx + 1;
}

