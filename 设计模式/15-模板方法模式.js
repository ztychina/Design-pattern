let Container = function(params={}){
    let F = function(){}
    F.prototype.init = async function(){
        let list = await this.getData();
        this.render(list);
    }

    F.prototype.getData = params.getData || function(){
        console.log('必须传入getData');
    }
    F.prototype.render = function(list){
        console.log('render', list);
    }
    return F;
}
let Myclass = Container({
    getData(){
        console.log('获取comingsoon');
        return [1, 2, 3];
    }
})
new Myclass().init();
let Myclass2 = Container({
    getData(){
        console.log('获取comingsoon');
        return [4, 5, 6];
    }
})
new Myclass2().init();