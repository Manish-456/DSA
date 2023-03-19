const arr = [1, 2, 3, "Manish"]
arr.push(1, 2)
arr.unshift(0);

arr.pop();
arr.shift();
for(const item of arr){
    console.log(item)
}

// map, filter, reduce, concat, slice and splice

/* Big-O {
insert/remove from end - O(1)
insert/remove from beginning - O(n)
Access - O(1)
Search - O(n)
Push / Pop - O(1)
Slice, unshift, concat, shift, splice - O(n)
forEach / map / filter / reduce - O(n)
}
*/