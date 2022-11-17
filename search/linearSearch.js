const linearSearch = (n, t) => {
  for (let i = 0; i < n.length; i++) {
    if (n[i] === t) {
      return i;
    }

 
  }
  return -1;
};

// Big O=O(n)
console.log(linearSearch([1, 10, 3, 4], 3));
console.log(linearSearch([1, 10, 3, 4], 55));

// W.d