function insertionSort (arr) {
    for(let i = 1; i < arr.length; i++) {
        let numberToInsert = arr[i]; // 3
        let j = i - 1; // assume j is the index which we need to sort

    while(j >= 0 && arr[j] > numberToInsert){
        arr[j + 1] = arr[j];
        j = j - 1;
    }
  arr[j + 1] = numberToInsert;

    }
}
let arr = [9, -4, 3, 1, 30, -12, 45, 155]
insertionSort(arr); // [-4, 1, 3, 9, 30]
console.log(arr);
//we need to provide two check like if the array is empty or not  and if the left element is greater than numberToSort or not
// initially NIT = -4 => index 1
// j = 9 => index 0
// [9 , 9, 3, 1, 30]
// [-4, 9, 3, 1, 30]


// [-4, 9, 9, 1, 30]
// [-4, 3, 9, 1, 30]
// [-4, 3, 9 , 9, 30]
// [-4, 3, 3, 9, 30]
// [-4, 1, 3, 9, 30]

// function execution
// let numberToInsert = NIT
