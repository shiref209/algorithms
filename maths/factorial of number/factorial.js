// W.done
const factorial=(n)=>{
    let result=1;
    for (let i=1;i<=n;i++){
        result*=i;
    }
    return result
}
// Big O is O(n)
console.log(factorial(5))
console.log(factorial(4))
// W.done