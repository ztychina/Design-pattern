class Singleton{
    constructor(name, age) {
        if(!Singleton.instance){
            this.name = name;
            this.age = age;
            Singleton.instance = this;
        }

        return Singleton.instance;
    }
}
let u1 = new Singleton('zty', 25);
let u2 = new Singleton('xm', 18);
console.log(u1 === u2, u1, u2);