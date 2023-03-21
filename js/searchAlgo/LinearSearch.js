function linearSearch(arr, n){
  
    for(let i = 0; i < arr.length; i++){
    if(arr[i] === n){
        return i
    }
 }
 return -1
}
let arr = [4, 8, 5, 9, 10];

console.log(linearSearch(arr, 9))

// Big-O => O(n) => Linear 