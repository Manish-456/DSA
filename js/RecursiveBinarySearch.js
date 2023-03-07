const { log: print } = console;
function recursiveBinarySearch(arr, target){
 return search(arr, target, 0, arr.length-1)
}

function search(arr, target, leftIndex, rightIndex){
    if(leftIndex > rightIndex){
        return -1
    }
    let middle = Math.floor((leftIndex + rightIndex) / 2);
    if(arr[middle] === target){
        return middle;
    }else if(arr[middle] > target){
        return search(arr, target, leftIndex, middle - 1)
    }else{
        return search(arr, target, middle + 1, rightIndex)
    }
}

print(recursiveBinarySearch([2, 3, 4, 5, 9, 12,14], 9)) // 4
print(recursiveBinarySearch([12, 33, 45, 55, 69], 45)) // 2
print(recursiveBinarySearch([1, 3, 6, 10, 14, 17,19], 6)) // 2


