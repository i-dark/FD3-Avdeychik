interface IScalable {
    getWeight(): number;

    getName(): string;
}

class Product implements IScalable {
    private name: string;
    private weight: number;

    constructor(name: string, weight: number) {
        this.name = name;
        this.weight = weight;
    }

    public getWeight(): number {
        return this.weight;
    }

    public getName(): string {
        return this.name;
    }
}


interface IStorageEngine {
    addItem(item: Product);

    getItem(index: number): Product;

    getCount(): number;
}


class ScalesStorageEngineArray implements IStorageEngine {

    private items: Product[] = [];

    addItem(item: Product) {
        this.items.push(item);
    }

    getCount(): number {
        return this.items.length;
    }

    getItem(index: number): Product {
        return this.items[index];
    }

}


class ScalesStorageEngineLocalStorage implements IStorageEngine {

    private items: Product[] = [];

    constructor() {
        if (window.localStorage.getItem('items')) {
            this.items = JSON.parse(window.localStorage.getItem('items'));
        }
    };

    save(): void {
        window.localStorage.setItem('items', JSON.stringify(this.items))
    }

    addItem(item: Product) {
        this.items.push(item);
        this.save();
    }

    getCount(): number {
        return this.items.length;
    }

    getItem(index: number): Product {
        return this.items[index];
    }

}


class Scales<StorageEngine extends IStorageEngine> {

    private storage: StorageEngine;

    constructor(storage: StorageEngine) {
        this.storage = storage;
    }

    add(product: Product): void {
        this.storage.addItem(product);
    }

    getSumWeight(): number {
        let w: number = 0;
        for (let i = 0; i < this.storage.getCount(); i++) {
            w += this.storage.getItem(i).getWeight();
        }
        return w;
    }

    getNameList(): string[] {
        let w: string[] = [];
        for (let i = 0; i < this.storage.getCount(); i++) {
            w.push(this.storage.getItem(i).getName());
        }
        return w;
    }

    getProducts(): Product[] {
        let w: Product[] = [];
        for (let i = 0; i < this.storage.getCount(); i++) {
            w.push(this.storage.getItem(i));
        }
        return w;
    }

}


let scales: Scales<ScalesStorageEngineArray> = new Scales(new ScalesStorageEngineArray());


scales.add(new Product('Banan', 10));
scales.add(new Product('Tomato', 20));

console.log(scales.getProducts());
console.log(scales.getNameList());
console.log(scales.getSumWeight());


let scales1: Scales<ScalesStorageEngineLocalStorage> = new Scales(new ScalesStorageEngineLocalStorage());


scales1.add(new Product('Potato', 10));
scales1.add(new Product('Butter', 20));

console.log(scales1.getProducts());
console.log(scales1.getNameList());
console.log(scales1.getSumWeight());
