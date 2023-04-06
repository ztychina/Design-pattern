// class Star{
//     play(){
//         console.log('演戏');
//     }
// }
// class StarProxy{
//     constructor() {
//         this.superstar = new Star();
//     }
//     talk(price){
//         if(price>=10000){
//             this.superstar.play()
//         } else {
//             throw Error('价格不合适');
//         }
//     }
// }
//
// let jr = new StarProxy();
// jr.talk(10000);
// jr.talk(1000);



// let star = {
//     name: 'zty',
//     workprice: 10000,
// }
// let proxy = new Proxy(star, {
//     get(target, key){
//         if(key==='workprice'){
//             console.log("访问了workprice");
//         }
//         return target[key];
//     },
//     set(target, key, value) {
//         if(key==='workprice'){
//             console.log('设置了');
//             if(value>10000){
//                 console.log('可以合作');
//             } else {
//                 console.log('价格不合适');
//             }
//         }
//         target[key] = value;
//         return target[key];
//     }
// })
// proxy.workprice = 1000;
// proxy.workprice = 20000;
// console.log(star.workprice);



let vueobj = {};
let proxy = new Proxy(vueobj, {
    get(target, p, receiver) {
        return target[p];
    },
    set(target, p, value, receiver) {
        if(p==='data'){
            // 操作dom
        }
        target[p] = value;
    }
})






