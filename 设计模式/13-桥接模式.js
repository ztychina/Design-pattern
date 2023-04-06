/*
    将抽象部分与它的实现部分分离，使它们都可以独立地变化
    使用场景：
        一个类存在两个或者多个独立变化地维度，且这两个都需要进行扩展
        动画效果：bounce、slide、rotate
    缺点：
        每使用一个桥接元素都要增加一次函数调用，这对应用程序的性能会有一些负面影响——提高系统的复杂性；
*/
function Aodi(engine){
    this.engine = engine;
}
Aodi.prototype.platform = function(){
    console.log('aodi-platform');
}
Aodi.prototype.loadEngine = function(){
    this.engine.run();
}

function Aodi2(engine){
    this.engine = engine;
}
Aodi2.prototype.platform = function(){
    console.log('aodi-platform');
}
Aodi2.prototype.loadEngine = function(){
    this.engine.run();
}

function V6(){
    this.run = function(){
        console.log('V6-engine');
    }
}
function V8(){
    this.run = function(){
        console.log('V8-engine');
    }
}

let aodi1 = new Aodi(new V6());
let aodi2 = new Aodi(new V8());
aodi1.loadEngine();
aodi2.loadEngine();
let aodi3 = new Aodi2(new V6());
let aodi4 = new Aodi2(new V8());
aodi3.loadEngine();
aodi4.loadEngine();