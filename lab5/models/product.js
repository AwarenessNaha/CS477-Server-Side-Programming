let products = [];

class Product{
    constructor(id, title, price, description){
        this.id =id;
        this.title = title;
        this.price = price;
        this.description = description;
    }
    static getAll(){
        return products;
    }
    save(){
        this.id = Math.random().toString();
        products.push(this);
        return this;
    }
    static getProductById(productID){
        return products.find(prod => prod.id ===productId);
    }
}

module.exports = Product;