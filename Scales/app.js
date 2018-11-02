var Product = /** @class */ (function () {
    function Product(name, weight) {
        this._name = name;
        this.weight = weight;
    }
    Product.prototype.getWeight = function () {
        return this.weight;
    };
    Product.prototype.getName = function () {
        return this._name;
    };
    return Product;
}());
var Scales = /** @class */ (function () {
    function Scales() {
        this.products = [];
    }
    Scales.prototype.add = function (product) {
        this.products = this.products.concat([product]);
    };
    Scales.prototype.getProducts = function () {
        return this.products;
    };
    Scales.prototype.getSumWeight = function () {
        var w = 0;
        this.products.map(function (p) {
            w += p.getWeight();
        });
        return w;
    };
    Scales.prototype.getNameList = function () {
        var w = [];
        this.products.map(function (p) {
            w.push(p.getName());
        });
        return w;
    };
    return Scales;
}());
var scales = new Scales();
scales.add(new Product('Potato', 10));
scales.add(new Product('Cabage', 20));
scales.add(new Product('Tomato', 30));
console.log(scales.getProducts());
console.log(scales.getNameList());
console.log(scales.getSumWeight());
//# sourceMappingURL=app.js.map