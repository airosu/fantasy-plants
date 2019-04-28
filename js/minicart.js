

// ====================================== PRODUCT CLASS ====================================

class Product {
    constructor(id, name, price, img, qty) {
        this.id = id
        this.name = name
        this.price = price
        this.img = img
        this.qtty = qty
    }
}








// ====================================== LOCAL STORAGE ====================================

class Store {
    static getItems() {
        let items;

        if (localStorage.getItem('products') === null) {
            items = [];
        } else {
            items = JSON.parse(localStorage.getItem('products'));
        }

        return items;
    }



    static addItem(product) {
        let items = this.getItems();

        items.push(product.id);
        localStorage.setItem('products', JSON.stringify(items));
    }




    static removeItem(product) {
        let items = this.getItems();

        for (let i of items) {
            if (i == product.id) {
                items = items.filter(save => save != i);
            }
        }

        items.setItem('products', JSON.stringify(items));
    }
}







// ====================================== CART PRODUCTS ====================================

class Cart {
    static getCartProducts() {
        let storedProducts = Store.getItems();
        let cartProducts = [];

        for (let i of localProducts) {
            for (let s of storedProducts) {
                if (i.id == s) {
                    cartProducts.push(i);
                }
            }
        }
        console.log(cartProducts);
        return cartProducts;

    }
}






// ======================================= UI PRODUCTS =====================================

















// QA
// Store.addItem(localProducts[26]);
// Cart.getCartProducts();
