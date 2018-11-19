var Product = /** @class */ (function () {
    function Product(name, weight) {
        this.name = name;
        this.weight = weight;
    }
    Product.prototype.getWeight = function () {
        return this.weight;
    };
    Product.prototype.getName = function () {
        return this.name;
    };
    return Product;
}());
var ScalesStorageEngineArray = /** @class */ (function () {
    function ScalesStorageEngineArray() {
        this.items = [];
    }
    ScalesStorageEngineArray.prototype.addItem = function (item) {
        this.items.push(item);
    };
    ScalesStorageEngineArray.prototype.getCount = function () {
        return this.items.length;
    };
    ScalesStorageEngineArray.prototype.getItem = function (index) {
        return this.items[index];
    };
    return ScalesStorageEngineArray;
}());
var ScalesStorageEngineLocalStorage = /** @class */ (function () {
    function ScalesStorageEngineLocalStorage() {
        var _this = this;
        this.items = [];
        if (window.localStorage.getItem('items')) {
            var items = JSON.parse(window.localStorage.getItem('items'));
            items.forEach(function (item) {
                _this.items.push(new Product(item.name, item.weight));
            });
        }
    }
    ;
    ScalesStorageEngineLocalStorage.prototype.save = function () {
        window.localStorage.setItem('items', JSON.stringify(this.items));
    };
    ScalesStorageEngineLocalStorage.prototype.addItem = function (item) {
        this.items.push(item);
        this.save();
    };
    ScalesStorageEngineLocalStorage.prototype.getCount = function () {
        return this.items.length;
    };
    ScalesStorageEngineLocalStorage.prototype.getItem = function (index) {
        return this.items[index];
    };
    return ScalesStorageEngineLocalStorage;
}());
var Scales = /** @class */ (function () {
    function Scales(storage) {
        this.storage = storage;
    }
    Scales.prototype.add = function (product) {
        this.storage.addItem(product);
    };
    Scales.prototype.getSumWeight = function () {
        var w = 0;
        for (var i = 0; i < this.storage.getCount(); i++) {
            w += this.storage.getItem(i).getWeight();
        }
        return w;
    };
    Scales.prototype.getNameList = function () {
        var w = [];
        for (var i = 0; i < this.storage.getCount(); i++) {
            w.push(this.storage.getItem(i).getName());
        }
        return w;
    };
    Scales.prototype.getProducts = function () {
        var w = [];
        for (var i = 0; i < this.storage.getCount(); i++) {
            w.push(this.storage.getItem(i));
        }
        return w;
    };
    return Scales;
}());
var scales = new Scales(new ScalesStorageEngineArray());
scales.add(new Product('Banan', 10));
scales.add(new Product('Tomato', 20));
console.log(scales.getProducts());
console.log(scales.getNameList());
console.log(scales.getSumWeight());
var scales1 = new Scales(new ScalesStorageEngineLocalStorage());
scales1.add(new Product('Potato', 10));
scales1.add(new Product('Butter', 20));
console.log(scales1.getProducts());
console.log(scales1.getNameList());
console.log(scales1.getSumWeight());
//# sourceMappingURL=app.js.map