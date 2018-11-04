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


class Potato extends Product {
    protected name: string = 'Potato';
    constructor(weight) {
        super(weight);
    }
}
class Tomato extends Product {
    protected name:string = 'Tomato';
    constructor(weight) {
        super(weight);
    }
}


class Scales {

    private products: Product[];

    constructor() {
        this.products = [];
    }

    add(product: Product): void {
        this.products.push(product);
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
