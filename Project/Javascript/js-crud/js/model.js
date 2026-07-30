class ProductModel {
    constructor() {
        this.products = JSON.parse(localStorage.getItem("productsList")) || [];
    }

    save() {
        localStorage.setItem("productsList", JSON.stringify(this.products));
    }

    getAll() {
        return this.products;
    }

    add(product) {
        this.products.push(product);
        this.save();
    }

    update(index, product) {
        this.products[index] = product;
        this.save();
    }

    delete(index) {
        this.products.splice(index, 1);
        this.save();
    }

    exists(name) {
        return this.products.some(
            p => p.name.toLowerCase() === name.toLowerCase()
        );
    }

    searchByName(text) {
        return this.products.filter(p =>
            p.name.toLowerCase().includes(text.toLowerCase())
        );
    }

    searchByCategory(text) {
        return this.products.filter(p =>
            p.cate.toLowerCase().includes(text.toLowerCase())
        );
    }
}