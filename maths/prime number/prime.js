const isPrime = (n) => {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= n; i++) {
    if (n===2){return true};
    if (n % i === 0) {
      return false;
    }
    return true;
  }
};
// Big O= O(n)
console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(5));
