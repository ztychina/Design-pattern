let Singleton = (function(){
    let instance;
    function User(name, age){
        this.name = name;
        this.age = age;
    }
    return function(name, age){
        if(!instance){
            instance = new User(name, age);
        }
        return instance;
    }
})();
console.log(Singleton('zty', 25));