class Folder{
    constructor(folder) {
        this.folder = folder;
        this.list = [];
    }
    add(res){
        this.list.push(res);
    }
    scan(){
        console.log(`Folder-scan ${this.folder}`);
        for(let i=0; i<this.list.length; i++){
            this.list[i].scan();
        }
    }
}

let rootFolder = new Folder('root');

let htmlFolder = new Folder('html');
let cssFolder = new Folder('css');
let jsFolder = new Folder('js');

let jslibFolder = new Folder('jslib');

rootFolder.add(htmlFolder);
rootFolder.add(cssFolder);
rootFolder.add(jsFolder);
jsFolder.add(jslibFolder);

rootFolder.scan();
