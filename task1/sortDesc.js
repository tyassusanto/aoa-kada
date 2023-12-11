function sortDesc(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] > arr[i]) {
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }
    return arr;
  }
  let arr = [3, 7, 2, 1, 8, 4, 5, 6];
  console.log(sortDesc(arr));
   