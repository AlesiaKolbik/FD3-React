class Product{
    constructor(private scale:number, private name:string){
    }
    getName = ():string => {
        return this.name;
    };
    getScale = ():number =>{
        return this.scale;
    };
}

interface IStorageEngine{
    addItem(item);
    getItem(index);
    getCount();
}

class Scales <StorageEngine extends IStorageEngine>{
    productList:StorageEngine;
    constructor(private storage:StorageEngine){
    }
    addItem(item){
        return this.storage.addItem(item);
    }
    getSumScale(): number {
        let scale: number = 0;
        let lengthProductList:number = this.storage.getCount();
        for(let i=0;i<lengthProductList;i++){
            let item:Product =  this.storage.getItem(i);
            scale += item.getScale();
        }
        return scale;
    }

    getNameList(): Array<string> {
        let result:Array<string> = [];
        let lengthProductList:number = this.storage.getCount();
        for(let i=0;i<lengthProductList;i++){
            result.push(this.storage.getItem(i).getName());
        }
        return result;
    }
}

class ScalesStorageEngineArray implements IStorageEngine{
    private state:Array<Product>;
    constructor(){
         this.state = [];
    }
    addItem(item){
        this.state.push(item);
        return this.state.length-1;
    }
    getItem(index){
        return this.state[index];
    }
    getCount(){
        return this.state.length;
    }
}

class ScalesStorageEngineLocalStorage implements IStorageEngine{
    private readonly key;
    private state:Array<Product>;
    constructor(){
        this.key = 'productList';
        this.state = [];
        this.setArrayInLocalStorage(this.state);
    }
    addItem(item){
        this.state = this.getArrayFromLocalStorage();
        this.state.push(item);
        this.setArrayInLocalStorage(this.state);
    }
    getItem(index){
        this.state = this.getArrayFromLocalStorage();
        return this.deserializeObjToProduct(this.state[index]);
    }
    getCount(){
        this.state = this.getArrayFromLocalStorage();
        return this.state.length;
    }
    private getArrayFromLocalStorage(){
        return (JSON.parse(localStorage.getItem(this.key)));
    }
    private setArrayInLocalStorage(array){
        localStorage.setItem(this.key, JSON.stringify(array));
    }
    private deserializeObjToProduct(obj) {
        return new Product(obj.scale, obj.name); // Создаем новый инстанс
    }
}

let tomato = new Product(40, 'tomato');
let potato = new Product(80, 'potato');
let apple = new Product(75, 'apple');
let cucumber = new Product(100, 'cucumber');

let scales = new Scales<ScalesStorageEngineArray>(new ScalesStorageEngineArray());
let scales2 = new Scales< ScalesStorageEngineLocalStorage>(new ScalesStorageEngineLocalStorage());

scales.addItem(tomato);
scales.addItem(potato);
scales.addItem(cucumber);

scales2.addItem(tomato);
scales2.addItem(apple);
scales2.addItem(tomato);

console.log('Total weight: ' + scales.getSumScale());
console.log(scales.getNameList());

console.log('Total weight: ' + scales2.getSumScale());
console.log(scales2.getNameList());

