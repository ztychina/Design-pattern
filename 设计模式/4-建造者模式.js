// 将一个复杂对象的构建层与其表示层互相分离
class Navbar{
    init(){
        console.log('navbar-init');
    }
    getData(){
        console.log('navbar-getData');
        return new Promise((resolve => {
            setTimeout(()=>{
                resolve('promise-getData')
            }, 1000);
        }))
    }
    render(){
        console.log('navbar-render');
    }
}
class Creator{
    async startBuild(builder){
        await builder.init();
        await builder.getData();
        await builder.render();
    }
}
const creator = new Creator();
creator.startBuild(new Navbar());