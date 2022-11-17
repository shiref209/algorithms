const recursiveFactorial=(n)=>{
    if (n===0){
        return 1
    }

    return n*recursiveFactorial(n-1)
}
console.log(recursiveFactorial(5)) //120
console.log(recursiveFactorial(2))//2
console.log(recursiveFactorial(1)) //1
console.log(recursiveFactorial(0)) //1

// W.D
// Big O=O(n)