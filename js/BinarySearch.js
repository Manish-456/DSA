const { log: print } = console;
function binarySearch(arr, target) {
  let start = 0,
    end = arr.length - 1;
  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (arr[middle] === target) {
      return middle;
    } else if (arr[middle] < target) {
      start = middle + 1;
    } else if (arr[middle] > target) {
      end = middle - 1;
    }
}
return -1;
}
let numList = [2, 4, 6, 8, 10, 12];
let searchResult = binarySearch(numList, 10);
print(searchResult);
