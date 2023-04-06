// function Employee(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Employee.prototype.say = function(){
//     console.log(this.name+'-'+this.age);
// }

class Employee{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    say(){
        console.log(this.name+'-'+this.age);
    }
}

let employee1 = new Employee('zty1', 11);
employee1.say();