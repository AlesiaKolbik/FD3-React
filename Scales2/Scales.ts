class Scales{
    productList: Array<IScalable>;

    constructor() {
        this.productList = [];
    }

    addProduct(product: IScalable): void {
        this.productList.push(product);
    }

    getSumScale(): number {
        let result: number = 0;
        for(let i=0;i<this.productList.length;i++){
            result += this.productList[i].getScale();
        }
        return result;
    }

    getNameList(): Array<string> {
        let result = [];
        for(let i=0;i<this.productList.length;i++){
            result.push(this.productList[i].getName());
        }
        return result;
    }
}

class Product{
    getName():string{
        return
    }
    getScale():number{
        return
    }
}

interface IScalable {
getName():string;
getScale():number;
}

class Apple extends Product implements IScalable{
    readonly name:string;
    constructor(private scale:number){
        super();
    }
    getName():string{
        return 'apple';
    }
    getScale():number{
        return this.scale;
    }
}
class Tomato extends Product implements IScalable{
    readonly name:string;
    constructor(private scale:number){
        super();
    }
    getName():string{
        return 'tomato';
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