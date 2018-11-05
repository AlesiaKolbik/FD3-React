class Scales{
    productList: Array<IScalable>;

    constructor() {
        this.productList = [];
    }

    addProduct(product: IScalable): void {
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

abstract class Product{
    readonly scale:number;
    protected constructor(scale:number){
        this.scale = scale;
    }
}
interface IScalable {
getName():string;
getScale():number;
}

class Apple extends Product implements IScalable{
    readonly name:string;
    constructor(scale:number){
        super(scale);
        this.name = 'apple';
    }
    getName():string{
        return this.name;
    }
    getScale():number{
        return this.scale;
    }
}
class Tomato extends Product implements IScalable{
    readonly name:string;
    constructor(scale:number){
        super(scale);
        this.name = 'tomato';
    }
    getName():string{
        return this.name;
    }
    getScale():number{
        return this.scale;
    }
}

let scales = new Scales();
let apple = new Apple(250);
let tomato = new Tomato(205);

scales.addProduct(apple);
scales.addProduct(tomato);
console.log('Total weight: ' + scales.getSumScale());
console.log(scales.getNameList());