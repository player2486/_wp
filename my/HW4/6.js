function filterArray(arr, callback) {
    return arr.filter(callback);
  }
  
  console.log(filterArray([1, 2, 3, 4, 5], n => n % 2 === 0)); 
  