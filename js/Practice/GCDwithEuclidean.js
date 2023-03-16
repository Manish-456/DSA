// find GCD using eculidian algorithm in js

// function GCD(a, b) {
//  if(a < b){
//     [a, b] = [b , a]
//  }
//  while(b !== 0){
//     let rem = a % b;
//     a = b;
//     b = rem;
//  }
//  return a;
// }
// let a = GCD(25, 60)
// console.log(a);

// recursive solution
function GCD(a , b){
   // a needs to be greater than b 
    if(a < b){
        [a , b] = [b , a]
    }

    if(b === 0){
        return a;
    }
    const rem = a % b;
    a = b;
    b = rem;
    return GCD(b , a);
}

let a = GCD(24, 36)
console.log(a);
