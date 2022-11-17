const recursiveFibonacci=(n)=>{
    if(n<2){
        return n
    }
return recursiveFibonacci(n-1)+recursiveFibonacci(n-2)
    
}
// Big O= O(2^n)
// iterative is much better for fibonacci
console.log(recursiveFibonacci(6))