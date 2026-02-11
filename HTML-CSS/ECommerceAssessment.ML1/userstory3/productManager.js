// Logger function (decorator concept)
function logChange(message) {
    console.log("✔ " + message);
}
// Product class
var Product = /** @class */ (function () {
    function Product(id, name, category, price, stock) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
        this.stock = stock;
    }
    Product.prototype.updatePrice = function (newPrice) {
        logChange("Price updated successfully");
        this.price = newPrice;
    };
    Product.prototype.updateStock = function (newStock) {
        logChange("Stock updated successfully");
        this.stock = newStock;
    };
    return Product;
}());
// Products storage
var products = [];
products.push(new Product(1, "Laptop", "Electronics", 50000, 5));
products.push(new Product(2, "Shoes", "Fashion", 2000, 10));
// Header
console.log("==============================");
console.log("PRODUCT UPDATE LOG");
console.log("==============================");
// Updates
products[0].updatePrice(48000);
products[1].updateStock(8);
// Inventory Output (NO padding methods)
console.log("------------------------------");
console.log("PRODUCT INVENTORY");
console.log("------------------------------");
for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
    var p = products_1[_i];
    console.log("Name: " + p.name +
        " | Price: ₹" + p.price +
        " | Stock: " + p.stock);
}
console.log("==============================");
