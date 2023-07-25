function findRotatedIndex(arr, num) {
    let rightIdx = arr.length-1;
    let leftIdx = 0;
    
    while (leftIdx < rightIdx) {
        let midIdx = Math.floor((rightIdx + leftIdx) / 2);
        
        if (arr[midIdx] > num && num < arr[leftIdx]) {
            leftIdx = midIdx + 1;
        }
        else if (arr[midIdx] < num) {
            leftIdx = midIdx + 1;
        }
        else if (arr[midIdx] > num && num > arr[leftIdx]) {
            rightIdx = midIdx;
        }

        else {
            return midIdx;
        }

        
    }
    return -1;
}
    
    