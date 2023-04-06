Function.prototype.before = function(beforeFn){
    let _this = this;
    return function(){
        beforeFn.apply(this, arguments);
        return _this.apply(this, arguments);
    }
}
Function.prototype.after = function(afterFn){
    let _this = this;
    return function(){
        let result = _this.apply(this, arguments)
        afterFn.apply(this, arguments);
        return result;
    }
}
function test(){
    console.log('111');
}
test();
let test1 = test.before(function(){
    console.log('000');
});
test1();
let test2 = test1.after(function(){
    console.log('222');
})
test2();