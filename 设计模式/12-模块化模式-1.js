let count = 0;
function increase(){
    return ++count;
}
function decrease(){
    return --count;
}
function reset(){
    count = 0;
    return count
}
export default {
    increase,
    decrease,
    reset
}