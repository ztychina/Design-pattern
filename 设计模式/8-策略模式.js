// 个人看法：策略模式可以使用对象、Map也可以使用函数柯里化
// 可以适用于node的路由 路由匹配策略
let strategry = {
    'A':(salary)=>{
        return salary*4;
    },
    'B':(salary)=>{
        return salary*3;
    },
    'C':(salary)=>{
        return salary*2;
    },
}

function calBonus(level, salary){
    return strategry[level](salary);
}
console.log(calBonus('A', 1000));