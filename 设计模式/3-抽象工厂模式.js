class User{
    constructor(name, role, pages) {
        this.name = name;
        this.role = role;
        this.pages = pages;
    }
    welcome(){
        console.log('welcome', this.name);
    }
    dataShow(){
        console.log('error incomplete');
    }
}
class SuperAdmin extends User{
    constructor(name) {
        super(name, "superadmin",["home", "user-manage",
            "right-manage", "news-manage"]);
    }
    dataShow(){
        console.log('superadmin-datashow');
    }
    addRight(){}
    addLeft(){}
}
class Admin extends User{
    constructor(name) {
        super(name, "admin",["home", "user-manage",
            "news-manage"]);
    }
    dataShow(){
        console.log('admin-datashow');
    }
    addUser(){}
}
class Editor extends User{
    constructor(name) {
        super(name, "editor",["home", "news-manage"]);
    }
    dataShow(){
        console.log('editor-datashow');
    }
}
function getAbstractUserFactory(role){
    switch(role){
        case 'superadmin':
            return SuperAdmin;
        case 'admin':
            return Admin;
        case 'editor':
            return Editor;
        default:
            console.log('error');
    }
}
let UserClass = getAbstractUserFactory('superadmin');
let u1 = new UserClass('zty');
console.log(u1);