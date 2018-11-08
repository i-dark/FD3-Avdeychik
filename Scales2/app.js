var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Product = /** @class */ (function () {
    function Product(weight) {
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
var Potato = /** @class */ (function (_super) {
    __extends(Potato, _super);
    function Potato(weight) {
        var _this = _super.call(this, weight) || this;
        _this.name = 'Potato';
        return _this;
    }
    return Potato;
}(Product));
var Tomato = /** @class */ (function () {
    function Tomato(weight) {
        this.name = 'Tomato';
        this.weight = weight;
    }
    Tomato.prototype.getWeight = function () {
        return this.weight;
    };
    Tomato.prototype.getName = function () {
        return this.name;
    };
    return Tomato;
}());
var Scales = /** @class */ (function () {
    function Scales() {
        this.products = [];
    }
    Scales.prototype.add = function (product) {
        this.products.push(product);
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
scales.add(new Potato(10));
scales.add(new Tomato(20));
console.log(scales.getProducts());
console.log(scales.getNameList());
console.log(scales.getSumWeight());
//# sourceMappingURL=app.js.map