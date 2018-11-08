interface IScalable {
    getWeight(): number;
    getName(): string;
}


abstract class Product {

    protected name: string;
    private weight: number;

    constructor(weight) {
        this.weight = weight;
    }

    public getWeight(): number {
        return this.weight;
    }

    public getName(): string {
        return this.name;
    }
}


class Potato extends Product implements IScalable{
    protected name: string = 'Potato';
    constructor(weight) {
        super(weight);
    }
}

class Tomato implements IScalable {
    private name:string = 'Tomato';
    private weight: number;

    constructor(weight) {
        this.weight = weight;
    }

    public getWeight(): number {
        return this.weight;
    }

    public getName(): string {
        return this.name;
    }
}


class Scales {

    private products: IScalable[];

    constructor() {
        this.products = [];
    }

    add(product: IScalable): void {
        this.products.push(product);
    }

    getProducts(): IScalable[] {
        return this.products;
    }

    getSumWeight(): number {
        let w: number = 0;
        this.products.map((p) => {
            w += p.getWeight();
        });
        return w;
    }

    getNameList(): string[] {
        let w: string[] = [];
        this.products.map((p) => {
            w.push(p.getName());
        });
        return w;
    }
}


let scales: Scales = new Scales();

scales.add(new Potato( 10));
scales.add(new Tomato( 20));

console.log(scales.getProducts());
console.log(scales.getNameList());
console.log(scales.getSumWeight());
