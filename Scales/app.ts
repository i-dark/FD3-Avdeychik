class Product {
    private _name: string;
    private weight: number;

    constructor(name, weight) {
        this._name = name;
        this.weight = weight;
    }

    public getWeight():number {
        return this.weight;
    }

    public getName(): string {
        return this._name;
    }
}


class Scales {

    private products: Product[];

    constructor() {
        this.products = [];
    }

    add(product: Product): void {
        this.products = [...this.products, product]
    }

    getProducts(): Product[] {
        return this.products;
    }

    getSumWeight(): number {
        let w: number = 0;
        this.products.map((p) => {
            w += p.getWeight();
        });
        return w;
    }

    getNameList():string[] {
        let w: string[] = [];
        this.products.map((p) => {
            w.push(p.getName());
        });
        return w;
    }
}


let scales: Scales = new Scales();

scales.add(new Product('Potato', 10));
scales.add(new Product('Cabage', 20));
scales.add(new Product('Tomato', 30));

console.log(scales.getProducts());
console.log(scales.getNameList());
console.log(scales.getSumWeight());
