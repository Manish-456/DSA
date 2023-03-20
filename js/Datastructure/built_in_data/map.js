const map = new Map([['a', 1], ['b', 4]])
map.set('c', 8);
map.has('c')
map.delete('c')
for(let key of map){
    console.log(`${key}`);
}