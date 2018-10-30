// import Apple from './Apple.js';
// import Tomato from './Tomato.js';
// import Scales from './Scales.js';
// import Product from './Product.js';
class Scales{
    productList:Array<any>;
    constructor(){
        this.productList = [];
    }
    addProduct(product:Product):void{
        this.productList = [...this.productList, product];
    }
    getSumScale():string{
        let scale: number;
        let result:number = 0;
        this.productList.map(item => {
                scale = item.getScale();
                result+=scale;
        });
        return result+' gr.';
    }
    showNameList():void{
        let result = [];
        let name:string;
        this.productList.map(item =>{
            name = item.getName();
            result.push(name);
        });
        console.log('List of products: ');
        for(let i=0;i<result.length;i++){
            console.log((i+1)+': ' + result[i]);
        }
    }
}

abstract class Product{
    readonly scale:number;
    protected constructor(scale:number){
        this.scale = scale;
    }
    getScale():number{
        return this.scale;
    }
    abstract getName():string;
}

class Apple extends Product{
    readonly name:string;
    constructor(scale:number){
        super(scale);
        this.name = 'apple';
    }
    getName():string{
        return this.name;
    }
}
class Tomato extends Product{
    readonly name:string;
    constructor(scale:number){
        super(scale);
        this.name = 'tomato';
    }
    getName():string{
        return this.name;
    }
}
class Cucumber extends Product{
    readonly name:string;
    constructor(scale:number){
        super(scale);
        this.name = 'cucumber';
    }
    getName():string{
        return this.name;
    }
}

let scales = new Scales();
let apple = new Apple(250);
let tomato = new Tomato(205);
let cucumber = new Cucumber(500);

scales.addProduct(apple);
scales.addProduct(tomato);
scales.addProduct(cucumber);
console.log('Total weight: ' + scales.getSumScale());
scales.showNameList();

