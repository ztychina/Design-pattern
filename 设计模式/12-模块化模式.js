const obj = (function(){
    let count = 0;
    return {
        increase(){
            return ++count;
        },
        decrease(){
            return --count;
        },
         reset: function(){
            count = 0;
            return count;
        }
    }
})();
obj.increase();
console.log(obj.increase());
console.log(obj.reset());
console.log(obj.decrease());