const obj = {
    name : "Bruce",
    age: 25
}
console.log(obj.name);
console.log(obj.age);
obj.hobby = "asturbation"
delete obj.hobby

for(let key in obj){
    console.log(`${key} : ${obj[key]}`)
}

/* Big-O {
insert - O(1)
Remove - O(1)
Search - O(n) => linear
Object.keys - O(n)
Object.values - O(n)
Object.entries - O(n)
}
*/