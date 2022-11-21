const recursiveBinarySearch = (
  arr,
  t,
  rightIndex = arr.length - 1,
  leftIndex = 0
) => {
    let middleIndex=arr.length/2;
    if (arr[middleIndex]===t){
        return middleIndex;
    }
    else if(leftIndex>=rightIndex){
        return -1
    }
    else if(arr[middleIndex]<t){
        leftIndex=middleIndex+1;
        recursiveBinarySearch(arr,t,rightIndex,leftIndex)
    }
    else {
        rightIndex=middleIndex-1;
        recursiveBinarySearch(arr,t,rightIndex,leftIndex)
    }
};

// Big O= O(logn)
console.log(binarySearch([1,3,5,7,9,11,15,16],5))
console.log(binarySearch([1,3,5,7,9,11,15,16],6))
console.log(binarySearch([1,3,5,7,9,11,15,16],16))
console.log(binarySearch([1,3,5,7,9,11,15,16],11))
console.log(binarySearch([1,3,5,7,9,11,15,16],9))
// W.D