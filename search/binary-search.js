const binarySearch=(arr,t)=>{
    let leftIndex=0;
    let rightIndex=arr.length-1;
    while (
        leftIndex<=rightIndex
    ) {
        let middleIndex=Math.floor((rightIndex+leftIndex)/2);
        if (t===arr[middleIndex]){
            return middleIndex;
        }
        else if (t<arr[middleIndex]) {
            rightIndex=middleIndex-1;
            
        } else {
            leftIndex=middleIndex+1;
        }
    }
    return -1;
}
// Big O=O(logn)

console.log(binarySearch([1,3,5,7,9,11,15,16],5))
console.log(binarySearch([1,3,5,7,9,11,15,16],6))
console.log(binarySearch([1,3,5,7,9,11,15,16],16))
console.log(binarySearch([1,3,5,7,9,11,15,16],11))
console.log(binarySearch([1,3,5,7,9,11,15,16],9))