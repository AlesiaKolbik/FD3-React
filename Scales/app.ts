class Scales {
    productList: Array<Product>;

    constructor() {
        this.productList = [];
    }

    addProduct(product: Product): void {
        this.productList.push(product);
    }

    getSumScale(): number {
        let scale: number;
        let result: number = 0;
        this.productList.map(item => {
            scale = item.getScale();
            result += scale;
        });
        return result;
    }

    getNameList(): Array<string> {
        let result = this.productList.map(item => {
            return item.getName();
        });
        return result;
    }
}

class Product{
    protected constructor(){
    }
    getScale():number{
        return
    }
    getName():string{
        return
    }
}

class Apple extends Product{
    constructor( private scale:number, private name:string){
        super();
    }
    getScale():number{
        return this.scale
    }
    getName():string{
        return this.name
    }

}
class Tomato extends Product{
    constructor( private scale:number, private name:string){
        super();
    }
    getScale():number{
        return this.scale
    }
    getName():string{
        return this.name
    }
}


let scales = new Scales();
let apple = new Apple(100,"apple1");
let tomato = new Tomato(50,"tomato1");
let apple2 = new Apple(88,"apple2");

scales.addProduct(apple);
scales.addProduct(tomato);
scales.addProduct(apple2);
console.log('Total weight: ' + scales.getSumScale());
console.log(scales.getNameList());

