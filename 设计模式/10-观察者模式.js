/*
    优点：
    目标者与观察者，功能耦合度降低，专注自身功能逻辑；
    观察者被动接收更新，时间上解耦，实时接收目标者更新状态；
    缺点：
    观察者模式虽然实现了对象间依赖关系的低耦合，但却不能对事件通知进行细分管控；
*/
class Subject{
    constructor() {
        this.observers = [];
        this.state = "";
    }
    add(observer){
        this.observers.push(observer);
    }
    remove(observer){
        this.observers = this.observers.filter((item)=>item!=observer);
    }
    setState(state){
        this.state = state;
        this.observers.forEach((observer)=>{
            observer.update(state);
        })
    }
}
class Observer{
    constructor(name) {
        this.name = name;
    }
    update(state){
        console.log(`${this.name} update ${state}`);
    }
}
let o1 = new Observer('o1');
let o2 = new Observer('o2');
let s1 = new Subject();
s1.add(o1);
s1.add(o2);
s1.setState('200');
s1.remove(o2);
s1.setState('404');