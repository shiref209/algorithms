const bubbleSort=(arr)=>{
    // repeat
    for (let i=0;i<arr.length;i++){
        for (let j=0;j<arr.length-1;j++){
            let first=arr[j];
            let second=arr[j+1];
            if (first>second){
                arr[j]=second;
                arr[j+1]=first;
                
            }
        }
    
    }
    return arr
}

console.log(bubbleSort([-6,20,8,-2,4]))