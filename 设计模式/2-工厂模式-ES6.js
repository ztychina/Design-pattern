class User{
    constructor(role, pages) {
        this.role = role;
        this.pages = pages;
    }
    static UserFactory(role){
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
}

let u1 = User.UserFactory('superadmin');
console.log(u1);