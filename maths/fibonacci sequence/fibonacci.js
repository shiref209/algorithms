const fibonacci=(n)=>{
    // fibonacci sequence starts at [0,1]
    const start=[0,1];
    for (let i=2;i<n;i++){
        start[i]=start[i-1]+start[i-2]
    }
    return start;
}
// Big O is O(n)==> only one loop and n is called one line
console.log(fibonacci(5));
console.log(fibonacci(7));