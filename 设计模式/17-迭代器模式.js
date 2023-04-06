let ztyEach = function(arr, callback){
    for(let i=0; i<arr.length; i++){
        callback(arr[i], i);
    }
}
ztyEach([1, 2, 3, 4], function(d, i){
    console.log(d, i);
});

// ES6 Iterator

let list = ['zty-1', 'zty-2', 'zty-3'];
console.log(list);
for(let name of list){
    console.log('name:', name);
}

let it = list[Symbol.iterator]();
console.log(Symbol.iterator);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());