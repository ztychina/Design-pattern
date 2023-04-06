function User(role, pages){
    this.role = role;
    this.pages = pages;
}
function UserFactory(role){
    switch(role){
        case 'superadmin':
            return new User("superadmin",["home", "user-manage",
                "right-manage", "news-manage"]);
        case 'admin':
            return new User("superadmin",["home", "user-manage",
                "news-manage"]);
        case 'editor':
            return new User("superadmin",["home", "news-manage"]);
        default:
            console.log('error');
    }
}
let u1 = UserFactory('superadmin');
console.log(u1);
// let u1 = new User('superadmin', ["home", "user-manage", "right-manage", "news-manage"]);
// let u2 = new User('superadmin', ["home", "user-manage", "news-manage"]);
// let u3 = new User('superadmin', ["home", "news-manage"]);