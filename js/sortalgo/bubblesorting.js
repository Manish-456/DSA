const { log: print } = console;

// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }

// 
// let sortResult = bubbleSort(arr);
// print(sortResult);

// Big-O = O(n^2)

// using do while loop

function bubbleSort(arr) {
    let swapped;
  do{
    swapped = false;
        for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      swapped = true;  
    }
    }
  }while(swapped)
}

let arr = [-6, 20, 8, -2, 34, 78, -12, -99, 67, 4];
bubbleSort(arr);
print(arr);