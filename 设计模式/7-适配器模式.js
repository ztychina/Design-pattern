// 将一个类的接口转换成客户希望的另一个接口，适配器模式让那些接口不兼容的类可以一起工作
// axios在web和nodejs环境都可以使用，这是因为axios做了适配器
class TencentMap{
    show(){
        console.log('TencentMap-show');
    }
}
class BaiduMap{
    display(){
        console.log('BaiduMap-display');
    }
}
class TencentAdapater extends TencentMap{
    constructor(){
        super();
    }
    display(){
        this.show();
    }
}
function renderMap(map){
    map.display();
}
renderMap(new TencentAdapater());
renderMap(new BaiduMap());
// renderMap(new TencentMap());
